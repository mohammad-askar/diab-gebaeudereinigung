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
    <section className="from-surface relative overflow-hidden bg-gradient-to-b to-white">
      <div
        aria-hidden="true"
        className="bg-brand-blue/10 absolute end-[-10rem] -top-36 size-[30rem] rounded-full blur-3xl"
      />

      <div
        aria-hidden="true"
        className="bg-brand-green/10 absolute start-[-10rem] -bottom-52 size-[30rem] rounded-full blur-3xl"
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="border-brand-green/30 bg-brand-green/10 text-brand-green-dark inline-flex rounded-full border px-4 py-2 text-sm font-bold">
            {t("eyebrow")}
          </p>

          <h1 className="text-brand-blue-dark mt-7 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl lg:leading-[1.05]">
            {t("title")}
          </h1>

          <p className="text-muted mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
            {t("description")}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/kontakt"
              className="bg-brand-blue shadow-brand-blue/20 hover:bg-brand-blue-dark focus-visible:outline-brand-blue inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 font-bold text-white shadow-lg transition focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {t("primaryButton")}
            </Link>

            <Link
              href="/leistungen"
              className="border-brand-blue/30 text-brand-blue-dark hover:border-brand-blue hover:bg-surface inline-flex min-h-12 items-center justify-center rounded-full border bg-white px-7 py-3 font-bold transition"
            >
              {t("secondaryButton")}
            </Link>
          </div>

          <a
            href={`tel:${phoneHref}`}
            className="text-brand-blue-dark hover:text-brand-blue mt-6 inline-flex items-center gap-3 font-semibold"
          >
            <span
              aria-hidden="true"
              className="bg-brand-blue/10 flex size-10 items-center justify-center rounded-full"
            >
              ☎
            </span>

            <span>
              <span className="text-muted block text-sm font-medium">{t("phoneLabel")}</span>
              <span className="block">{primaryPhone}</span>
            </span>
          </a>

          <ul className="text-foreground mt-10 flex flex-col gap-3 text-sm font-semibold sm:flex-row sm:flex-wrap sm:gap-6">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="bg-brand-green flex size-5 items-center justify-center rounded-full text-xs text-white"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="bg-brand-blue/10 absolute -inset-5 rotate-3 rounded-[2.5rem]" />

          <div className="shadow-brand-blue-dark/15 relative overflow-hidden rounded-[2rem] border border-white bg-white p-4 shadow-2xl">
            <Image
              src="/images/logo/diab-logo.jpg"
              alt={company.name}
              width={800}
              height={800}
              priority
              className="aspect-square w-full rounded-[1.5rem] bg-white object-contain"
            />
          </div>

          <div className="border-border absolute start-4 -bottom-6 max-w-[15rem] rounded-2xl border bg-white p-4 shadow-xl sm:start-[-2rem]">
            <p className="text-brand-blue-dark font-bold">{company.name}</p>
            <p className="text-muted mt-1 text-sm leading-6">{t("cardLabel")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
