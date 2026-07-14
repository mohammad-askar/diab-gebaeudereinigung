import { getTranslations } from "next-intl/server";

import { SectionHeading } from "@/components/ui/section-heading";
import { workingSteps } from "@/data/about";

export async function WorkingApproach() {
  const t = await getTranslations("AboutPage.approach");

  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workingSteps.map((item) => (
            <li key={item.id} className="border-border rounded-3xl border bg-white p-7">
              <span className="bg-brand-blue flex size-12 items-center justify-center rounded-2xl text-lg font-bold text-white">
                {item.step}
              </span>

              <h3 className="text-brand-blue-dark mt-6 text-xl font-bold">
                {t(`items.${item.id}.title`)}
              </h3>

              <p className="text-muted mt-3 leading-7">{t(`items.${item.id}.description`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
