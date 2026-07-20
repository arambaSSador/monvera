import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { services } from "@/data/content";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";
import { Link } from "@/i18n/routing";
import { CTASection } from "@/components/home/HeroSection";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEO({
    title: { en: "Services", ru: "Услуги", hy: "Ծառայություններ" },
    description: {
      en: "Technical consulting, oil analysis, lubrication audit",
      ru: "Техническое консультирование, анализ масла",
      hy: "Տեխնիկական խորհրդատվություն, յուղի վերլուծություն, քսման աուդիտ",
    },
    locale,
    path: "/services",
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sections" });

  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: t("services") }]} />
          <h1 className="heading-section text-white mt-4">{t("services")}</h1>
          <p className="text-white/85 text-lg mt-4 max-w-2xl">{t("servicesSubtitle")}</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto grid md:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.id} delay={i * 80}>
              <Link href={`/services/${svc.slug}`} className="card-premium p-8 group block h-full">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <span className="text-accent font-bold text-lg">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="font-display font-bold text-xl text-navy-900 group-hover:text-accent transition-colors mb-3">
                  {getLocalized(svc.name, locale)}
                </h2>
                <p className="text-navy-600">{getLocalized(svc.description, locale)}</p>
                {svc.features.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {svc.features.map((f, j) => (
                      <li key={j} className="text-sm text-navy-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {getLocalized(f, locale)}
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
