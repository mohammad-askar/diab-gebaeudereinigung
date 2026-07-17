import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { LegalPlaceholder } from "@/components/legal/legal-placeholder";
import { LegalSection } from "@/components/legal/legal-section";
import { siteConfiguration } from "@/config/site";
import { company } from "@/data/company";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

type PrivacyPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "PrivacyPage.metadata",
  });

  return buildPageMetadata({
    locale: locale as Locale,
    pathname: "/datenschutz",
    title: t("title"),
    description: t("description"),
    noIndex: true,
  });
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("PrivacyPage");

  const legalName = company.legal.legalName ?? company.legalName ?? company.name;

  const hasCompleteAddress =
    company.address.street && company.address.postalCode && company.address.city;

  return (
    <LegalPageLayout eyebrow={t("eyebrow")} title={t("title")} introduction={t("introduction")}>
      <div className="rounded-3xl border border-amber-300 bg-amber-50 p-6 text-amber-950">
        <h2 className="text-xl font-bold">{t("warning.title")}</h2>
        <p className="mt-3 leading-7">{t("warning.description")}</p>
      </div>

      <LegalSection title={t("controller.title")}>
        <p>{t("controller.description")}</p>
        <p>
          <strong>{legalName}</strong>
        </p>

        {hasCompleteAddress ? (
          <address className="not-italic">
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
            <br />
            {company.address.country}
          </address>
        ) : (
          <LegalPlaceholder label={t("controller.missing")} />
        )}

        <p>
          <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
        </p>
      </LegalSection>

      <LegalSection title={t("general.title")}>
        <p>{t("general.description")}</p>
        <p>{t("general.legalBasis")}</p>
      </LegalSection>

      <LegalSection title={t("hosting.title")}>
        <p>{t("hosting.description")}</p>
        <p>{t("hosting.purpose")}</p>

        <p>
          <strong>{t("hosting.provider")}:</strong>{" "}
          {siteConfiguration.hosting.providerName ?? (
            <LegalPlaceholder label={t("hosting.providerMissing")} />
          )}
        </p>

        <p>{t("hosting.retention")}</p>
        <p>{t("hosting.legalBasis")}</p>
      </LegalSection>

      <LegalSection title={t("contact.title")}>
        <p>{t("contact.description")}</p>
        <p>{t("contact.data")}</p>
        <p>{t("contact.legalBasis")}</p>
        <p>{t("contact.retention")}</p>

        <p>
          {siteConfiguration.contactFormEmailDeliveryEnabled
            ? t("contact.emailStatusEnabled")
            : t("contact.emailStatusDisabled")}
        </p>
      </LegalSection>

      <LegalSection title={t("consent.title")}>
        <p>{t("consent.description")}</p>
        <p>{t("consent.withdrawal")}</p>
      </LegalSection>

      <LegalSection title={t("maps.title")}>
        <p>{t("maps.externalLink")}</p>
        <p>{t("maps.externalEffect")}</p>
        <p>{t("maps.embeddedWarning")}</p>
      </LegalSection>

      <LegalSection title={t("fonts.title")}>
        <p>{t("fonts.description")}</p>
      </LegalSection>

      <LegalSection title={t("cookies.title")}>
        <p>{t("cookies.description")}</p>
        <p>{t("cookies.necessary")}</p>
        <p>{t("cookies.future")}</p>
      </LegalSection>

      <LegalSection title={t("recipients.title")}>
        <p>{t("recipients.description")}</p>
        <LegalPlaceholder label={t("recipients.missing")} />
      </LegalSection>

      <LegalSection title={t("transfers.title")}>
        <p>{t("transfers.description")}</p>
        <LegalPlaceholder label={t("transfers.missing")} />
      </LegalSection>

      <LegalSection title={t("rights.title")}>
        <p>{t("rights.description")}</p>
        <p>{t("rights.consent")}</p>
      </LegalSection>

      <LegalSection title={t("complaint.title")}>
        <p>{t("complaint.description")}</p>
        <p>{t("complaint.authority")}</p>

        <LegalPlaceholder label={t("complaint.missing")} />
      </LegalSection>

      <LegalSection title={t("security.title")}>
        <p>{t("security.description")}</p>
      </LegalSection>

      <LegalSection title={t("updates.title")}>
        <p>{t("updates.description")}</p>
        <p>
          <strong>{t("updates.dateLabel")}:</strong> <LegalPlaceholder label={t("updates.date")} />
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
