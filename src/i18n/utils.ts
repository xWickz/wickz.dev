import es from "@/i18n/dicts/es.json";
import en from "@/i18n/dicts/en.json";

type TranslationDict = Record<string, unknown>;

const dictionaries: Record<string, TranslationDict> = { es, en };

export function useTranslations(lang: string, namespace?: string) {
  const dict = (dictionaries[lang] ?? dictionaries.es) as Record<
    string,
    unknown
  >;
  return function t(key: string): string {
    const fullPath = namespace ? `${namespace}.${key}` : key;
    const value = fullPath.split(".").reduce<unknown>((obj, k) => {
      if (obj && typeof obj === "object" && k in obj) {
        return (obj as Record<string, unknown>)[k];
      }
      return undefined;
    }, dict);
    return typeof value === "string" ? value : key;
  };
}

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split("/");
  if (lang && dictionaries[lang]) return lang;
  return "es";
}
