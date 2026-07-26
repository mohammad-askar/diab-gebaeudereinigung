import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { company } from "@/data/company";

export async function CompanyTeam() {
  const t = await getTranslations("AboutPage.team");

  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative">
          <div
            aria-hidden="true"
            className="bg-brand-blue/10 absolute -inset-5 rotate-2 rounded-[2.5rem]"
          />

          <div className="border-border relative overflow-hidden rounded-2xl border bg-white shadow-xl">
            <div className="relative aspect-16/10 overflow-hidden">
              <Image
                src="/images/company/diab-team.png"
                alt={t("imageAlt")}
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="scale-[1.1] object-contain object-center transition duration-700 ease-out hover:scale-[1.1]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.55),transparent_26%)]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.14),transparent_34%)]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/25 ring-inset"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="border-brand-green/30 bg-brand-green/10 text-brand-green-dark inline-flex rounded-full border px-4 py-2 text-sm font-bold">
            {t("eyebrow")}
          </p>

          <h2 className="text-brand-blue-dark mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>

          <p className="text-muted mt-5 text-lg leading-8">{t("description")}</p>

          <div className="mt-8 space-y-5">
            <article className="border-border rounded-2xl border bg-white p-5 shadow-sm">
              <p className="text-brand-blue-dark text-lg font-bold">
                {company.legalName ?? "Justyna Agnieszka Zyab"}
              </p>

              <p className="text-brand-green-dark mt-1 font-semibold">{t("ownerRole")}</p>

              <p className="text-muted mt-3 leading-7">{t("ownerDescription")}</p>
            </article>

            <article className="border-border rounded-2xl border bg-white p-5 shadow-sm">
              <p className="text-brand-blue-dark text-lg font-bold">{t("partnerName")}</p>

              <p className="text-brand-green-dark mt-1 font-semibold">{t("partnerRole")}</p>

              <p className="text-muted mt-3 leading-7">{t("partnerDescription")}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
