import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { downloads } from "@/data/company";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";
import { Download, FileText, BookOpen } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEO({
    title: { en: "Downloads", ru: "Загрузки", hy: "Nerberner" },
    description: { en: "Catalogues, TDS, MSDS, certificates", ru: "Каталоги, паспорта, сертификаты", hy: "Catalogues and documents" },
    locale,
    path: "/downloads",
  });
}

export default async function DownloadsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "nav" });

  const categories = [
    { key: "catalogue", icon: BookOpen, label: "PDF Catalogues" },
    { key: "guide", icon: FileText, label: "Technical Guides" },
    { key: "technical", icon: FileText, label: "Technical Data" },
    { key: "profile", icon: FileText, label: "Company Profile" },
  ];

  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: tNav("downloads") }]} />
          <h1 className="heading-section text-white mt-4">{tNav("downloads")}</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto space-y-12">
          {categories.map(({ key, icon: Icon, label }) => {
            const items = downloads.filter((d) => d.type === key);
            if (items.length === 0) return null;
            return (
              <div key={key}>
                <h2 className="font-display font-bold text-2xl text-navy-900 mb-6 flex items-center gap-3">
                  <Icon className="w-6 h-6 text-accent" />
                  {label}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((doc) => (
                    <button key={doc.id} className="card-premium flex items-center justify-between p-5 hover:border-accent/30 text-left w-full group">
                      <div>
                        <h3 className="font-semibold text-navy-900 group-hover:text-accent transition-colors">
                          {getLocalized(doc.name, locale)}
                        </h3>
                        <p className="text-navy-400 text-sm mt-1">{doc.size}</p>
                      </div>
                      <Download className="w-5 h-5 text-accent" />
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
