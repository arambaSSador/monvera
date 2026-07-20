"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { getLocalized, type LocalizedString, type Product } from "@/data/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Subcategory = {
  id: string;
  slug: string;
  name: LocalizedString;
};

type CategoryProduct = Pick<
  Product,
  "id" | "slug" | "name" | "image" | "subcategory" | "specifications"
>;

interface CategoryProductsClientProps {
  subcategories: Subcategory[];
  products: CategoryProduct[];
}

export function CategoryProductsClient({
  subcategories,
  products,
}: CategoryProductsClientProps) {
  const locale = useLocale();
  const tFilters = useTranslations("filters");
  const tCommon = useTranslations("common");
  const [selected, setSelected] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    if (!selected) return products;
    return products.filter((p) => p.subcategory === selected);
  }, [products, selected]);

  const chipClass = (active: boolean) =>
    cn(
      "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
      active
        ? "bg-navy-900 text-white"
        : "bg-navy-50 text-navy-700 hover:bg-navy-100"
    );

  return (
    <>
      {subcategories.length > 0 && (
        <div className="mb-10 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setSelected(null)}
            className={chipClass(selected === null)}
            aria-pressed={selected === null}
          >
            {tFilters("all")}
          </button>
          {subcategories.map((sub) => (
            <button
              key={sub.id}
              type="button"
              onClick={() => setSelected(sub.slug)}
              className={chipClass(selected === sub.slug)}
              aria-pressed={selected === sub.slug}
            >
              {getLocalized(sub.name, locale)}
            </button>
          ))}
        </div>
      )}

      {filteredProducts.length === 0 ? (
        <p className="py-12 text-center text-navy-500">{tCommon("noResults")}</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/item/${product.slug}`}
              className="card-premium group block"
            >
              <div className="relative h-40 overflow-hidden bg-surface">
                <Image
                  src={product.image}
                  alt=""
                  fill
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  sizes="25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="line-clamp-2 font-semibold text-navy-900 transition-colors group-hover:text-accent">
                  {getLocalized(product.name, locale)}
                </h3>
                {product.specifications.isoVg && (
                  <span className="badge-navy mt-2">ISO VG {product.specifications.isoVg}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
