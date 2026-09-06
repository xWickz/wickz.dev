/**
 * Shared application constants.
 * Centralized here to avoid magic strings across the codebase.
 */

export const SITE = {
  title: "Santiago Grimán — Full-Stack Developer",
  description:
    "Desarrollador web full-stack apasionado por crear experiencias modernas y accesibles.",
  url: "https://wickz.dev",
  author: "Santiago Grimán",
  email: "wickzcs@gmail.com",
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
