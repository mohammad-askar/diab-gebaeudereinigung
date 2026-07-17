import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { LegalPlaceholder } from "@/components/legal/legal-placeholder";
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

  const legalName = company.legal.legalName ?? company.legalName;
  const representatives = company.legal.representedBy?.join(", ") || company.owners.join(", ");

  const hasCompleteAddress =
    company.address.street && company.address.postalCode && company.address.city;

  return (
    <LegalPageLayout eyebrow={t("eyebrow")} title={t("title")} introduction={t("introduction")}>
      <div className="rounded-3xl border border-amber-300 bg-amber-50 p-6 text-amber-950">
        <h2 className="text-xl font-bold">{t("warning.title")}</h2>
        <p className="mt-3 leading-7">{t("warning.description")}</p>
      </div>

      <LegalSection title={t("provider.title")}>
        <p>
          <strong>{t("provider.businessName")}:</strong> {company.name}
        </p>

        <p>
          <strong>{t("provider.legalName")}:</strong>{" "}
          {legalName ?? <LegalPlaceholder label={t("placeholders.legalName")} />}
        </p>

        <p>
          <strong>{t("provider.legalForm")}:</strong>{" "}
          {company.legal.legalForm ?? <LegalPlaceholder label={t("placeholders.legalForm")} />}
        </p>

        <div>
          <strong>{t("provider.address")}:</strong>

          {hasCompleteAddress ? (
            <address className="mt-2 not-italic">
              {company.address.street}
              <br />
              {company.address.postalCode} {company.address.city}
              <br />
              {company.address.country}
            </address>
          ) : (
            <div className="mt-2 flex flex-wrap gap-2">
              <LegalPlaceholder label={t("placeholders.street")} />
              <LegalPlaceholder label={t("placeholders.postalCode")} />
              <LegalPlaceholder label={t("placeholders.city")} />
            </div>
          )}
        </div>

        <p>
          <strong>{t("provider.representedBy")}:</strong> {representatives}
        </p>
      </LegalSection>

      <LegalSection title={t("contact.title")}>
        <div>
          <strong>{t("contact.phone")}:</strong>

          <ul className="mt-2">
            {company.contact.phoneNumbers.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
              </li>
            ))}
          </ul>
        </div>

        <p>
          <strong>{t("contact.email")}:</strong>{" "}
          <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
        </p>
      </LegalSection>

      <LegalSection title={t("registration.title")}>
        <p>{t("registration.notApplicable")}</p>

        <p>
          <strong>{t("registration.court")}:</strong>{" "}
          {company.legal.registrationCourt ?? (
            <LegalPlaceholder label={t("placeholders.registrationCourt")} />
          )}
        </p>

        <p>
          <strong>{t("registration.number")}:</strong>{" "}
          {company.legal.registrationNumber ?? (
            <LegalPlaceholder label={t("placeholders.registrationNumber")} />
          )}
        </p>
      </LegalSection>

      <LegalSection title={t("tax.title")}>
        <p>
          <strong>{t("tax.vatId")}:</strong>{" "}
          {company.legal.vatId ?? <LegalPlaceholder label={t("placeholders.vatId")} />}
        </p>

        <p>{t("tax.taxNumberWarning")}</p>
      </LegalSection>

      <LegalSection title={t("responsibility.title")}>
        <p>{t("responsibility.description")}</p>
        <LegalPlaceholder label={t("placeholders.responsiblePerson")} />
      </LegalSection>

      <LegalSection title={t("dispute.title")}>
        <p>{t("dispute.description")}</p>
      </LegalSection>

      <LegalSection title={t("liability.title")}>
        <p>{t("liability.description")}</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
