import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

export default async function LocaleNotFoundPage() {
  const t = await getTranslations("NotFoundPage");

  return (
    <main className="bg-surface flex min-h-[70vh] items-center py-20">
      <div className="mx-auto w-full max-w-4xl px-6 text-center">
        <p className="text-brand-green text-sm font-bold tracking-[0.16em] uppercase">
          404 · {t("eyebrow")}
        </p>

        <h1 className="text-brand-blue-dark mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>

        <p className="text-muted mx-auto mt-6 max-w-2xl text-lg leading-8">{t("description")}</p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="bg-brand-blue hover:bg-brand-blue-dark inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 font-bold text-white transition"
          >
            {t("homeButton")}
          </Link>

          <Link
            href="/kontakt"
            className="border-brand-blue/30 text-brand-blue-dark hover:border-brand-blue inline-flex min-h-12 items-center justify-center rounded-full border bg-white px-7 py-3 font-bold transition"
          >
            {t("contactButton")}
          </Link>
        </div>
      </div>
    </main>
  );
}
