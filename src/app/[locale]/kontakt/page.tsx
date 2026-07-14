import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ContactDetails } from "@/components/contact/contact-details";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import { ContactHero } from "@/components/contact/contact-hero";

import { submitContactForm } from "./actions";

type ContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ContactPage.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const localizedAction = submitContactForm.bind(null, locale);

  return (
    <main>
      <ContactHero />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <ContactDetails />
          <ContactFormSection action={localizedAction} />
        </div>
      </section>
    </main>
  );
}
