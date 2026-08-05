// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://wickz.dev",

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
    build: {
      cssMinify: "lightningcss",
    },
  },

  integrations: [react()],

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
