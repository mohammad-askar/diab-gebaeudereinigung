import { describe, expect, it } from "vitest";
import { afterEach } from "vitest";
import { getLanguageAlternates, getLocalizedPath, getLocalizedUrl } from "./seo";

describe("getLocalizedPath", () => {
  it("creates a localized homepage path", () => {
    expect(getLocalizedPath("de", "/")).toBe("/de");
  });

  it("creates a localized internal path", () => {
    expect(getLocalizedPath("en", "/leistungen")).toBe("/en/leistungen");
  });
});

describe("getLocalizedUrl", () => {
  it("creates an absolute localized URL", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com";

    expect(getLocalizedUrl("ar", "/kontakt")).toBe("https://example.com/ar/kontakt");
  });
});

describe("getLanguageAlternates", () => {
  it("creates URLs for all supported languages", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com";

    expect(getLanguageAlternates("/ueber-uns")).toEqual({
      de: "https://example.com/de/ueber-uns",
      en: "https://example.com/en/ueber-uns",
      ar: "https://example.com/ar/ueber-uns",
    });
  });
});

const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

afterEach(() => {
  if (originalSiteUrl === undefined) {
    delete process.env.NEXT_PUBLIC_SITE_URL;
  } else {
    process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
  }
});
