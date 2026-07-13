"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

import type { Locale } from "@/i18n/routing";

const languages: Array<{
  locale: Locale;
  shortLabel: string;
  translationKey: "german" | "english" | "arabic";
}> = [
  {
    locale: "de",
    shortLabel: "DE",
    translationKey: "german",
  },
  {
    locale: "en",
    shortLabel: "EN",
    translationKey: "english",
  },
  {
    locale: "ar",
    shortLabel: "AR",
    translationKey: "arabic",
  },
];

export function LanguageSwitcher() {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LanguageSwitcher");

  function changeLocale(locale: Locale) {
    router.replace(pathname, { locale });
  }

  return (
    <div className="flex items-center gap-1" aria-label={t("label")}>
      {languages.map((language) => {
        const isActive = currentLocale === language.locale;

        return (
          <button
            key={language.locale}
            type="button"
            onClick={() => changeLocale(language.locale)}
            title={t(language.translationKey)}
            aria-pressed={isActive}
            className={
              isActive
                ? "bg-brand-blue rounded-full px-3 py-2 text-sm font-bold text-white"
                : "text-muted hover:bg-surface hover:text-brand-blue-dark rounded-full px-3 py-2 text-sm font-semibold transition"
            }
          >
            {language.shortLabel}
          </button>
        );
      })}
    </div>
  );
}
