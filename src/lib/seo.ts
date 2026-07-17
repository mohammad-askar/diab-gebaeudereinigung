import type { Metadata } from "next";

import { routing, type Locale } from "@/i18n/routing";

import { getAbsoluteUrl } from "./site-url";

export function getLocalizedPath(locale: Locale, pathname = "/") {
  const normalizedPath = pathname === "/" ? "" : pathname;

  return `/${locale}${normalizedPath}`;
}

export function getLocalizedUrl(locale: Locale, pathname = "/") {
  return getAbsoluteUrl(getLocalizedPath(locale, pathname));
}

export function getLanguageAlternates(pathname = "/") {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, getLocalizedUrl(locale, pathname)]),
  );
}

type BuildPageMetadataOptions = {
  locale: Locale;
  pathname: string;
  title: string;
  description: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  locale,
  pathname,
  title,
  description,
  noIndex = false,
}: BuildPageMetadataOptions): Metadata {
  const canonicalUrl = getLocalizedUrl(locale, pathname);
  const languageAlternates = getLanguageAlternates(pathname);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ...languageAlternates,
        "x-default": getLocalizedUrl(routing.defaultLocale, pathname),
      },
    },
    openGraph: {
      type: "website",
      locale: openGraphLocales[locale],
      alternateLocale: routing.locales
        .filter((item) => item !== locale)
        .map((item) => openGraphLocales[item]),
      url: canonicalUrl,
      title,
      description,
      siteName: "Diab Gebäudereinigung",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

const openGraphLocales: Record<Locale, string> = {
  de: "de_DE",
  en: "en_US",
  ar: "ar_AR",
};
