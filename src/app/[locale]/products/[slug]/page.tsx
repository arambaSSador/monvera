import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CategoryProductsClient } from "@/components/products/CategoryProductsClient";
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
          <p className="mt-4 max-w-2xl whitespace-pre-line text-lg text-white/85">
            {getLocalized(category.description, locale)}
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <CategoryProductsClient
            subcategories={category.subcategories}
            products={products}
          />
        </div>
      </section>
    </>
  );
}
