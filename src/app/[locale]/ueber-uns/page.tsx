import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AboutContactCta } from "@/components/about/about-contact-cta";
import { AboutHero } from "@/components/about/about-hero";
import { CompanyIntroduction } from "@/components/about/company-introduction";
import { CompanyValues } from "@/components/about/company-values";
import { OwnersSection } from "@/components/about/owners-section";
import { WorkingApproach } from "@/components/about/working-approach";

type AboutPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "AboutPage.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main>
      <AboutHero />
      <CompanyIntroduction />
      <OwnersSection />
      <CompanyValues />
      <WorkingApproach />
      <AboutContactCta />
    </main>
  );
}
