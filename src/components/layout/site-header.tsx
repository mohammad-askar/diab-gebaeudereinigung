import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { company } from "@/data/company";
import { mainNavigation } from "@/data/navigation";
import { Link } from "@/i18n/navigation";

import { LanguageSwitcher } from "./language-switcher";
import { MobileNavigation } from "./mobile-navigation";

export async function SiteHeader() {
  const navigation = await getTranslations("Navigation");
  const header = await getTranslations("Header");

  const primaryPhone = company.contact.phoneNumbers[0];
  const phoneHref = primaryPhone.replace(/\s/g, "");

  return (
    <header className="border-border/60 sticky top-0 z-50 border-b bg-white/90 shadow-[0_8px_30px_rgba(15,56,94,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-5 px-5 sm:px-6 lg:gap-6">
        <Link
          href="/"
          aria-label={company.name}
          className="group focus-visible:ring-brand-blue flex shrink-0 items-center rounded-xl focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none"
        >
          <Image
            src="/images/logo/diab-logo.jpg"
            alt={company.name}
            width={400}
            height={230}
            priority
            sizes="(min-width: 1024px) 150px, 120px"
            className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] lg:h-24"
          />
        </Link>

        <nav className="hidden xl:block" aria-label={navigation("home")}>
          <ul className="flex items-center gap-1">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "text-foreground inline-flex min-h-11 items-center rounded-full px-4",
                    "font-semibold transition-colors duration-200",
                    "hover:bg-brand-blue/5 hover:text-brand-blue-dark",
                    "focus-visible:ring-brand-blue focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                  ].join(" ")}
                >
                  {navigation(item.translationKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />

          <a
            href={`tel:${phoneHref}`}
            className={[
              "border-brand-blue/50 text-brand-blue-dark inline-flex min-h-12 items-center justify-center",
              "rounded-full border px-5 font-bold whitespace-nowrap",
              "transition-all duration-200",
              "hover:border-brand-blue hover:bg-brand-blue/5",
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

            {header("callUs")}
          </a>

          <Link
            href="/kontakt"
            className={[
              "bg-brand-blue inline-flex min-h-12 items-center justify-center",
              "rounded-full px-6 font-bold whitespace-nowrap text-white",
              "shadow-brand-blue/20 shadow-lg transition-all duration-200",
              "hover:bg-brand-blue-dark hover:shadow-brand-blue/25 hover:-translate-y-0.5 hover:shadow-xl",
              "focus-visible:ring-brand-blue focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
            ].join(" ")}
          >
            {header("contact")}

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ms-2 size-4 shrink-0 rtl:rotate-180"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>

        <div className="lg:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
