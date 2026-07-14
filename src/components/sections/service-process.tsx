import { getTranslations } from "next-intl/server";

import { processSteps } from "@/data/homepage";

import { SectionHeading } from "../ui/section-heading";

export async function ServiceProcess() {
  const t = await getTranslations("HomePage.process");

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
          {processSteps.map((item) => (
            <li key={item.id} className="border-border relative rounded-3xl border bg-white p-7">
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
