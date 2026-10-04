import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const faqs = z.array(z.object({ q: z.string(), a: z.string() })).default([]);

// Servicios y casos comparten estructura. El id es "{lang}/{slug}".
// `key` es igual en ES y EN: une las traducciones (hreflang) y los enlaces.
const pageSchema = z.object({
  key: z.string(),
  name: z.string(), // etiqueta corta: breadcrumbs, enlaces relacionados
  title: z.string().max(60),
  description: z.string().max(155),
  h1: z.string(),
  lead: z.string(), // respuesta directa de 2-3 líneas (citable por IAs)
  published: z.coerce.date(),
  updated: z.coerce.date().optional(),
  faqs,
  related: z.array(z.string()).default([]),
  demos: z
    .array(z.object({ label: z.string(), href: z.url(), note: z.string() }))
    .default([]),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: pageSchema,
});

const cases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cases" }),
  schema: pageSchema,
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    key: z.string(), // igual en ES y EN: une las traducciones
    title: z.string().max(60),
    description: z.string().max(155),
    h1: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    faqs,
  }),
});

export const collections = { services, cases, blog };
