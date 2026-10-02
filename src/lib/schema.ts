/**
 * JSON-LD (schema.org). Las entidades se enlazan por @id para que buscadores
 * e IAs entiendan que la persona, la marca y los servicios son lo mismo.
 */
import { services } from "@/config/services";
import { useTranslations } from "@/i18n/utils";
import { SITE } from "@/lib/constants";

export const PERSON_ID = `${SITE.url}/#person`;
export const BUSINESS_ID = `${SITE.url}/#business`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export const SAME_AS = [
  "https://github.com/xWickz",
  "https://x.com/wickzdev",
  "https://www.linkedin.com/in/santiago-griman/",
];

const ADDRESS = {
  "@type": "PostalAddress",
  addressCountry: "VE",
};

const AREA_SERVED = [
  { "@type": "Country", name: "Venezuela" },
];

export function siteSchema(lang: string) {
  const t = useTranslations(lang, "SEO");
  return [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Santiago Griman",
      alternateName: ["wickz", "wickzdev", "Santiago Grimán"],
      url: `${SITE.url}/`,
      email: SITE.email,
      jobTitle: lang === "en" ? "Web Developer" : "Desarrollador web",
      description: t("description"),
      address: ADDRESS,
      worksFor: { "@id": BUSINESS_ID },
      sameAs: SAME_AS,
      knowsAbout: [
        "Web Development",
        "TypeScript",
        "React",
        "Astro",
        "Node.js",
        "Tailwind CSS",
        "Full-Stack Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE.url}/`,
      name: "wickz.dev",
      alternateName: ["wickz", "wickzdev"],
      inLanguage: ["es", "en"],
      publisher: { "@id": PERSON_ID },
    },
  ];
}

/** @id del Service: el de su página si existe, si no un ancla del home. */
export const serviceId = (id: string, lang: string, path?: string) =>
  path ? `${SITE.url}${path}#service` : `${SITE.url}/${lang}/#service-${id}`;

export function serviceSchema(opts: {
  id: string;
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@type": "Service",
    "@id": opts.id,
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREA_SERVED,
  };
}

/** @param servicePaths ruta de la página de cada servicio (por id), si existe */
export function businessSchema(
  lang: string,
  servicePaths: Partial<Record<string, string>> = {},
) {
  const t = useTranslations(lang, "SEO");
  const q = useTranslations(lang, "Services_Data");

  const serviceNodes = services.map(({ id }) => {
    const path = servicePaths[id];
    return serviceSchema({
      id: serviceId(id, lang, path),
      name: q(`${id}.title`),
      description: q(`${id}.description`),
      url: `${SITE.url}${path ?? `/${lang}/#services`}`,
    });
  });

  return [
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: "wickz.dev",
      alternateName: ["wickz", "wickzdev", "Santiago Griman"],
      description: t("description"),
      url: `${SITE.url}/${lang}/`,
      email: SITE.email,
      // TODO: telephone (WhatsApp) y priceRange cuando haya datos reales
      image: `${SITE.url}/og-image.png`,
      founder: { "@id": PERSON_ID },
      address: ADDRESS,
      areaServed: AREA_SERVED,
      knowsLanguage: ["es", "en"],
      sameAs: SAME_AS,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: lang === "en" ? "Web development services" : "Servicios de desarrollo web",
        itemListElement: serviceNodes.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@id": s["@id"] },
        })),
      },
    },
    ...serviceNodes,
  ];
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function articleSchema(opts: {
  type?: "Article" | "BlogPosting";
  headline: string;
  description: string;
  path: string;
  lang: string;
  published: Date;
  updated?: Date;
}) {
  const url = `${SITE.url}${opts.path}`;
  return {
    "@type": opts.type ?? "Article",
    "@id": `${url}#article`,
    headline: opts.headline,
    description: opts.description,
    url,
    mainEntityOfPage: url,
    inLanguage: opts.lang,
    image: `${SITE.url}/og-image.png`,
    datePublished: opts.published.toISOString(),
    dateModified: (opts.updated ?? opts.published).toISOString(),
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}
