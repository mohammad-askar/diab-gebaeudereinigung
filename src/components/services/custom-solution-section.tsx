import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

export async function CustomSolutionSection() {
  const t = await getTranslations("ServicesPage.custom");

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-border bg-surface relative overflow-hidden rounded-[2rem] border p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_38%)]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.10),transparent_34%)]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/50 ring-inset"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
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
              className="bg-brand-blue hover:bg-brand-blue-dark focus-visible:outline-brand-blue shadow-brand-blue/20 inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
