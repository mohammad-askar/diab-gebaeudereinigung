import { company } from "@/data/company";
import { getAbsoluteUrl } from "@/lib/site-url";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: company.name,
    url: getAbsoluteUrl("/"),
    email: company.contact.email,
    telephone: company.contact.phoneNumbers,
    availableLanguage: ["de", "en", "ar"],
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
