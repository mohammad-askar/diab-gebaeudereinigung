import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CustomSolutionSection } from "@/components/services/custom-solution-section";
import { ServiceCategorySection } from "@/components/services/service-category-section";
import { ServicesContactCta } from "@/components/services/services-contact-cta";
import { ServicesHero } from "@/components/services/services-hero";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

type ServicesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ServicesPage.metadata",
  });

  return buildPageMetadata({
    locale: locale as Locale,
    pathname: "/leistungen",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main>
      <ServicesHero />

      <ServiceCategorySection category="hotel" />

      <ServiceCategorySection category="building" surface />

      <CustomSolutionSection />

      <ServicesContactCta />
    </main>
  );
}
