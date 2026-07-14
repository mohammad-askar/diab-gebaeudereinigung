import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { company } from "@/data/company";
import { Link } from "@/i18n/navigation";

import { SectionHeading } from "../ui/section-heading";

export async function AboutPreview() {
  const t = await getTranslations("HomePage.about");

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-lg">
          <div className="bg-brand-green/10 absolute -inset-4 -rotate-3 rounded-[2.5rem]" />

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

          <div className="text-muted mt-6 space-y-5 text-lg leading-8">
            <p>{t("descriptionOne")}</p>
            <p>{t("descriptionTwo")}</p>
          </div>

          <Link
            href="/ueber-uns"
            className="bg-brand-blue hover:bg-brand-blue-dark mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 font-bold text-white transition"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
