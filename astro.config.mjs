// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "node:url";

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
