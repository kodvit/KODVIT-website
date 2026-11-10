import { spawn } from "node:child_process";
import { mkdir, writeFile, cp } from "node:fs/promises";
import { resolve, dirname } from "node:path";

async function postbuild() {
  console.log("Postbuild: Starting temporary server to prerender static pages...");
  const port = 3456;
  const child = spawn("node", [".output/server/index.mjs"], {
    env: { ...process.env, PORT: String(port) },
    stdio: "ignore",
  });

  // Wait for server to start
  await new Promise((r) => setTimeout(r, 1500));

  const routes = [
    { path: "/", file: "index.html" },
    { path: "/about", file: "about/index.html" },
    { path: "/solutions", file: "solutions/index.html" },
    { path: "/products", file: "products/index.html" },
    { path: "/trinetra-tech", file: "trinetra-tech/index.html" },
    { path: "/gallery", file: "gallery/index.html" },
    { path: "/contact", file: "contact/index.html" },
  ];

  try {
    for (const route of routes) {
      try {
        const res = await fetch(`http://127.0.0.1:${port}${route.path}`);
        if (res.ok) {
          const html = await res.text();
          // Write to .output/public
          const outPath = resolve(".output/public", route.file);
          await mkdir(dirname(outPath), { recursive: true });
          await writeFile(outPath, html, "utf8");

          // If root index.html, write to root as well
          if (route.file === "index.html") {
            await writeFile(resolve("index.html"), html, "utf8");
          }
          console.log(`Prerendered ${route.path} -> ${route.file}`);
        }
      } catch (err) {
        console.warn(`Could not prerender route ${route.path}:`, err.message);
      }
    }
  } finally {
    child.kill("SIGTERM");
  }

  // Copy .output/public to dist
  try {
    await mkdir("dist", { recursive: true });
    await cp(".output/public", "dist", { recursive: true });
    console.log("Copied .output/public to dist successfully.");
  } catch (err) {
    console.warn("Error copying to dist:", err.message);
  }

  console.log("Postbuild completed successfully.");
}

postbuild().catch((err) => {
  console.error("Postbuild failed:", err);
  process.exit(1);
});
