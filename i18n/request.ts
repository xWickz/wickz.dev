import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es"] as const;
const localeCookieName = "MY_LOCALE";

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
      return (
        locale === supportedLocale || locale.startsWith(`${supportedLocale}-`)
      );
    });

    if (matchedLocale) {
      return matchedLocale;
    }
  }

  return "en";
}

export default getRequestConfig(async () => {
  const { headers, cookies } = await import("next/headers");
  const requestHeaders = await headers();
  const requestCookies = await cookies();
  const cookieLocale = requestCookies.get(localeCookieName)?.value;
  const validCookieLocale = locales.find((value) => value === cookieLocale);
  const locale =
    validCookieLocale ??
    getPreferredLocale(requestHeaders.get("accept-language"));

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
