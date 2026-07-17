import { afterEach, describe, expect, it } from "vitest";

import { getAbsoluteUrl, getSiteUrl, isProductionSiteConfigured } from "./site-url";

const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

afterEach(() => {
  if (originalSiteUrl === undefined) {
    delete process.env.NEXT_PUBLIC_SITE_URL;
  } else {
    process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
  }
});

describe("getSiteUrl", () => {
  it("uses localhost when no URL is configured", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;

    expect(getSiteUrl().toString()).toBe("http://localhost:3000/");
  });

  it("returns a valid configured URL", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com";

    expect(getSiteUrl().toString()).toBe("https://example.com/");
  });

  it("falls back to localhost when the configured URL is invalid", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "not-a-valid-url";

    expect(getSiteUrl().toString()).toBe("http://localhost:3000/");
  });
});

describe("getAbsoluteUrl", () => {
  it("creates an absolute URL from a pathname", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com";

    expect(getAbsoluteUrl("/de/kontakt")).toBe("https://example.com/de/kontakt");
  });
});

describe("isProductionSiteConfigured", () => {
  it("returns false for localhost", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "http://localhost:3000";

    expect(isProductionSiteConfigured()).toBe(false);
  });

  it("returns true for a production hostname", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com";

    expect(isProductionSiteConfigured()).toBe(true);
  });
});
