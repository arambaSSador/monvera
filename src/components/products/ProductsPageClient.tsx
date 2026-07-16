"use client";

import { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { products, filterProducts, searchProducts } from "@/data/products";
import { productCategories } from "@/data/categories";
import { industries } from "@/data/industries";
import { getLocalized } from "@/data/types";
import { Filter, X, Download, FileText } from "lucide-react";
import Image from "next/image";

export function ProductsPageClient() {
  const t = useTranslations("sections");
  const tFilters = useTranslations("filters");
  const tCta = useTranslations("cta");
  const tProduct = useTranslations("product");
  const locale = useLocale();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [filters, setFilters] = useState({
    category: "",
    industry: "",
    foodGrade: undefined as boolean | undefined,
    synthetic: undefined as boolean | undefined,
    isoVg: "",
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    if (searchQuery) return searchProducts(searchQuery);
    return filterProducts({
      category: filters.category || undefined,
      industry: filters.industry || undefined,
      foodGrade: filters.foodGrade,
      synthetic: filters.synthetic,
      isoVg: filters.isoVg || undefined,
    });
  }, [filters, searchQuery]);

  const clearFilters = () => {
    setFilters({ category: "", industry: "", foodGrade: undefined, synthetic: undefined, isoVg: "" });
  };

  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: t("products") }]} />
          <h1 className="heading-section text-white mt-4">{t("products")}</h1>
          <p className="text-white/85 text-lg mt-4 max-w-2xl">{t("productsSubtitle")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {productCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products/${cat.slug}`}
                className="card-premium p-4 text-center hover:border-accent/30"
              >
                <h3 className="font-semibold text-navy-900">{getLocalized(cat.name, locale)}</h3>
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between mb-8">
            <p className="text-navy-600">
              {filteredProducts.length} {tFilters("results")}
            </p>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-navy-100 hover:border-accent transition-colors"
            >
              <Filter className="w-4 h-4" />
              {tFilters("title")}
            </button>
          </div>

          {showFilters && (
            <div className="bg-surface rounded-3xl p-6 mb-8 grid md:grid-cols-4 gap-4">
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="input-field"
              >
                <option value="">{tFilters("type")}</option>
                {productCategories.map((c) => (
                  <option key={c.id} value={c.slug}>{getLocalized(c.name, locale)}</option>
                ))}
              </select>
              <select
                value={filters.industry}
                onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                className="input-field"
              >
                <option value="">{tFilters("industry")}</option>
                {industries.map((i) => (
                  <option key={i.id} value={i.slug}>{getLocalized(i.name, locale)}</option>
                ))}
              </select>
              <select
                value={filters.isoVg}
                onChange={(e) => setFilters({ ...filters, isoVg: e.target.value })}
                className="input-field"
              >
                <option value="">ISO VG</option>
                {["10", "22", "32", "46", "68", "100", "150", "220", "320"].map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilters({ ...filters, foodGrade: filters.foodGrade ? undefined : true })}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    filters.foodGrade ? "bg-accent text-white" : "bg-white border border-navy-100"
                  }`}
                >
                  {tFilters("foodGrade")}
                </button>
                <button onClick={clearFilters} className="px-4 py-2 text-sm text-navy-500 hover:text-accent">
                  {tFilters("clear")}
                </button>
              </div>
            </div>
          )}

          <div className="grid items-stretch md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.slice(0, 48).map((product, i) => (
              <ScrollReveal key={product.id} delay={(i % 8) * 50} className="h-full">
                <div className="card-premium group flex h-full flex-col overflow-hidden">
                  <Link href={`/products/item/${product.slug}`} className="flex flex-1 flex-col">
                    <div className="relative h-44 shrink-0 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={getLocalized(product.name, locale)}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="25vw"
                      />
                      {product.foodGrade && (
                        <span className="badge-accent absolute left-3 top-3">NSF H1</span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="line-clamp-2 min-h-[3.25rem] font-semibold text-navy-900 transition-colors group-hover:text-accent">
                        {getLocalized(product.name, locale)}
                      </h3>
                      <p className="mt-2 line-clamp-2 min-h-[2.75rem] text-sm text-navy-500">
                        {getLocalized(product.shortDescription, locale)}
                      </p>
                      <div className="mt-3 min-h-7">
                        {product.specifications.isoVg ? (
                          <span className="badge-navy">ISO VG {product.specifications.isoVg}</span>
                        ) : null}
                      </div>
                    </div>
                  </Link>
                  <div className="mt-auto px-5 pb-5">
                    <Link
                      href={`/quote?product=${product.slug}`}
                      className="btn-primary block w-full !px-4 !py-2 text-center !text-xs"
                    >
                      {tCta("requestQuote")}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
