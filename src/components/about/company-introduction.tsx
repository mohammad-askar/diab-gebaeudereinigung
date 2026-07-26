import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { SectionHeading } from "@/components/ui/section-heading";
import { company } from "@/data/company";

export async function CompanyIntroduction() {
  const t = await getTranslations("AboutPage.introduction");

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

          <div className="text-muted mt-7 space-y-5 text-lg leading-8">
            <p>{t("descriptionOne")}</p>
            <p>{t("descriptionTwo")}</p>
            <p>{t("descriptionThree")}</p>
          </div>
        </div>

        <aside className="relative">
          <div
            aria-hidden="true"
            className="bg-brand-blue/10 absolute -inset-4 rotate-2 rounded-[2.5rem]"
          />

          <div className="border-border relative rounded-[2rem] border bg-white p-7 shadow-xl sm:p-8">
            <div className="flex items-center gap-4">
              <div className="border-border bg-surface relative size-20 shrink-0 overflow-hidden rounded-2xl border">
                <Image
                  src="/images/logo/diab-logo.jpg"
                  alt={company.name}
                  fill
                  sizes="80px"
                  className="object-contain p-2"
                />
              </div>

              <div>
                <p className="text-brand-blue-dark text-xl font-bold">
                  {company.tradingName ?? company.name}
                </p>

                <p className="text-muted mt-1">
                  {company.address.postalCode} {company.address.city}
                </p>
              </div>
            </div>

            <dl className="mt-8 space-y-5">
              <div className="border-border border-t pt-5">
                <dt className="text-muted text-sm font-semibold">{t("legalFormLabel")}</dt>

                <dd className="text-brand-blue-dark mt-1 font-bold">{company.legal.legalForm}</dd>
              </div>

              <div className="border-border border-t pt-5">
                <dt className="text-muted text-sm font-semibold">{t("ownerLabel")}</dt>

                <dd className="text-brand-blue-dark mt-1 font-bold">{company.legalName}</dd>
              </div>

              <div className="border-border border-t pt-5">
                <dt className="text-muted text-sm font-semibold">{t("chamberLabel")}</dt>

                <dd className="text-brand-blue-dark mt-1 font-bold">{company.legal.chamber}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}
