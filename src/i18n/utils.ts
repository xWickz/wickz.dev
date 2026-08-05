import es from "@/i18n/dicts/es.json";
import en from "@/i18n/dicts/en.json";

type TranslationDict = Record<string, any>;

const dictionaries: Record<string, TranslationDict> = { es, en };

export function useTranslations(lang: string, namespace?: string) {
  const dict = dictionaries[lang] ?? dictionaries.es;

  return function t(key: string): string {
    const fullPath = namespace ? `${namespace}.${key}` : key;

    const value = fullPath
      .split(".")
      .reduce((obj: any, k) => obj && obj[k], dict as TranslationDict);

    return value ?? key;
  };
}

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split("/");
  if (lang && dictionaries[lang]) return lang;
  return "es";
}
