import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { SectionHeading } from "@/components/ui/section-heading";
import { company } from "@/data/company";

export async function CompanyIntroduction() {
  const t = await getTranslations("AboutPage.introduction");

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-lg">
          <div className="bg-brand-blue/10 absolute -inset-4 rotate-3 rounded-[2.5rem]" />

          <div className="border-border bg-surface shadow-brand-blue-dark/10 relative overflow-hidden rounded-[2rem] border p-8 shadow-xl">
            <Image
              src="/images/logo/diab-logo.jpg"
              alt={company.name}
              width={700}
              height={700}
              className="aspect-square w-full object-contain"
            />
          </div>
        </div>

        <div>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

          <div className="text-muted mt-7 space-y-5 text-lg leading-8">
            <p>{t("descriptionOne")}</p>
            <p>{t("descriptionTwo")}</p>
            <p>{t("descriptionThree")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
