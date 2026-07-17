const fallbackSiteUrl = "http://localhost:3000";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl;

  try {
    return new URL(configuredUrl);
  } catch {
    return new URL(fallbackSiteUrl);
  }
}

export function getAbsoluteUrl(pathname = "/") {
  return new URL(pathname, getSiteUrl()).toString();
}

export function isProductionSiteConfigured() {
  const siteUrl = getSiteUrl();

  return !["localhost", "127.0.0.1"].includes(siteUrl.hostname);
}
