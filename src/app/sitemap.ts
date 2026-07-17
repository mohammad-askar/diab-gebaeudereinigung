import type { MetadataRoute } from "next";

import { publicRoutes } from "@/data/routes";
import { routing, type Locale } from "@/i18n/routing";
import { getLanguageAlternates, getLocalizedUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    publicRoutes.map((pathname) => ({
      url: getLocalizedUrl(locale as Locale, pathname),
      changeFrequency: pathname === "/" ? "weekly" : "monthly",
      priority: pathname === "/" ? 1 : pathname === "/kontakt" ? 0.9 : 0.8,
      alternates: {
        languages: getLanguageAlternates(pathname),
      },
    })),
  );
}
