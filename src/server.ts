import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/api/whatsapp") {
        const phone = "919160846529";
        if (request.method === "POST") {
          let bodyText = "";
          try {
            const body = (await request.json()) as {
              name?: string;
              message?: string;
              subject?: string;
              email?: string;
              phone?: string;
            };
            const parts = [
              "*New Enquiry for KODVIT*",
              body.name ? `*Name:* ${body.name}` : null,
              body.email ? `*Email:* ${body.email}` : null,
              body.phone ? `*Phone:* ${body.phone}` : null,
              body.subject ? `*Subject:* ${body.subject}` : null,
              body.message ? `*Message:* ${body.message}` : null,
            ]
              .filter(Boolean)
              .join("\n");
            bodyText = parts || "Hello KODVIT, I would like to enquire about your services.";
          } catch {
            bodyText = "Hello KODVIT, I would like to enquire about your services.";
          }
          const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(bodyText)}`;
          return new Response(JSON.stringify({ ok: true, phone, whatsappUrl }), {
            status: 200,
            headers: { "content-type": "application/json" },
          });
        }

        const message =
          url.searchParams.get("text") ||
          url.searchParams.get("message") ||
          "Hello KODVIT, I would like to enquire about your services.";
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        if (url.searchParams.get("redirect") === "true") {
          return Response.redirect(whatsappUrl, 302);
        }
        return new Response(JSON.stringify({ ok: true, phone, whatsappUrl }), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
