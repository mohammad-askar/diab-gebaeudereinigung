import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

export async function CustomSolutionSection() {
  const t = await getTranslations("ServicesPage.custom");

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-border bg-surface grid gap-8 rounded-[2rem] border p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div className="max-w-3xl">
            <p className="text-brand-green text-sm font-bold tracking-[0.16em] uppercase">
              {t("eyebrow")}
            </p>

            <h2 className="text-brand-blue-dark mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {t("title")}
            </h2>

            <p className="text-muted mt-5 text-lg leading-8">{t("description")}</p>
          </div>

          <Link
            href="/kontakt"
            className="bg-brand-blue hover:bg-brand-blue-dark inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 font-bold text-white transition"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
