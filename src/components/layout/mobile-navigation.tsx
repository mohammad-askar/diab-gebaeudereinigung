"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

import { LanguageSwitcher } from "./language-switcher";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navigation = useTranslations("Navigation");
  const header = useTranslations("Header");

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? header("closeMenu") : header("openMenu")}
        onClick={() => setIsOpen((current) => !current)}
        className="border-border inline-flex size-11 items-center justify-center rounded-full border bg-white"
      >
        <span aria-hidden="true" className="text-2xl leading-none">
          {isOpen ? "×" : "☰"}
        </span>
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-border absolute inset-x-4 top-full mt-3 rounded-3xl border bg-white p-5 shadow-xl"
        >
          <nav aria-label={navigation("home")}>
            <ul className="space-y-2">
              {mainNavigation.map((item) => {
                const isActive =
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block rounded-xl px-4 py-3 font-semibold transition",
                        isActive
                          ? "bg-surface text-brand-blue-dark"
                          : "text-foreground hover:bg-surface",
                      )}
                    >
                      {navigation(item.translationKey)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-border mt-5 border-t pt-5">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </div>
  );
}
