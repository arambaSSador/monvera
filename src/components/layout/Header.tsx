"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Phone,
  Globe,
} from "lucide-react";
import { productCategories } from "@/data/categories";
import { industries } from "@/data/industries";
import { getLocalized } from "@/data/types";
import { localeNames } from "@/i18n/config";
import { companyInfo } from "@/data/company";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const navItems: {
    key: string;
    href: string;
    mega?: "products" | "industries";
  }[] = [
    { key: "products", href: "/products", mega: "products" },
    { key: "industries", href: "/industries", mega: "industries" },
    { key: "services", href: "/services" },
    { key: "technicalSupport", href: "/technical-support" },
    { key: "about", href: "/about" },
    { key: "blog", href: "/blog" },
    { key: "certificates", href: "/certificates" },
    { key: "downloads", href: "/downloads" },
    { key: "contact", href: "/contact" },
  ];

  // Top of every page sits on a dark hero / navy band — keep menu white until scroll.
  const light = !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-navy-50/80 bg-white/92 py-3 shadow-soft backdrop-blur-xl"
            : "bg-gradient-to-b from-navy-950/85 via-navy-950/45 to-transparent py-5"
        )}
      >
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="group flex shrink-0 items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent shadow-glow transition-transform duration-300 group-hover:scale-105">
                <span className="font-display text-lg font-bold text-white">M</span>
              </div>
              <div className="hidden sm:block">
                <div
                  className={cn(
                    "font-display text-lg font-semibold leading-none tracking-tight",
                    light ? "text-white" : "text-navy-900"
                  )}
                >
                  MONVERA
                </div>
                <div
                  className={cn(
                    "mt-1 text-[11px] font-medium tracking-wide",
                    light ? "text-white/80" : "text-navy-500"
                  )}
                >
                  COGELSA · Armenia
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-0.5 xl:flex">
              {navItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => item.mega && setActiveMenu(item.mega)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-xl px-3 py-2 text-[13px] font-medium transition-colors",
                      light
                        ? "text-white/85 hover:bg-white/10 hover:text-white"
                        : "text-navy-700 hover:bg-surface hover:text-accent"
                    )}
                  >
                    {t(item.key)}
                    {item.mega && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                  </Link>

                  {item.mega === "products" && activeMenu === "products" && (
                    <div className="absolute left-0 top-full pt-3">
                      <div className="w-[520px] rounded-3xl border border-navy-50 bg-white p-5 shadow-lift">
                        <p className="eyebrow mb-4">COGELSA</p>
                        <div className="grid grid-cols-2 gap-3">
                          {productCategories.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/products/${cat.slug}`}
                              className="rounded-2xl p-3 transition-colors hover:bg-surface"
                            >
                              <div className="font-semibold text-navy-900">
                                {getLocalized(cat.name, locale)}
                              </div>
                              <p className="mt-1 line-clamp-2 text-xs text-navy-500">
                                {getLocalized(cat.description, locale)}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {item.mega === "industries" && activeMenu === "industries" && (
                    <div className="absolute left-0 top-full pt-3">
                      <div className="w-[560px] rounded-3xl border border-navy-50 bg-white p-5 shadow-lift">
                        <p className="eyebrow mb-4">{t("industries")}</p>
                        <div className="grid grid-cols-3 gap-2">
                          {industries.slice(0, 12).map((ind) => (
                            <Link
                              key={ind.id}
                              href={`/industries/${ind.slug}`}
                              className="rounded-xl px-3 py-2 text-sm text-navy-700 transition-colors hover:bg-surface hover:text-accent"
                            >
                              {getLocalized(ind.name, locale)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={t("search")}
                onClick={() => setSearchOpen(true)}
                className={cn(
                  "rounded-xl p-2.5 transition-colors",
                  light
                    ? "text-white hover:bg-white/10"
                    : "text-navy-600 hover:bg-surface"
                )}
              >
                <Search className="h-5 w-5" />
              </button>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangOpen((v) => !v)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-medium transition-colors",
                    light
                      ? "text-white hover:bg-white/10"
                      : "text-navy-600 hover:bg-surface"
                  )}
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline uppercase">{locale}</span>
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full z-50 mt-2 min-w-[140px] overflow-hidden rounded-2xl border border-navy-50 bg-white shadow-lift">
                    {(["ru", "en"] as const).map((loc) => (
                      <Link
                        key={loc}
                        href={pathname}
                        locale={loc}
                        onClick={() => setLangOpen(false)}
                        className={cn(
                          "block px-4 py-2.5 text-sm transition-colors hover:bg-surface",
                          locale === loc
                            ? "font-semibold text-accent"
                            : "text-navy-700"
                        )}
                      >
                        {localeNames[loc]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                className={cn(
                  "hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium lg:flex",
                  light ? "text-white" : "text-navy-700"
                )}
              >
                <Phone className="h-4 w-4 text-accent" />
                {companyInfo.phone}
              </a>

              <Link href="/quote" className="btn-primary hidden !px-5 !py-2.5 md:inline-flex">
                {t("quote")}
              </Link>

              <button
                type="button"
                className={cn(
                  "rounded-xl p-2.5 xl:hidden",
                  light
                    ? "text-white hover:bg-white/10"
                    : "text-navy-800 hover:bg-surface"
                )}
                onClick={() => setMobileOpen(true)}
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-navy-950/50"
            onClick={() => setMobileOpen(false)}
            aria-label="Close"
          />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-lift">
            <div className="flex items-center justify-between border-b border-navy-50 px-5 py-4">
              <span className="font-display text-lg font-semibold">MONVERA</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl p-2 hover:bg-surface"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 space-y-1 overflow-y-auto p-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-navy-800 hover:bg-surface"
                >
                  {t(item.key)}
                </Link>
              ))}
              <Link
                href="/lubricant-finder"
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-accent"
              >
                {t("finder")}
              </Link>
            </nav>
            <div className="border-t border-navy-50 p-4">
              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full"
              >
                {t("quote")}
              </Link>
            </div>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center bg-navy-950/60 px-4 pt-[15vh] backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-3xl bg-white p-4 shadow-lift">
            <div className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3">
              <Search className="h-5 w-5 text-navy-400" />
              <input
                autoFocus
                placeholder={t("searchPlaceholder")}
                className="w-full bg-transparent text-navy-900 outline-none placeholder:text-navy-400"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="rounded-lg p-1 hover:bg-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 px-1">
              <Link
                href="/products"
                onClick={() => setSearchOpen(false)}
                className="rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-navy-600 hover:text-accent"
              >
                {t("products")}
              </Link>
              <Link
                href="/lubricant-finder"
                onClick={() => setSearchOpen(false)}
                className="rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-navy-600 hover:text-accent"
              >
                {t("finder")}
              </Link>
              <Link
                href="/downloads"
                onClick={() => setSearchOpen(false)}
                className="rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-navy-600 hover:text-accent"
              >
                {t("downloads")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
