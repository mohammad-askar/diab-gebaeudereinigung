import type { MetadataRoute } from "next";

import { getAbsoluteUrl, isProductionSiteConfigured } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const productionConfigured = isProductionSiteConfigured();

  return {
    rules: {
      userAgent: "*",
      allow: productionConfigured ? "/" : undefined,
      disallow: productionConfigured ? undefined : "/",
    },
    sitemap: productionConfigured ? getAbsoluteUrl("/sitemap.xml") : undefined,
    host: productionConfigured ? getAbsoluteUrl("/") : undefined,
  };
}
