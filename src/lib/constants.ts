/**
 * Shared application constants.
 * Centralized here to avoid magic strings across the codebase.
 */

export const SITE = {
  title: "wickz (Santiago Griman) | Desarrollador web freelance remoto",
  description:
    "Desarrollador web freelance desde Venezuela, en remoto para todo el mundo. Catálogos web, menús QR, landing pages y apps a medida para negocios.",
  url: "https://wickz.dev",
  author: "Santiago Griman",
  email: "hi@wickz.dev",
  locale: "es",
} as const;

export const NAV_LINKS = {
  home: "#home",
  services: "#services",
  projects: "#projects",
  lab: "lab/",
} as const;

/** WhatsApp de negocios, formato wa.me (sin + ni 0 inicial). */
export const whatsapp = (text: string) =>
  `https://wa.me/584220343035?text=${encodeURIComponent(text)}`;

export const mailto = (subject: string, body: string) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const SUPPORTED_LANGUAGES = ["es", "en"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANG: SupportedLanguage = "es";

export const CV_PATH = "/files/cv.pdf" as const;

/** ID de medición de Google Analytics 4 (G-XXXXXXXXXX). Vacío = sin GA. */
export const GA_ID = "G-5BYS6W4CPQ";
