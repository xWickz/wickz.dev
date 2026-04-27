import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es"] as const;

function getPreferredLocale(acceptLanguageHeader: string | null) {
  if (!acceptLanguageHeader) {
    return "en";
  }

  const languages = acceptLanguageHeader
    .split(",")
    .map((language) => {
      const [localePart, qualityPart] = language.trim().split(";q=");
      return {
        locale: localePart.toLowerCase(),
        quality: qualityPart ? Number(qualityPart) : 1,
      };
    })
    .sort((left, right) => right.quality - left.quality);

  for (const { locale } of languages) {
    const matchedLocale = locales.find((supportedLocale) => {
      return locale === supportedLocale || locale.startsWith(`${supportedLocale}-`);
    });

    if (matchedLocale) {
      return matchedLocale;
    }
  }

  return "en";
}

export default getRequestConfig(async () => {
  const { headers } = await import("next/headers");
  const requestHeaders = await headers();
  const locale = getPreferredLocale(requestHeaders.get("accept-language"));

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
