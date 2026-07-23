import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ContactDetails } from "@/components/contact/contact-details";
import { ContactHero } from "@/components/contact/contact-hero";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

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

  return buildPageMetadata({
    locale: locale as Locale,
    pathname: "/kontakt",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main>
      <ContactHero />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ContactDetails />
        </div>
      </section>
    </main>
  );
}
