import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { LegalSection } from "@/components/legal/legal-section";
import siteConfiguration from "@/config/site";
import { company } from "@/data/company";
import { dataProtectionAuthority, privacyPolicyLastUpdated } from "@/data/legal";
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

  const legalName =
    company.legal.legalName ?? company.legalName ?? company.tradingName ?? company.name;

  return (
    <LegalPageLayout eyebrow={t("eyebrow")} title={t("title")} introduction={t("introduction")}>
      <LegalSection title={t("controller.title")}>
        <p>{t("controller.description")}</p>

        <p>
          <strong>{legalName}</strong>
        </p>

        <address className="not-italic">
          {company.tradingName ? (
            <>
              {company.tradingName}
              <br />
            </>
          ) : null}
          {company.address.street}
          <br />
          {company.address.postalCode} {company.address.city}
          <br />
          {company.address.country}
        </address>

        <p>
          <a
            href={`mailto:${company.contact.email}`}
            className="text-brand-blue font-semibold underline underline-offset-4"
          >
            {company.contact.email}
          </a>
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
          <strong>{t("hosting.provider")}:</strong> {siteConfiguration.hosting.providerName}
        </p>

        {siteConfiguration.hosting.providerAddress ? (
          <address className="not-italic">{siteConfiguration.hosting.providerAddress}</address>
        ) : null}

        {siteConfiguration.hosting.privacyPolicyUrl ? (
          <p>
            <a
              href={siteConfiguration.hosting.privacyPolicyUrl}
              target="_blank"
              rel="noreferrer"
              className="text-brand-blue font-semibold underline underline-offset-4"
            >
              {t("hosting.privacyLink")}
            </a>
          </p>
        ) : null}

        <p>{t("hosting.retention")}</p>
        <p>{t("hosting.legalBasis")}</p>
      </LegalSection>

      <LegalSection title={t("contact.title")}>
        <p>{t("contact.description")}</p>
        <p>{t("contact.data")}</p>
        <p>{t("contact.legalBasis")}</p>
        <p>{t("contact.retention")}</p>
      </LegalSection>

      <LegalSection title={t("maps.title")}>
        <p>{t("maps.externalLink")}</p>
        <p>{t("maps.externalEffect")}</p>
      </LegalSection>

      <LegalSection title={t("fonts.title")}>
        <p>{t("fonts.description")}</p>
      </LegalSection>

      <LegalSection title={t("cookies.title")}>
        <p>{t("cookies.description")}</p>
        <p>{t("cookies.necessary")}</p>
      </LegalSection>

      <LegalSection title={t("recipients.title")}>
        <p>{t("recipients.description")}</p>

        <ul className="list-disc space-y-2 ps-6">
          <li>{t("recipients.hosting")}</li>
          <li>{t("recipients.email")}</li>
        </ul>
      </LegalSection>

      <LegalSection title={t("transfers.title")}>
        <p>{t("transfers.description")}</p>
      </LegalSection>

      <LegalSection title={t("rights.title")}>
        <p>{t("rights.description")}</p>
        <p>{t("rights.consent")}</p>
      </LegalSection>

      <LegalSection title={t("complaint.title")}>
        <p>{t("complaint.description")}</p>

        <address className="not-italic">
          <strong>{dataProtectionAuthority.name}</strong>
          <br />
          {dataProtectionAuthority.street}
          <br />
          {dataProtectionAuthority.postalCode} {dataProtectionAuthority.city}
          <br />
          {dataProtectionAuthority.country}
        </address>

        <p>
          <a
            href={dataProtectionAuthority.website}
            target="_blank"
            rel="noreferrer"
            className="text-brand-blue font-semibold underline underline-offset-4"
          >
            {dataProtectionAuthority.website}
          </a>
        </p>
      </LegalSection>

      <LegalSection title={t("security.title")}>
        <p>{t("security.description")}</p>
      </LegalSection>

      <LegalSection title={t("updates.title")}>
        <p>{t("updates.description")}</p>

        <p>
          <strong>{t("updates.dateLabel")}:</strong> {privacyPolicyLastUpdated}
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
