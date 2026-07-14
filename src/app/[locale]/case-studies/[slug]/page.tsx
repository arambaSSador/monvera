import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/data/content";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";
import { CTASection } from "@/components/home/HeroSection";

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return generateSEO({ title: cs.title, description: cs.results, locale, path: `/case-studies/${slug}` });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();
  const tCta = await getTranslations({ locale, namespace: "cta" });

  return (
    <>
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <Image src={cs.image} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy-900/85" />
        </div>
        <div className="relative container-wide mx-auto px-4">
          <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }, { label: getLocalized(cs.title, locale) }]} />
          <h1 className="heading-section text-white mt-6">{getLocalized(cs.title, locale)}</h1>
          <p className="text-white/85 mt-4">{getLocalized(cs.client, locale)}</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto max-w-4xl grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display font-bold text-xl text-navy-900 mb-4">Problem</h2>
            <p className="text-navy-600">{getLocalized(cs.problem, locale)}</p>
          </div>
          <div>
            <h2 className="font-display font-bold text-xl text-navy-900 mb-4">Solution</h2>
            <p className="text-navy-600">{getLocalized(cs.solution, locale)}</p>
          </div>
          <div className="md:col-span-2 bg-accent/5 rounded-3xl p-8">
            <h2 className="font-display font-bold text-xl text-navy-900 mb-4">Results</h2>
            <p className="text-navy-700 text-lg">{getLocalized(cs.results, locale)}</p>
            <p className="text-accent font-bold text-2xl mt-4">{getLocalized(cs.savings, locale)}</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button href="/quote">{tCta("commercialOffer")}</Button>
        </div>
      </section>
      <CTASection />
    </>
  );
}
