import { company } from "@/data/company";
import { getAbsoluteUrl } from "@/lib/site-url";

export function LocalBusinessJsonLd() {
  const hasAddress = company.address.street && company.address.postalCode && company.address.city;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CleaningService",

    name: company.tradingName ?? company.name,
    alternateName: company.name,
    legalName: company.legalName,

    url: getAbsoluteUrl("/"),
    email: company.contact.email,
    telephone: company.contact.phoneNumbers,

    availableLanguage: ["de", "en", "ar"],

    address: hasAddress
      ? {
          "@type": "PostalAddress",
          streetAddress: company.address.street,
          postalCode: company.address.postalCode,
          addressLocality: company.address.city,
          addressCountry: "DE",
        }
      : undefined,

    areaServed: company.serviceArea.length > 0 ? company.serviceArea : undefined,
  };

  const serializedJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializedJsonLd,
      }}
    />
  );
}
