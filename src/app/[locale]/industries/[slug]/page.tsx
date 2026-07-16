import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getIndustryBySlug, getAllIndustrySlugs } from "@/data/industries";
import { getProductsByIndustry } from "@/data/products";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";
import { CTASection } from "@/components/home/HeroSection";

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return generateSEO({
    title: {
      hy: `${getLocalized(industry.name, "hy")} — смазки COGELSA`,
      ru: `смазки для ${getLocalized(industry.name, "ru")}`,
      en: `Lubricants for ${getLocalized(industry.name, "en")}`,
    },
    description: industry.description,
    locale,
    path: `/industries/${slug}`,
    keywords: industry.seoKeywords,
    image: industry.image,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const tCta = await getTranslations({ locale, namespace: "cta" });
  const industryProducts = getProductsByIndustry(slug);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={industry.image} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: getLocalized(industry.name, locale) }]} />
          <h1 className="heading-display text-white mt-6 max-w-3xl">
            {getLocalized(industry.name, locale)}
          </h1>
          <p className="text-white/90 text-xl mt-6 max-w-2xl leading-relaxed">
            {getLocalized(industry.description, locale)}
          </p>
          <div className="flex gap-4 mt-10">
            <Button href="/quote">{tCta("commercialOffer")}</Button>
            <Button href="/lubricant-finder" variant="outline-white">{tCta("findLubricant")}</Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <ScrollReveal>
              <h2 className="font-display font-bold text-2xl text-navy-900 mb-6">Challenges</h2>
              <ul className="space-y-3">
                {industry.challenges.map((c, i) => (
                  <li key={i} className="flex items-center gap-3 text-navy-600">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {getLocalized(c, locale)}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display font-bold text-2xl text-navy-900 mb-6">COGELSA Solutions</h2>
              <ul className="space-y-3">
                {industry.solutions.map((s, i) => (
                  <li key={i} className="flex items-center gap-3 text-navy-600">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {getLocalized(s, locale)}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {industryProducts.length > 0 && (
            <div>
              <h2 className="heading-section text-navy-900 mb-8">Recommended Products</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {industryProducts.slice(0, 8).map((product) => (
                  <Link key={product.id} href={`/products/item/${product.slug}`} className="card-premium group block overflow-hidden">
                    <div className="relative h-36 overflow-hidden bg-surface">
                      <Image
                        src={product.image}
                        alt={getLocalized(product.name, locale)}
                        fill
                        className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                        sizes="25vw"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-navy-900 transition-colors group-hover:text-accent">
                        {getLocalized(product.name, locale)}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-navy-500">
                        {getLocalized(product.shortDescription, locale)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
