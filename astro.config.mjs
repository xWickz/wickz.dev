// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "node:url";
import { readdirSync, readFileSync } from "node:fs";

// lastmod del sitemap: `updated` o `published` del frontmatter, por slug
/** @type {Record<string, string>} */
const lastmod = {};
for (const dir of ["blog", "services", "cases"]) {
  for (const lang of ["es", "en"]) {
    const base = `./src/content/${dir}/${lang}`;
    for (const f of readdirSync(base).filter((f) => f.endsWith(".md"))) {
      const fm = readFileSync(`${base}/${f}`, "utf8");
      const d = fm.match(/^updated:\s*(\S+)/m)?.[1] ?? fm.match(/^published:\s*(\S+)/m)?.[1];
      if (d) lastmod[`/${lang}/`.concat(f.replace(/\.md$/, ""), "/")] = new Date(d).toISOString();
    }
  }
}
/** @param {string} url */
const slugDate = (url) => {
  const p = new URL(url).pathname;
  return Object.entries(lastmod).find(([k]) => p.endsWith(k.slice(3)))?.[1];
};

// https://astro.build/config
export default defineConfig({
  site: "https://wickz.dev",

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      cssMinify: "lightningcss",
      sourcemap: false,
    },
  },

  // Geist auto-hosteada: preload + fallback con métricas ajustadas (evita CLS)
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--font-geist",
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
  ],

  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.endsWith("/404/"),
      serialize: (item) => ({ ...item, lastmod: slugDate(item.url) }),
      i18n: { defaultLocale: "es", locales: { es: "es", en: "en" } },
    }),
  ],

  // Performance & SEO
  prefetch: {
    defaultStrategy: "hover",
  },
  build: {
    inlineStylesheets: "auto",
    assets: "assets",
  },
  compressHTML: true,

  // i18n routing
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
