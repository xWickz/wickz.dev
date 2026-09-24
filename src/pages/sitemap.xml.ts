import type { APIRoute } from "astro";
import { DEFAULT_LANG, SITE, SUPPORTED_LANGUAGES } from "@/lib/constants";

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL(SITE.url);
  const url = (lang: string) => new URL(`/${lang}/`, base).href;
  const lastmod = new Date().toISOString().split("T")[0];

  const alternates = [
    ...SUPPORTED_LANGUAGES.map(
      (lang) =>
        `    <xhtml:link rel="alternate" hreflang="${lang}" href="${url(lang)}" />`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(DEFAULT_LANG)}" />`,
  ].join("\n");

  const entries = SUPPORTED_LANGUAGES.map(
    (lang) => `  <url>
    <loc>${url(lang)}</loc>
${alternates}
    <lastmod>${lastmod}</lastmod>
  </url>`,
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
