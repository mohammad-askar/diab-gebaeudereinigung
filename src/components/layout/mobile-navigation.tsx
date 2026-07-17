"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { mainNavigation } from "@/data/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { LanguageSwitcher } from "./language-switcher";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const navigation = useTranslations("Navigation");
  const header = useTranslations("Header");

  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? header("closeMenu") : header("openMenu")}
        onClick={() => setIsOpen((current) => !current)}
        className={cn(
          "border-border/80 text-foreground inline-flex size-11 items-center justify-center rounded-full border bg-white shadow-sm",
          "transition-all duration-200",
          "hover:border-brand-blue/40 hover:bg-brand-blue/5 hover:text-brand-blue-dark",
          "focus-visible:ring-brand-blue focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        )}
      >
        <span className="relative block size-5" aria-hidden="true">
          <span
            className={cn(
              "absolute top-1 left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200",
              isOpen && "top-2.5 rotate-45",
            )}
          />

          <span
            className={cn(
              "absolute top-2.5 left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200",
              isOpen && "opacity-0",
            )}
          />

          <span
            className={cn(
              "absolute top-4 left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200",
              isOpen && "top-2.5 -rotate-45",
            )}
          />
        </span>
      </button>

      {isOpen && (
        <>
          <div
            aria-hidden="true"
            className="fixed inset-0 top-20 z-40 bg-slate-950/20 backdrop-blur-[2px]"
          />

          <div
            ref={menuRef}
            id="mobile-navigation"
            className={cn(
              "border-border/70 absolute inset-x-4 top-full z-50 mt-3 overflow-hidden rounded-3xl border bg-white shadow-2xl",
              "shadow-slate-950/10",
            )}
          >
            <div className="px-4 pt-5 pb-4">
              <nav aria-label={navigation("home")}>
                <ul className="space-y-1.5">
                  {mainNavigation.map((item) => {
                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href));

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "group flex min-h-12 items-center justify-between rounded-2xl px-4 py-3 font-semibold",
                            "transition-all duration-200",
                            "focus-visible:ring-brand-blue focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                            isActive
                              ? "bg-brand-blue shadow-brand-blue/20 text-white shadow-md"
                              : "text-foreground hover:bg-brand-blue/5 hover:text-brand-blue-dark",
                          )}
                        >
                          <span>{navigation(item.translationKey)}</span>

                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={cn(
                              "size-4 transition-transform duration-200 rtl:rotate-180",
                              !isActive &&
                                "group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5",
                            )}
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="border-border/70 bg-surface/60 border-t px-4 py-4">
              <p className="text-muted mb-3 text-xs font-bold tracking-[0.14em] uppercase">
                {header("language")}
              </p>

              <LanguageSwitcher />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
