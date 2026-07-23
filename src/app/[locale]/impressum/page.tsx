import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { LegalSection } from "@/components/legal/legal-section";
import { company } from "@/data/company";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

type ImprintPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: ImprintPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ImprintPage.metadata",
  });

  return buildPageMetadata({
    locale: locale as Locale,
    pathname: "/impressum",
    title: t("title"),
    description: t("description"),
    noIndex: true,
  });
}

export default async function ImprintPage({ params }: ImprintPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("ImprintPage");

  return (
    <LegalPageLayout eyebrow={t("eyebrow")} title={t("title")} introduction={t("introduction")}>
      <LegalSection title={t("provider.title")}>
        <p>
          <strong>{t("provider.businessName")}:</strong> {company.tradingName ?? company.name}
        </p>

        <p>
          <strong>{t("provider.legalName")}:</strong> {company.legalName}
        </p>

        <p>
          <strong>{t("provider.legalForm")}:</strong> {company.legal.legalForm}
        </p>

        <div>
          <strong>{t("provider.address")}:</strong>

          <address className="mt-2 not-italic">
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
            <br />
            {company.address.country}
          </address>
        </div>

        <p>
          <strong>{t("provider.representedBy")}:</strong> {company.legal.representedBy?.join(", ")}
        </p>

        {company.legal.chamber ? (
          <p>
            <strong>{t("provider.chamber")}:</strong> {company.legal.chamber}
          </p>
        ) : null}
      </LegalSection>

      <LegalSection title={t("contact.title")}>
        <div>
          <strong>{t("contact.phone")}:</strong>

          <ul className="mt-2 space-y-2">
            {company.contact.phoneNumbers.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="text-brand-blue font-semibold underline underline-offset-4"
                >
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p>
          <strong>{t("contact.email")}:</strong>{" "}
          <a
            href={`mailto:${company.contact.email}`}
            className="text-brand-blue font-semibold underline underline-offset-4"
          >
            {company.contact.email}
          </a>
        </p>
      </LegalSection>

      {company.legal.vatId ? (
        <LegalSection title={t("tax.title")}>
          <p>
            <strong>{t("tax.vatId")}:</strong> {company.legal.vatId}
          </p>
        </LegalSection>
      ) : null}

      <LegalSection title={t("dispute.title")}>
        <p>{t("dispute.description")}</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
