"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Download } from "lucide-react";
import { heroImages } from "@/data/company";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function HeroSection() {
  const t = useTranslations("hero");
  const ts = useTranslations("stats");
  const locale = useLocale();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy-950">
      {heroImages.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
            i === slide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === slide ? "animate-ken-burns" : ""}`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-hero-veil" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/45" />

      <div className="container-wide relative flex min-h-[100svh] flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:justify-center lg:px-8 lg:pb-24 lg:pt-28">
        <div className="max-w-4xl">
          <p
            className="font-display text-4xl font-semibold tracking-tight text-white opacity-0 animate-fade-up sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms", animationFillMode: "forwards" }}
          >
            MONVERA
          </p>
          <p
            className="mt-2 text-sm font-medium tracking-[0.18em] text-accent-light uppercase opacity-0 animate-fade-up sm:text-base"
            style={{ animationDelay: "140ms", animationFillMode: "forwards" }}
          >
            COGELSA · Armenia
          </p>

          <h1
            className={`mt-8 ${
              locale === "hy" ? "max-w-[28ch]" : "max-w-[18ch]"
            } font-display text-2xl font-medium leading-snug tracking-tight text-white/90 opacity-0 animate-fade-up sm:text-3xl lg:text-4xl`}
            style={{ animationDelay: "220ms", animationFillMode: "forwards" }}
          >
            {t("headline")}
          </h1>

          <div
            className="accent-rule mt-7 opacity-0 animate-line-grow"
            style={{ animationDelay: "340ms", animationFillMode: "forwards" }}
          />

          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            {t("subtitle")}
            <span className="mt-2 block text-sm text-white/75 sm:text-base">
              {t("quality")} · {t("experience")}
            </span>
          </p>

          <div
            className="mt-9 flex flex-wrap gap-3 opacity-0 animate-fade-up"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            <Link href="/contact" className="btn-primary">
              {t("ctaConsultation")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="btn-ghost-light">
              {t("ctaCatalogue")}
            </Link>
            <Link href="/downloads" className="btn-ghost-light">
              <Download className="h-4 w-4" />
              {t("ctaDownload")}
            </Link>
          </div>
        </div>

        <div
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4 lg:mt-20 opacity-0 animate-fade-up"
          style={{ animationDelay: "620ms", animationFillMode: "forwards" }}
        >
          <Stat value={100} suffix="+" label={ts("years")} />
          <Stat value={55} suffix="+" label={ts("countries")} />
          <Stat value={500} suffix="+" label={ts("products")} />
          <div>
            <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
              EU
            </div>
            <div className="mt-1 text-xs text-white/55 sm:text-sm">
              {ts("manufacturing")}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-4 hidden gap-2 sm:flex lg:right-8">
          {heroImages.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setSlide(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === slide ? "w-8 bg-accent" : "w-3 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
        <AnimatedCounter value={value} />
        {suffix}
      </div>
      <div className="mt-1 text-xs text-white/55 sm:text-sm">{label}</div>
    </div>
  );
}

export function CTASection() {
  const t = useTranslations("sections");
  const cta = useTranslations("cta");

  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-section-fade opacity-80" />
      <div className="container-wide relative section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            MONVERA
          </p>
          <h2 className="heading-section mt-4 text-balance">{t("cta")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/65">{t("ctaSubtitle")}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              {cta("consultation")}
            </Link>
            <Link href="/quote" className="btn-ghost-light">
              {cta("commercialOffer")}
            </Link>
            <Link href="/lubricant-finder" className="btn-ghost-light">
              {cta("findLubricant")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
