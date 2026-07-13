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
    <header className="border-border/70 sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/" aria-label={company.name} className="shrink-0">
          <Image
            src="/images/logo/diab-logo.jpg"
            alt={company.name}
            width={180}
            height={80}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:block" aria-label={navigation("home")}>
          <ul className="flex items-center gap-7">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground hover:text-brand-blue font-semibold transition"
                >
                  {navigation(item.translationKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />

          <a
            href={`tel:${phoneHref}`}
            className="border-brand-blue text-brand-blue hover:bg-surface rounded-full border px-5 py-3 font-semibold transition"
          >
            {header("callUs")}
          </a>

          <Link
            href="/kontakt"
            className="bg-brand-blue hover:bg-brand-blue-dark rounded-full px-5 py-3 font-semibold text-white transition"
          >
            {header("contact")}
          </Link>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
