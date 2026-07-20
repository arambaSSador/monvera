import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { caseStudies } from "@/data/content";
import { getIndustryBySlug } from "@/data/industries";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEO({
    title: { en: "Case Studies", ru: "Кейсы", hy: "Հաջողության պատմություններ" },
    description: {
      en: "Customer success stories",
      ru: "Истории успеха клиентов",
      hy: "Հաճախորդների հաջողության պատմություններ",
    },
    locale,
    path: "/case-studies",
  });
}

export default async function CaseStudiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sections" });

  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: t("caseStudies") }]} />
          <h1 className="heading-section text-white mt-4">{t("caseStudies")}</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto space-y-12">
          {caseStudies.map((cs) => {
            const industry = getIndustryBySlug(cs.industry);
            const industryLabel = industry
              ? getLocalized(industry.name, locale)
              : cs.industry;

            return (
              <Link
                key={cs.id}
                href={`/case-studies/${cs.slug}`}
                className="card-premium group grid md:grid-cols-2 overflow-hidden"
              >
                <div className="relative h-64 md:h-auto min-h-[16rem]">
                  <Image
                    src={cs.image}
                    alt={getLocalized(cs.title, locale)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <span className="badge-accent">{industryLabel}</span>
                  <h2 className="font-display font-bold text-2xl text-navy-900 mt-4 group-hover:text-accent transition-colors">
                    {getLocalized(cs.title, locale)}
                  </h2>
                  <p className="text-accent font-semibold text-lg mt-4">
                    {getLocalized(cs.savings, locale)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
