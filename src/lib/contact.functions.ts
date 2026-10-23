import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { contactSchema } from "@/lib/contact-schema";

export const submitContactEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const request = getRequest();
    const address = request.headers.get("cf-connecting-ip") ?? "unknown";
    const userAgent = request.headers.get("user-agent") ?? "unknown";
    const keyMaterial = new TextEncoder().encode(`${address}|${userAgent}`);
    const digest = await crypto.subtle.digest("SHA-256", keyMaterial);
    const keyHash = Array.from(new Uint8Array(digest), (value) =>
      value.toString(16).padStart(2, "0"),
    ).join("");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: allowed, error: limitError } = await supabaseAdmin.rpc(
      "consume_contact_rate_limit",
      {
        _key_hash: keyHash,
      },
    );

    if (limitError) {
      throw new Error("Your enquiry could not be saved. Please try again shortly.");
    }
    if (!allowed) {
      throw new Error("Please wait a few minutes before sending another enquiry.");
    }

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      subject: data.subject,
      category: "Contact enquiry",
      message: data.message,
    });

    if (error) {
      throw new Error("Your enquiry could not be saved. Please try again shortly.");
    }

    return { success: true as const };
  });
