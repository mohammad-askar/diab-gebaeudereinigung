import { setRequestLocale } from "next-intl/server";

import { AboutPreview } from "@/components/sections/about-preview";
import { CompanyBenefits } from "@/components/sections/company-benefits";
import { ContactCta } from "@/components/sections/contact-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { ServiceProcess } from "@/components/sections/service-process";
import { ServicesOverview } from "@/components/sections/services-overview";

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
