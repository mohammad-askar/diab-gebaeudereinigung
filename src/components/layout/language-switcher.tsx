"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type LanguageOption = {
  locale: Locale;
  shortLabel: string;
  translationKey: "german" | "english" | "arabic";
};

const languages: LanguageOption[] = [
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

  const [isPending, startTransition] = useTransition();

  function changeLocale(locale: Locale) {
    if (locale === currentLocale || isPending) {
      return;
    }

    startTransition(() => {
      router.replace(pathname, {
        locale,
        scroll: false,
      });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="border-border/80 bg-surface/70 inline-flex items-center rounded-full border p-1 shadow-sm"
    >
      <span
        aria-hidden="true"
        className="text-muted hidden size-9 shrink-0 items-center justify-center sm:inline-flex"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </svg>
      </span>

      {languages.map((language) => {
        const isActive = currentLocale === language.locale;
        const languageName = t(language.translationKey);

        return (
          <button
            key={language.locale}
            type="button"
            onClick={() => changeLocale(language.locale)}
            disabled={isPending}
            title={languageName}
            aria-label={languageName}
            aria-pressed={isActive}
            className={[
              "relative inline-flex min-h-9 min-w-11 items-center justify-center rounded-full px-3 text-sm font-bold",
              "transition-all duration-200",
              "focus-visible:ring-brand-blue focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              "disabled:cursor-wait disabled:opacity-70",
              isActive
                ? "bg-brand-blue shadow-brand-blue/20 text-white shadow-md"
                : "text-muted hover:text-brand-blue-dark hover:bg-white",
            ].join(" ")}
          >
            {language.shortLabel}
          </button>
        );
      })}
    </div>
  );
}
