"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useLocale } from "next-intl";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { getProductBySlug } from "@/data/products";
import { getLocalized } from "@/data/types";
import { Link } from "@/i18n/routing";

function CompareContent() {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const slugs = (searchParams.get("products") || "").split(",").filter(Boolean);
  const products = slugs.map((s) => getProductBySlug(s)).filter(Boolean);

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-navy-600 mb-6">Select products to compare from the product pages.</p>
        <Button href="/products">Browse Products</Button>
      </div>
    );
  }

  const rows = [
    { label: "ISO VG", get: (p: NonNullable<typeof products[0]>) => p.specifications.isoVg || "—" },
    { label: "NLGI", get: (p: NonNullable<typeof products[0]>) => p.specifications.nlgi || "—" },
    { label: "Base Oil", get: (p: NonNullable<typeof products[0]>) => getLocalized(p.specifications.baseOil, locale) },
    { label: "Temperature", get: (p: NonNullable<typeof products[0]>) => p.specifications.temperature },
    { label: "Food Grade", get: (p: NonNullable<typeof products[0]>) => p.foodGrade ? "Yes" : "No" },
    { label: "Synthetic", get: (p: NonNullable<typeof products[0]>) => p.synthetic ? "Yes" : "No" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-navy-100">
            <th className="text-left p-4 text-navy-500 font-medium">Specification</th>
            {products.map((p) => (
              <th key={p!.id} className="text-left p-4">
                <Link href={`/products/item/${p!.slug}`} className="font-semibold text-navy-900 hover:text-accent">
                  {getLocalized(p!.name, locale)}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-navy-50">
              <td className="p-4 font-medium text-navy-700">{row.label}</td>
              {products.map((p) => (
                <td key={p!.id} className="p-4 text-navy-600">{row.get(p!)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ComparePage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4">
          <Breadcrumbs items={[{ label: "Product Comparison" }]} />
          <h1 className="heading-section text-white mt-4">Product Comparison</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <CompareContent />
          </Suspense>
        </div>
      </section>
    </>
  );
}
