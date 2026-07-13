import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { company } from "@/data/company";
import { legalNavigation, mainNavigation } from "@/data/navigation";
import { Link } from "@/i18n/navigation";

export async function SiteFooter() {
  const footer = await getTranslations("Footer");
  const navigation = await getTranslations("Navigation");

  return (
    <footer className="border-border bg-surface border-t">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo/diab-logo.jpg"
            alt={company.name}
            width={180}
            height={100}
            className="h-20 w-auto object-contain"
          />

          <p className="text-muted mt-4 max-w-sm leading-7">{footer("description")}</p>
        </div>

        <div>
          <h2 className="text-brand-blue-dark font-bold">{footer("navigation")}</h2>

          <ul className="mt-4 space-y-3">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-brand-blue">
                  {navigation(item.translationKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-brand-blue-dark font-bold">{footer("contact")}</h2>

          <ul className="text-muted mt-4 space-y-3">
            {company.contact.phoneNumbers.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
              </li>
            ))}

            <li>
              <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-brand-blue-dark font-bold">{footer("legal")}</h2>

          <ul className="mt-4 space-y-3">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-brand-blue">
                  {navigation(item.translationKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-border border-t">
        <div className="text-muted mx-auto max-w-7xl px-6 py-6 text-sm">
          © {new Date().getFullYear()} {company.name}. {footer("copyright")}
        </div>
      </div>
    </footer>
  );
}
