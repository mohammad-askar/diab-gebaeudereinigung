import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { company } from "@/data/company";
import { Link } from "@/i18n/navigation";

export async function HomeHero() {
  const t = await getTranslations("HomePage.hero");

  const primaryPhone = company.contact.phoneNumbers[0];
  const phoneHref = primaryPhone.replace(/\s/g, "");

  const trustItems = [t("trustOne"), t("trustTwo"), t("trustThree")];

  return (
    <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/company/commercial-building-cleaning.png"
          alt={t("imageAlt")}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="scale-[1.22] object-cover object-center"
        />
      </div>

      <div aria-hidden="true" className="absolute inset-0 bg-slate-950/45" />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/15 rtl:bg-gradient-to-l"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/80 to-transparent"
      />

      <div
        aria-hidden="true"
        className="bg-brand-blue/20 absolute -start-40 top-10 size-[28rem] rounded-full blur-3xl"
      />

      <div
        aria-hidden="true"
        className="bg-brand-green/15 absolute -end-40 bottom-0 size-[26rem] rounded-full blur-3xl"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="border-brand-green/50 bg-brand-green/15 text-brand-green inline-flex rounded-full border px-4 py-2 text-sm font-bold backdrop-blur-sm">
            {t("eyebrow")}
          </p>

          <h1 className="mt-7 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.05]">
            {t("title")}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            {t("description")}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/kontakt"
              className="bg-brand-blue hover:bg-brand-blue-dark focus-visible:outline-brand-blue inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 font-bold text-white shadow-xl shadow-black/20 transition focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {t("primaryButton")}
            </Link>

            <Link
              href="/leistungen"
              className="bg-brand-blue hover:bg-brand-blue-dark focus-visible:outline-brand-blue inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 font-bold text-white shadow-xl shadow-black/20 transition focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {t("secondaryButton")}
            </Link>
          </div>

          <a
            href={`tel:${phoneHref}`}
            className="mt-7 inline-flex items-center gap-3 text-white transition hover:text-white/75"
          >
            <span
              aria-hidden="true"
              className="flex size-11 items-center text-white/80 justify-center rounded-full border border-white/20 bg-white/10 text-lg backdrop-blur-sm"
            >
              ☎
            </span>

            <span>
              <span className="block text-sm font-medium text-white/65">{t("phoneLabel")}</span>

              <span className="block font-bold text-white/80">{primaryPhone}</span>
            </span>
          </a>

          <ul className="mt-10 flex flex-col gap-3 text-sm font-semibold text-white sm:flex-row sm:flex-wrap sm:gap-6">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="bg-brand-green flex size-5 shrink-0 items-center justify-center rounded-full text-xs text-white"
                >
                  ✓
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-7xl px-6 pb-7">
          <div className="flex flex-col gap-2 border-t border-white/20 pt-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold text-white">{company.tradingName ?? company.name}</p>

            <p>
              {company.address.postalCode} {company.address.city}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
