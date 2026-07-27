import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { company } from "@/data/company";
import { legalNavigation, mainNavigation } from "@/data/navigation";
import { Link } from "@/i18n/navigation";

export async function SiteFooter() {
  const footer = await getTranslations("Footer");
  const navigation = await getTranslations("Navigation");

  const primaryPhone = company.contact.phoneNumbers[0];
  const primaryPhoneHref = primaryPhone.replace(/\s/g, "");

  return (
    <footer className="border-border/70 bg-surface border-t">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <Link
              href="/"
              aria-label={company.name}
              className="focus-visible:ring-brand-blue inline-flex rounded-xl focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none"
            >
              <Image
                src="/images/logo/diab-logo.jpg"
                alt={company.name}
                width={180}
                height={100}
                className="h-28 w-auto object-contain"
              />
            </Link>

            <p className="text-muted mt-2 max-w-md leading-7">{footer("description")}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${primaryPhoneHref}`}
                className={[
                  "bg-brand-blue hover:bg-brand-blue-dark",
                  "inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 whitespace-nowrap sm:w-56",
                  "shadow-brand-blue/20 font-bold text-white shadow-lg transition-all duration-200",
                  "hover:shadow-brand-blue/25 hover:-translate-y-0.5 hover:shadow-xl",
                  "focus-visible:ring-brand-blue focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                ].join(" ")}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2 size-4 shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>

                {footer("callUs")}
              </a>

              <Link
                href="/kontakt"
                className={[
                  "border-brand-blue/40 text-brand-blue-dark hover:border-brand-blue hover:bg-brand-blue/5",
                  "inline-flex min-h-12 w-full items-center justify-center rounded-full border px-5 font-bold whitespace-nowrap sm:w-56",
                  "transition-all duration-200",
                  "focus-visible:ring-brand-blue focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                ].join(" ")}
              >
                {footer("contactCta")}
              </Link>
            </div>
          </div>

          <div>
            <FooterHeading>{footer("navigation")}</FooterHeading>

            <ul className="mt-5 space-y-3">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-brand-blue-dark focus-visible:ring-brand-blue inline-flex rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    {navigation(item.translationKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>{footer("contact")}</FooterHeading>

            <ul className="text-muted mt-5 space-y-4">
              {company.contact.phoneNumbers.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="hover:text-brand-blue-dark focus-visible:ring-brand-blue inline-flex items-center gap-3 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <span className="bg-brand-blue/10 text-brand-blue inline-flex size-9 shrink-0 items-center justify-center rounded-full">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                      </svg>
                    </span>

                    <span>{phone}</span>
                  </a>
                </li>
              ))}

              <li>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="hover:text-brand-blue-dark focus-visible:ring-brand-blue inline-flex items-center gap-3 break-all transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <span className="bg-brand-green/10 text-brand-green inline-flex size-9 shrink-0 items-center justify-center rounded-full">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <path d="M4 4h16v16H4z" />
                      <path d="m4 6 8 6 8-6" />
                    </svg>
                  </span>

                  <span>{company.contact.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <FooterHeading>{footer("legal")}</FooterHeading>

            <ul className="mt-5 space-y-3">
              {legalNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-brand-blue-dark focus-visible:ring-brand-blue inline-flex rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    {navigation(item.translationKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-border/70 border-t bg-white/60">
        <div className="text-muted mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. {footer("copyright")}
          </p>

          <Link
            href="/kontakt"
            className="text-brand-blue-dark hover:text-brand-blue inline-flex items-center gap-1 font-semibold transition-colors"
          >
            {footer("contactCta")}

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 rtl:rotate-180"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}

type FooterHeadingProps = {
  children: React.ReactNode;
};

function FooterHeading({ children }: FooterHeadingProps) {
  return (
    <h2 className="text-brand-blue-dark text-sm font-bold tracking-[0.14em] uppercase">
      {children}
    </h2>
  );
}
