import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { equipmentList } from "@/data/equipment";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEO({
    title: {
      en: "Industrial Equipment",
      ru: "Промышленное оборудование",
      hy: "Արդյունաբերական սարքավորումներ",
    },
    description: {
      en: "Lubricants by equipment type",
      ru: "Смазки по типу оборудования",
      hy: "Քսանյութեր ըստ սարքավորման տեսակի",
    },
    locale,
    path: "/equipment",
  });
}

export default async function EquipmentListPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tSections = await getTranslations({ locale, namespace: "sections" });

  return (
    <>
      <section className="bg-navy-900 pb-12 pt-32 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: tNav("equipment") }]} />
          <h1 className="heading-section mt-4 text-white">{tSections("equipment")}</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {equipmentList.map((eq) => (
            <Link key={eq.id} href={`/equipment/${eq.slug}`} className="card-premium group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={eq.image}
                  alt={getLocalized(eq.name, locale)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-lg font-bold text-navy-900 group-hover:text-accent">
                  {getLocalized(eq.name, locale)}
                </h2>
                <p className="mt-2 text-sm text-navy-500">
                  {getLocalized(eq.description, locale)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
