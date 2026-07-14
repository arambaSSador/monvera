import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { technicalGuides } from "@/data/company";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";
import { Download } from "lucide-react";

export async function generateStaticParams() {
  return technicalGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const guide = technicalGuides.find((g) => g.slug === slug);
  if (!guide) return {};
  return generateSEO({ title: guide.name, description: guide.name, locale, path: `/technical-library/${slug}` });
}

export default async function TechnicalGuidePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const guide = technicalGuides.find((g) => g.slug === slug);
  if (!guide) notFound();

  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4">
          <Breadcrumbs items={[{ label: "Technical Library", href: "/technical-library" }, { label: getLocalized(guide.name, locale) }]} />
          <h1 className="heading-section text-white mt-4">{getLocalized(guide.name, locale)}</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto max-w-3xl prose-monvera">
          <p>Comprehensive technical guide for industrial lubrication professionals. Download the full PDF for detailed specifications, charts, and recommendations.</p>
          <Button href="/downloads" className="mt-8"><Download className="w-5 h-5" /> Download PDF</Button>
        </div>
      </section>
    </>
  );
}
