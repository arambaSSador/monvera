import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getCategoryBySlug, getAllCategorySlugs } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";
import Image from "next/image";

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return generateSEO({ title: cat.name, description: cat.description, locale, path: `/products/${slug}`, image: cat.image });
}

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);
  const tCta = await getTranslations({ locale, namespace: "cta" });

  return (
    <>
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0">
          <Image src={category.image} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative container-wide mx-auto px-4">
          <Breadcrumbs items={[{ label: "Products", href: "/products" }, { label: getLocalized(category.name, locale) }]} />
          <h1 className="heading-section text-white mt-4">{getLocalized(category.name, locale)}</h1>
          <p className="text-white/85 text-lg mt-4 max-w-2xl">{getLocalized(category.description, locale)}</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto">
          {category.subcategories.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-10">
              {category.subcategories.map((sub) => (
                <span key={sub.id} className="badge-navy">{getLocalized(sub.name, locale)}</span>
              ))}
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.slice(0, 32).map((product) => (
              <Link key={product.id} href={`/products/item/${product.slug}`} className="card-premium group block">
                <div className="relative h-40 overflow-hidden bg-surface">
                  <Image src={product.image} alt="" fill className="object-contain p-3 group-hover:scale-105 transition-transform duration-500" sizes="25vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-navy-900 group-hover:text-accent transition-colors line-clamp-2">
                    {getLocalized(product.name, locale)}
                  </h3>
                  {product.specifications.isoVg && (
                    <span className="badge-navy mt-2">ISO VG {product.specifications.isoVg}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
