import { AboutPreview } from "@/components/sections/about-preview";
import { CompanyBenefits } from "@/components/sections/company-benefits";
import { ContactCta } from "@/components/sections/contact-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { ServiceProcess } from "@/components/sections/service-process";
import { ServicesOverview } from "@/components/sections/services-overview";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main>
      <HomeHero />
      <ServicesOverview />
      <CompanyBenefits />
      <AboutPreview />
      <ServiceProcess />
      <ContactCta />
    </main>
  );
}
export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  return buildPageMetadata({
    locale: locale as Locale,
    pathname: "/",
    title: t("title"),
    description: t("description"),
  });
}
