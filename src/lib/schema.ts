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
  addressLocality: "Cabimas",
  addressRegion: "Zulia",
  addressCountry: "VE",
};

const AREA_SERVED = [
  { "@type": "City", name: "Cabimas" },
  { "@type": "State", name: "Zulia" },
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

export function businessSchema(lang: string) {
  const t = useTranslations(lang, "SEO");
  const q = useTranslations(lang, "Services_Data");
  const serviceId = (id: string) => `${SITE.url}/${lang}/#service-${id}`;

  const serviceNodes = services.map(({ id }) => ({
    "@type": "Service",
    "@id": serviceId(id),
    name: q(`${id}.title`),
    serviceType: q(`${id}.title`),
    description: q(`${id}.description`),
    // TODO(fase 2): apuntar a /{lang}/servicios/{slug}/ cuando exista la página
    url: `${SITE.url}/${lang}/#services`,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREA_SERVED,
  }));

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
