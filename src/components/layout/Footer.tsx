"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { companyInfo } from "@/data/company";
import { getLocalized } from "@/data/types";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const columns = [
    {
      title: t("nav.products"),
      links: [
        { href: "/products", label: t("nav.products") },
        { href: "/lubricant-finder", label: t("nav.finder") },
        { href: "/products/compare", label: t("product.compare") },
        { href: "/downloads", label: t("nav.downloads") },
      ],
    },
    {
      title: t("nav.industries"),
      links: [
        { href: "/industries", label: t("nav.industries") },
        { href: "/equipment", label: t("nav.equipment") },
        { href: "/services", label: t("nav.services") },
        { href: "/technical-support", label: t("nav.technicalSupport") },
      ],
    },
    {
      title: t("nav.about"),
      links: [
        { href: "/about", label: t("nav.about") },
        { href: "/certificates", label: t("nav.certificates") },
        { href: "/blog", label: t("nav.blog") },
        { href: "/case-studies", label: t("sections.caseStudies") },
        { href: "/contact", label: t("nav.contact") },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-steel-sheen opacity-40" />
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-wide relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent">
                <span className="font-display text-lg font-bold">M</span>
              </div>
              <div>
                <div className="font-display text-xl font-semibold tracking-tight">
                  MONVERA
                </div>
                <div className="text-xs text-white/55">COGELSA Official · Armenia</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {t("footer.description")}
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/85">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent" />
                {companyInfo.phone}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 text-accent" />
                {companyInfo.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                <span>{getLocalized(companyInfo.office, locale)}</span>
              </div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold tracking-wide text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">{t("footer.copyright")}</p>
          <Link
            href="/privacy"
            className="text-xs text-white/45 transition-colors hover:text-white"
          >
            {t("footer.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
