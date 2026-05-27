import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/products", priority: "0.9" },
          { path: "/about", priority: "0.7" },
          { path: "/blog", priority: "0.7" },
          { path: "/careers", priority: "0.6" },
          { path: "/media", priority: "0.6" },
          { path: "/contact", priority: "0.6" },
          { path: "/privacy", priority: "0.5" },
          { path: "/terms", priority: "0.5" },
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(e => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>weekly</changefreq><priority>${e.priority}</priority></url>`).join("\n")}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
