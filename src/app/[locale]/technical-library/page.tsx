import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { technicalGuides } from "@/data/company";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";
import { Link } from "@/i18n/routing";
import { BookOpen } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEO({
    title: { en: "Technical Library", ru: "Техническая библиотека", hy: "Technical Library" },
    description: { en: "Lubrication guides, ISO VG tables, NLGI guide", ru: "Руководства по смазке", hy: "Guides" },
    locale,
    path: "/technical-library",
  });
}

export default async function TechnicalLibraryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4">
          <Breadcrumbs items={[{ label: "Technical Library" }]} />
          <h1 className="heading-section text-white mt-4">Technical Library</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalGuides.map((guide) => (
            <Link key={guide.slug} href={`/technical-library/${guide.slug}`} className="card-premium p-6 group flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h2 className="font-semibold text-navy-900 group-hover:text-accent transition-colors">
                  {getLocalized(guide.name, locale)}
                </h2>
                <span className="text-accent text-sm mt-2 inline-block">Read guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
