import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/company";
import { generateSEO } from "@/lib/seo";
import { CTASection } from "@/components/home/HeroSection";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEO({
    title: { en: "About MONVERA", ru: "О компании MONVERA", hy: "MONVERA masin" },
    description: {
      en: "Official COGELSA distributor in Armenia. 100+ years European expertise.",
      ru: "Официальный дистрибьютор COGELSA в Армении",
      hy: "COGELSA official distributor Armenia",
    },
    locale,
    path: "/about",
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tStats = await getTranslations({ locale, namespace: "stats" });
  const tCta = await getTranslations({ locale, namespace: "cta" });

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/factory.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/85" />
        </div>
        <div className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: tNav("about") }]} />
          <h1 className="heading-display text-white mt-6">MONVERA LLC</h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl">
            Official Distributor of COGELSA Industrial Lubricants in Armenia
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="heading-section text-navy-900 mb-6">European Quality, Local Expertise</h2>
              <div className="space-y-4 text-navy-600 text-lg leading-relaxed">
                <p>
                  MONVERA LLC is the official and exclusive distributor of COGELSA industrial lubricants in Armenia.
                  We bring over 100 years of European manufacturing excellence to the Armenian industrial market.
                </p>
                <p>
                  Our team of lubrication engineers provides comprehensive technical support, from product selection
                  to lubrication audits and oil analysis programs.
                </p>
                <p>
                  We maintain a large local stock of COGELSA products, ensuring fast delivery across Armenia
                  and neighboring countries.
                </p>
              </div>
              <Button href="/contact" className="mt-8">{tCta("contactExpert")}</Button>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.labelKey} className="text-center p-6 bg-surface rounded-3xl">
                    <div className="font-display font-bold text-4xl text-accent">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-navy-600 text-sm mt-2">{tStats(stat.labelKey)}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-wide mx-auto text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-section text-navy-900 mb-6">COGELSA — Since 1919</h2>
            <p className="text-navy-600 text-lg leading-relaxed">
              COGELSA is a Spanish manufacturer of industrial lubricants with over 100 years of experience.
              Their products are used in 55+ countries worldwide, from mining operations to food processing plants.
              COGELSA maintains ISO 9001 and ISO 14001 certifications and operates a state-of-the-art research laboratory.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
