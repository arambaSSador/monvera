import { Suspense } from "react";
import { ProductsPageClient } from "@/components/products/ProductsPageClient";
import { generateSEO } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEO({
    title: { hy: "Արտadranք", ru: "Продукция", en: "Products" },
    description: {
      hy: "500+ COGELSA արդyունabерakan արտadranք",
      ru: "500+ промышленных продуктов COGELSA",
      en: "500+ COGELSA industrial lubricant products",
    },
    locale,
    path: "/products",
  });
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center">Loading...</div>}>
      <ProductsPageClient />
    </Suspense>
  );
}
