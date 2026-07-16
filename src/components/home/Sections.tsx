"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Award,
  BadgeDollarSign,
  Brain,
  Factory,
  Globe,
  Handshake,
  Shield,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import { industries } from "@/data/industries";
import { productCategories } from "@/data/categories";
import { blogPosts, caseStudies, services } from "@/data/content";
import { getLocalized } from "@/data/types";
import { whyUsItems } from "@/data/company";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { LucideIcon } from "lucide-react";

const whyIcons: Record<string, LucideIcon> = {
  Award,
  Globe,
  Brain,
  Truck,
  Warehouse,
  Users,
  Factory,
  Handshake,
  Shield,
  BadgeDollarSign,
};

const certificates = [
  "ISO 9001",
  "ISO 14001",
  "NSF H1",
  "Halal",
  "Kosher",
  "EU Manufacturing",
];

export function IndustriesSection() {
  const t = useTranslations("sections");
  const cta = useTranslations("cta");
  const locale = useLocale();
  const featured = industries.slice(0, 8);

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">{t("industries")}</p>
              <h2 className="heading-section mt-3 max-w-2xl text-balance text-navy-900">
                {t("industriesSubtitle")}
              </h2>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
            >
              {cta("viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((ind, i) => (
            <ScrollReveal key={ind.id} delay={i * 60}>
              <Link href={`/industries/${ind.slug}`} className="group relative block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-navy-900">
                  <Image
                    src={ind.image}
                    alt={getLocalized(ind.name, locale)}
                    fill
                    sizes="(max-width:768px) 100vw, 25vw"
                    className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {getLocalized(ind.name, locale)}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs text-white/80">
                      {getLocalized(ind.description, locale)}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductsSection() {
  const t = useTranslations("sections");
  const cta = useTranslations("cta");
  const locale = useLocale();

  return (
    <section className="relative section-padding bg-surface">
      <div className="absolute inset-0 bg-section-fade" />
      <div className="container-wide relative">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">{t("products")}</p>
              <h2 className="heading-section mt-3 max-w-2xl text-balance text-navy-900">
                {t("productsSubtitle")}
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
            >
              {cta("viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {productCategories.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 80}>
              <Link
                href={`/products/${cat.slug}`}
                className="surface-card group flex h-full flex-col sm:flex-row"
              >
                <div className="relative aspect-[16/11] w-full shrink-0 sm:aspect-auto sm:w-44 lg:w-52">
                  <Image
                    src={cat.image}
                    alt={getLocalized(cat.name, locale)}
                    fill
                    sizes="220px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-navy-900">
                    {getLocalized(cat.name, locale)}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                    {getLocalized(cat.description, locale)}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
                    <span className="text-accent">{cta("learnMore")}</span>
                    <span className="text-navy-300">·</span>
                    <span className="text-navy-600">{cta("requestQuote")}</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const t = useTranslations("sections");
  const cta = useTranslations("cta");
  const locale = useLocale();

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <ScrollReveal>
          <p className="eyebrow">{t("services")}</p>
          <h2 className="heading-section mt-3 max-w-2xl text-balance text-navy-900">
            {t("servicesSubtitle")}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 40}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-navy-50 bg-white px-5 py-4 transition-all hover:border-accent/40 hover:shadow-soft"
              >
                <span className="text-sm font-semibold text-navy-800 group-hover:text-accent">
                  {getLocalized(s.name, locale)}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-navy-300 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/services" className="btn-secondary">
            {cta("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WhyUsSection() {
  const t = useTranslations("sections");
  const why = useTranslations("whyUs");

  return (
    <section className="section-padding bg-navy-950 text-white">
      <div className="container-wide">
        <ScrollReveal>
          <p className="eyebrow text-accent-light">{t("whyUs")}</p>
          <h2 className="heading-section mt-3 max-w-2xl text-balance">
            {t("whyUsSubtitle")}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whyUsItems.map((item, i) => {
            const Icon = whyIcons[item.icon] ?? Shield;
            return (
              <ScrollReveal key={item.key} delay={i * 40}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/40 hover:bg-white/[0.06]">
                  <Icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-4 text-sm font-semibold leading-snug">
                    {why(item.key)}
                  </h3>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CertificatesSection() {
  const t = useTranslations("sections");
  const cta = useTranslations("cta");

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow !text-[13px]">{t("certificates")}</p>
            <h2 className="heading-section mt-3 text-navy-900">
              {t("certificates")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {certificates.map((c, i) => (
            <ScrollReveal key={c} delay={i * 50}>
              <div className="rounded-full border border-navy-100 bg-white px-5 py-3 text-[16px] font-semibold text-navy-800 shadow-soft">
                {c}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 text-[16px] font-semibold text-accent"
          >
            {cta("viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function BlogSection() {
  const t = useTranslations("sections");
  const cta = useTranslations("cta");
  const locale = useLocale();
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">{t("blog")}</p>
              <h2 className="heading-section mt-3 max-w-2xl text-balance text-navy-900">
                {t("blogSubtitle")}
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              {cta("viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 70}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block border-t-2 border-navy-900 pt-5 transition-colors hover:border-accent"
              >
                <h3 className="font-display text-lg font-semibold text-navy-900 group-hover:text-accent">
                  {getLocalized(post.title, locale)}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm text-navy-500">
                  {getLocalized(post.excerpt, locale)}
                </p>
                <p className="mt-4 text-sm font-semibold text-accent">
                  {cta("learnMore")}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesSection() {
  const t = useTranslations("sections");
  const cta = useTranslations("cta");
  const locale = useLocale();
  const cases = caseStudies.slice(0, 3);

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">{t("caseStudies")}</p>
              <h2 className="heading-section mt-3 text-navy-900">
                {t("caseStudies")}
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              {cta("viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {cases.map((c, i) => (
            <ScrollReveal key={c.slug} delay={i * 70}>
              <Link href={`/case-studies/${c.slug}`} className="surface-card block p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Case Study
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
                  {getLocalized(c.title, locale)}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm text-navy-500">
                  {getLocalized(c.problem, locale)}
                </p>
                <p className="mt-4 text-sm font-semibold text-navy-500">
                  {cta("learnMore")} →
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
