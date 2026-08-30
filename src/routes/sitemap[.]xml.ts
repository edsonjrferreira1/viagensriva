import { createFileRoute } from "@tanstack/react-router";
import { servicePages } from "@/config/site";

const SITE = "https://viagensriva.com";

const staticPaths = [
  "/",
  "/comunidades",
  "/duvidas",
  "/privacidade",
  "/termos",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          ...staticPaths,
          ...Object.keys(servicePages).map((slug) => `/servicos/${slug}`),
        ];
        const today = new Date().toISOString().slice(0, 10);
        const urls = paths
          .map(
            (path) =>
              `  <url>\n    <loc>${SITE}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${path === "/" ? "1.0" : "0.8"}</priority>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
