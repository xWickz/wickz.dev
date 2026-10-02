/**
 * Shared application constants.
 * Centralized here to avoid magic strings across the codebase.
 */

export const SITE = {
  title: "wickz (Santiago Griman) | Desarrollador web de Venezuela",
  description:
    "Desarrollador web en Venezuela. Creo catálogos web, menús digitales con QR, landing pages y apps a medida para negocios y emprendedores.",
  url: "https://wickz.dev",
  author: "Santiago Griman",
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
