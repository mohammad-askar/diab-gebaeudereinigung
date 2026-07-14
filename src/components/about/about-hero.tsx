import { getTranslations } from "next-intl/server";

import { company } from "@/data/company";
import { Link } from "@/i18n/navigation";

export async function AboutHero() {
  const t = await getTranslations("AboutPage.hero");

  const primaryPhone = company.contact.phoneNumbers[0];
  const phoneHref = primaryPhone.replace(/\s/g, "");

  return (
    <section className="bg-surface relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-brand-blue/10 absolute -end-40 -top-44 size-[32rem] rounded-full blur-3xl"
      />

      <div
        aria-hidden="true"
        className="bg-brand-green/10 absolute -start-40 -bottom-40 size-[30rem] rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:py-24 lg:py-28">
        <p className="border-brand-green/30 bg-brand-green/10 text-brand-green-dark inline-flex rounded-full border px-4 py-2 text-sm font-bold">
          {t("eyebrow")}
        </p>

        <h1 className="text-brand-blue-dark mx-auto mt-7 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>

        <p className="text-muted mx-auto mt-6 max-w-3xl text-lg leading-8 sm:text-xl">
          {t("description")}
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/kontakt"
            className="bg-brand-blue hover:bg-brand-blue-dark inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 font-bold text-white transition"
          >
            {t("primaryButton")}
          </Link>

          <Link
            href="/leistungen"
            className="border-brand-blue/30 text-brand-blue-dark hover:border-brand-blue hover:bg-surface-strong inline-flex min-h-12 items-center justify-center rounded-full border bg-white px-7 py-3 font-bold transition"
          >
            {t("secondaryButton")}
          </Link>
        </div>

        <a
          href={`tel:${phoneHref}`}
          className="text-brand-blue-dark hover:text-brand-blue mt-7 inline-block font-semibold"
        >
          {primaryPhone}
        </a>
      </div>
    </section>
  );
}
