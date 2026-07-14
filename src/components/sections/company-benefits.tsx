import { getTranslations } from "next-intl/server";

import { benefits } from "@/data/homepage";

import { SectionHeading } from "../ui/section-heading";

export async function CompanyBenefits() {
  const t = await getTranslations("HomePage.benefits");

  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article key={benefit.id} className="border-border rounded-3xl border bg-white p-6">
              <div className="bg-brand-green flex size-11 items-center justify-center rounded-full text-lg font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-brand-blue-dark mt-5 text-xl font-bold">
                {t(`items.${benefit.id}.title`)}
              </h3>

              <p className="text-muted mt-3 leading-7">{t(`items.${benefit.id}.description`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
