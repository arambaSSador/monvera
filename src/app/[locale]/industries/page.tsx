import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { industries } from "@/data/industries";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEO({
    title: { hy: "Ոլորտներ", ru: "Отрасли", en: "Industries" },
    description: {
      hy: "COGELSA смазочные решения для всех отраслей",
      ru: "смазочные решения COGELSA для всех отраслей промышленности",
      en: "COGELSA lubrication solutions for all industrial sectors",
    },
    locale,
    path: "/industries",
  });
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sections" });

  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: t("industries") }]} />
          <h1 className="heading-section text-white mt-4">{t("industries")}</h1>
          <p className="text-white/85 text-lg mt-4 max-w-2xl">{t("industriesSubtitle")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.id} delay={i * 60}>
                <Link href={`/industries/${ind.slug}`} className="card-premium group block overflow-hidden">
                  <div className="relative h-56">
                    <img
                      src={ind.image}
                      alt={getLocalized(ind.name, locale)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="font-display font-bold text-white text-xl group-hover:text-accent transition-colors">
                        {getLocalized(ind.name, locale)}
                      </h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-navy-600 line-clamp-2">{getLocalized(ind.description, locale)}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
