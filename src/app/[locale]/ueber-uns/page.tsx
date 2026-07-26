import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AboutContactCta } from "@/components/about/about-contact-cta";
import { AboutHero } from "@/components/about/about-hero";
import { CompanyIntroduction } from "@/components/about/company-introduction";
import { CompanyTeam } from "@/components/about/company-team";
import { CompanyValues } from "@/components/about/company-values";
import { WorkingApproach } from "@/components/about/working-approach";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

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

  return buildPageMetadata({
    locale: locale as Locale,
    pathname: "/ueber-uns",
    title: t("title"),
    description: t("description"),
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main>
      <AboutHero />
      <CompanyIntroduction />
      <CompanyTeam />
      <CompanyValues />
      <WorkingApproach />
      <AboutContactCta />
    </main>
  );
}
