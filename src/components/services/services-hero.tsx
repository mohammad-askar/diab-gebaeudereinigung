import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { company } from "@/data/company";
import { Link } from "@/i18n/navigation";

export async function ServicesHero() {
  const t = await getTranslations("ServicesPage.hero");

  const primaryPhone = company.contact.phoneNumbers[0];
  const phoneHref = primaryPhone.replace(/\s/g, "");

  return (
    <section className="bg-surface relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-brand-blue/10 pointer-events-none absolute -end-40 -top-48 size-[32rem] rounded-full blur-3xl"
      />

      <div
        aria-hidden="true"
        className="bg-brand-green/10 pointer-events-none absolute -start-40 -bottom-40 size-[28rem] rounded-full blur-3xl"
      />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_0.95fr] lg:py-24">
        <div className="max-w-3xl text-center lg:text-start">
          <p className="border-brand-green/30 bg-brand-green/10 text-brand-green-dark inline-flex rounded-full border px-4 py-2 text-sm font-bold">
            {t("eyebrow")}
          </p>

          <h1 className="text-brand-blue-dark mt-7 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            {t("title")}
          </h1>

          <p className="text-muted mt-6 text-lg leading-8 sm:text-xl">{t("description")}</p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
            <Link
              href="/kontakt"
              className="bg-brand-blue hover:bg-brand-blue-dark focus-visible:outline-brand-blue shadow-brand-blue/20 inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {t("primaryButton")}
            </Link>

            <a
              href={`tel:${phoneHref}`}
              className="border-brand-blue/30 text-brand-blue-dark hover:border-brand-blue hover:bg-surface-strong inline-flex min-h-12 items-center justify-center rounded-full border bg-white px-7 py-3 font-bold transition hover:-translate-y-0.5"
            >
              {t("secondaryButton")}
            </a>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href={`tel:${phoneHref}`}
              className="text-brand-blue-dark hover:text-brand-blue inline-flex items-center gap-3 font-semibold transition"
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
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div
            aria-hidden="true"
            className="bg-brand-blue/10 absolute -inset-5 rotate-2 rounded-[2.5rem]"
          />

          <div
            aria-hidden="true"
            className="bg-brand-green/10 absolute -inset-3 -rotate-2 rounded-[2.5rem]"
          />

          <div className="border-border relative overflow-hidden rounded-[2rem] border bg-white p-3 shadow-[0_22px_60px_rgba(15,23,42,0.16)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image
                src="/images/company/window-cleaning-team.png"
                alt={t("imageAlt")}
                fill
                priority
                quality={85}
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="scale-[1.1] object-cover object-center transition duration-700 ease-out hover:scale-[1.15]"
              />

              {/* Light general overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-slate-950/5"
              />

              {/* Bottom gradient */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"
              />

              {/* Soft shadow in the top-right corner */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.18),transparent_35%)]"
              />

              {/* Stronger shadow in the bottom-right corner to hide the symbol */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.82),transparent_28%)]"
              />

              {/* Soft shadow in the bottom-left corner */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.12),transparent_32%)]"
              />

              {/* Light inner border */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-white/30 ring-inset"
              />
            </div>
          </div>

          <div className="border-border absolute start-4 -bottom-6 max-w-[16rem] rounded-2xl border bg-white p-4 shadow-xl sm:start-[-1.5rem]">
            <p className="text-brand-blue-dark font-bold">{company.tradingName ?? company.name}</p>

            <p className="text-muted mt-1 text-sm leading-6">{t("imageCard")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
