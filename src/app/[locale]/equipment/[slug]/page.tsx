import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { getEquipmentBySlug, getAllEquipmentSlugs } from "@/data/equipment";
import { getProductsByEquipment } from "@/data/products";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";
import { CTASection } from "@/components/home/HeroSection";

export async function generateStaticParams() {
  return getAllEquipmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const equipment = getEquipmentBySlug(slug);
  if (!equipment) return {};

  return generateSEO({
    title: {
      en: `Lubricants for ${getLocalized(equipment.name, "en")}`,
      ru: `Смазки для ${getLocalized(equipment.name, "ru")}`,
      hy: `Քսանյութեր՝ ${getLocalized(equipment.name, "hy")}`,
    },
    description: equipment.description,
    locale,
    path: `/equipment/${slug}`,
  });
}

export default async function EquipmentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const equipment = getEquipmentBySlug(slug);
  if (!equipment) notFound();

  const tCta = await getTranslations({ locale, namespace: "cta" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const recommended = getProductsByEquipment(slug);

  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: tNav("equipment"), href: "/equipment" }, { label: getLocalized(equipment.name, locale) }]} />
          <h1 className="heading-section text-white mt-4">{getLocalized(equipment.name, locale)}</h1>
          <p className="text-white/85 text-lg mt-4 max-w-2xl">{getLocalized(equipment.description, locale)}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto grid lg:grid-cols-2 gap-12">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-premium">
            <Image src={equipment.image} alt="" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-navy-900 mb-6">Maintenance Tips</h2>
            <ul className="space-y-3 mb-10">
              {equipment.maintenanceTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-navy-600">
                  <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                  {getLocalized(tip, locale)}
                </li>
              ))}
            </ul>
            <Button href="/lubricant-finder">{tCta("findLubricant")}</Button>
          </div>
        </div>

        {recommended.length > 0 && (
          <div className="container-wide mx-auto mt-16">
            <h2 className="heading-section text-navy-900 mb-8">Recommended Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {recommended.slice(0, 6).map((p) => (
                <Link key={p.id} href={`/products/item/${p.slug}`} className="card-premium group block overflow-hidden">
                  <div className="relative h-36 overflow-hidden bg-surface">
                    <Image
                      src={p.image}
                      alt={getLocalized(p.name, locale)}
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-navy-900 transition-colors group-hover:text-accent">
                      {getLocalized(p.name, locale)}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
      <CTASection />
    </>
  );
}
