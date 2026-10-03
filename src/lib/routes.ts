import { type CollectionEntry, getCollection } from "astro:content";

export type PageEntry = CollectionEntry<"services"> | CollectionEntry<"cases">;

/** Segmento de URL por colección e idioma. */
export const SECTIONS = {
  services: { es: "servicios", en: "services" },
  cases: { es: "casos", en: "case-studies" },
} as const;

export const entryLang = (e: { id: string }) =>
  e.id.split("/")[0] as "es" | "en";
export const entrySlug = (e: { id: string }) =>
  e.id.split("/").slice(1).join("/");

export const pagePath = (e: PageEntry) =>
  `/${entryLang(e)}/${SECTIONS[e.collection][entryLang(e)]}/${entrySlug(e)}/`;

export const blogPath = (e: CollectionEntry<"blog">) =>
  `/${entryLang(e)}/blog/${entrySlug(e)}/`;

export async function getPages(): Promise<PageEntry[]> {
  return [...(await getCollection("services")), ...(await getCollection("cases"))];
}

/** Rutas de la misma página en cada idioma, unidas por `key`. */
export const translationsOf = (entry: PageEntry, all: PageEntry[]) =>
  Object.fromEntries(
    all
      .filter((e) => e.collection === entry.collection && e.data.key === entry.data.key)
      .map((e) => [entryLang(e), pagePath(e)]),
  );

/** Busca una página por key en un idioma (servicios primero, luego casos). */
export const findPage = (all: PageEntry[], key: string, lang: string) =>
  all.find((e) => e.data.key === key && entryLang(e) === lang);

/** Blog publicado (sin borradores en producción), más reciente primero. */
export async function getPosts(lang: string) {
  const posts = await getCollection(
    "blog",
    (e) => entryLang(e) === lang && (import.meta.env.DEV || !e.data.draft),
  );
  return posts.sort((a, b) => +b.data.published - +a.data.published);
}

export const readingMinutes = (body = "") =>
  Math.max(1, Math.round(body.split(/\s+/).length / 200));
