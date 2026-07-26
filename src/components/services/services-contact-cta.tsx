import { getTranslations } from "next-intl/server";

import { company } from "@/data/company";
import { Link } from "@/i18n/navigation";

export async function ServicesContactCta() {
  const t = await getTranslations("ServicesPage.cta");

  const primaryPhone = company.contact.phoneNumbers[0];
  const phoneHref = primaryPhone.replace(/\s/g, "");

  const emailSubject = encodeURIComponent("Anfrage an Diab Gebäudereinigung");

  return (
    <section className="bg-white px-6 pb-20 sm:pb-24">
      <div className="bg-brand-blue-dark relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-7 py-14 text-white shadow-[0_20px_55px_rgba(15,23,42,0.18)] sm:px-12 lg:px-16">
        <div
          aria-hidden="true"
          className="bg-brand-blue/40 pointer-events-none absolute -end-24 -top-24 size-72 rounded-full blur-3xl"
        />

        <div
          aria-hidden="true"
          className="bg-brand-green/30 pointer-events-none absolute -start-20 -bottom-28 size-72 rounded-full blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/10 ring-inset"
        />

        <div className="relative max-w-3xl">
          <p className="text-brand-green text-sm font-bold tracking-[0.16em] uppercase">
            {t("eyebrow")}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">{t("description")}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/kontakt"
              className="bg-brand-blue hover:bg-brand-blue inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
            >
              {t("primaryButton")}
            </Link>

            <a
              href={`mailto:${company.contact.email}?subject=${emailSubject}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 py-3 font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              {t("emailButton")}
            </a>

            <a
              href={`tel:${phoneHref}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 py-3 font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              {t("secondaryButton")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
