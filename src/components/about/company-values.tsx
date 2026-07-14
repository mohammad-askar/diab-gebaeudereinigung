import { getTranslations } from "next-intl/server";

import { SectionHeading } from "@/components/ui/section-heading";
import { companyValues } from "@/data/about";

export async function CompanyValues() {
  const t = await getTranslations("AboutPage.values");

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {companyValues.map((value, index) => (
            <article
              key={value.id}
              className="border-border rounded-3xl border bg-white p-7 shadow-sm"
            >
              <div className="bg-brand-green flex size-12 items-center justify-center rounded-2xl text-lg font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-brand-blue-dark mt-6 text-xl font-bold">
                {t(`items.${value.id}.title`)}
              </h3>

              <p className="text-muted mt-3 leading-7">{t(`items.${value.id}.description`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
