import { getTranslations } from "next-intl/server";

import { company } from "@/data/company";
import { Link } from "@/i18n/navigation";

export async function AboutContactCta() {
  const t = await getTranslations("AboutPage.cta");

  const primaryPhone = company.contact.phoneNumbers[0];
  const phoneHref = primaryPhone.replace(/\s/g, "");

  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="bg-brand-blue-dark relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-7 py-14 text-white sm:px-12 lg:px-16">
        <div
          aria-hidden="true"
          className="bg-brand-blue/40 absolute -end-24 -top-24 size-72 rounded-full blur-3xl"
        />

        <div
          aria-hidden="true"
          className="bg-brand-green/30 absolute -start-20 -bottom-28 size-72 rounded-full blur-3xl"
        />

        <div className="relative max-w-3xl">
          <p className="text-brand-green text-sm font-bold tracking-[0.16em] uppercase">
            {t("eyebrow")}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">{t("description")}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-7 py-3 font-bold text-white transition hover:bg-white/10"
            >
              {t("primaryButton")}
            </Link>

            <a
              href={`tel:${phoneHref}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-7 py-3 font-bold text-white transition hover:bg-white/10"
            >
              {t("secondaryButton")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
