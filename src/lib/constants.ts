/**
 * Shared application constants.
 * Centralized here to avoid magic strings across the codebase.
 */

export const SITE = {
  title: "Santiago Grimán - Desarrollo Web, Catálogos y Menús Digitales",
  description:
    "Desarrollador web. Creo páginas web, landing pages, catálogos web y menús digitales con QR para negocios y emprendedores. Sitios rápidos y pensados para vender.",
  url: "https://wickz.dev",
  author: "Santiago Grimán",
  email: "hi@wickz.dev",
  locale: "es",
} as const;

export const NAV_LINKS = {
  home: "#home",
  services: "#services",
  projects: "#projects",
  "personal-projects": "#personal-projects",
} as const;

export const SUPPORTED_LANGUAGES = ["es", "en"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANG: SupportedLanguage = "es";

export const CV_PATH = "/files/cv.pdf" as const;
