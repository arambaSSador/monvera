import { notFound } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getProductBySlug, getRelatedProducts, getAllProductSlugs } from "@/data/products";
import { getLocalized } from "@/data/types";
import { generateSEO, generateProductSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { Download, MessageCircle, FileText, Shield, Thermometer, Droplets } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return generateSEO({
    title: product.name,
    description: product.description,
    locale,
    path: `/products/item/${slug}`,
    image: product.image,
    type: "product",
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations({ locale, namespace: "product" });
  const tCta = await getTranslations({ locale, namespace: "cta" });
  const related = getRelatedProducts(product);

  const productSchema = generateProductSchema({
    name: getLocalized(product.name, locale),
    description: getLocalized(product.description, locale),
    image: product.image,
    slug: product.slug,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <section className="pt-32 pb-8 bg-surface">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: getLocalized(product.name, locale) },
            ]}
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-premium">
                <Image
                  src={product.image}
                  alt={getLocalized(product.name, locale)}
                  fill
                  className="object-cover"
                  priority
                  sizes="50vw"
                />
              </div>
              {product.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {product.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                      <Image src={img} alt="" fill className="object-cover" sizes="12vw" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.foodGrade && <span className="badge-accent">Food Grade</span>}
                {product.nsfH1 && <span className="badge-accent">NSF H1</span>}
                {product.synthetic && <span className="badge-navy">Synthetic</span>}
              </div>

              <h1 className="heading-section text-navy-900 mb-4">
                {getLocalized(product.name, locale)}
              </h1>

              <p className="text-navy-600 text-lg leading-relaxed mb-8">
                {getLocalized(product.description, locale)}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {product.specifications.isoVg && (
                  <div className="bg-surface rounded-2xl p-4">
                    <div className="text-navy-500 text-sm">{t("isoVg")}</div>
                    <div className="font-display font-bold text-2xl text-navy-900">{product.specifications.isoVg}</div>
                  </div>
                )}
                {product.specifications.nlgi && (
                  <div className="bg-surface rounded-2xl p-4">
                    <div className="text-navy-500 text-sm">{t("nlgi")}</div>
                    <div className="font-display font-bold text-2xl text-navy-900">{product.specifications.nlgi}</div>
                  </div>
                )}
                <div className="bg-surface rounded-2xl p-4">
                  <div className="text-navy-500 text-sm">{t("temperature")}</div>
                  <div className="font-semibold text-navy-900">{product.specifications.temperature}</div>
                </div>
                <div className="bg-surface rounded-2xl p-4">
                  <div className="text-navy-500 text-sm">{t("baseOil")}</div>
                  <div className="font-semibold text-navy-900">{getLocalized(product.specifications.baseOil, locale)}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={`/quote?product=${product.slug}`}>{tCta("requestQuote")}</Button>
                <a
                  href={generateWhatsAppLink(`Hello, I'm interested in ${getLocalized(product.name, locale)}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <Button href={`/products/compare?products=${product.slug}`} variant="secondary">
                  {t("compare")}
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <ScrollReveal>
              <div className="card-premium p-6">
                <h3 className="font-display font-bold text-lg mb-4">{t("applications")}</h3>
                <ul className="space-y-2">
                  {product.applications.map((app, i) => (
                    <li key={i} className="flex items-center gap-2 text-navy-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {getLocalized(app, locale)}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="card-premium p-6">
                <h3 className="font-display font-bold text-lg mb-4">{t("advantages")}</h3>
                <ul className="space-y-2">
                  {product.advantages.map((adv, i) => (
                    <li key={i} className="flex items-center gap-2 text-navy-600">
                      <Shield className="w-4 h-4 text-accent shrink-0" />
                      {getLocalized(adv, locale)}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="card-premium p-6">
                <h3 className="font-display font-bold text-lg mb-4">{t("downloads")}</h3>
                <div className="space-y-3">
                  <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-surface transition-colors text-left">
                    <FileText className="w-5 h-5 text-accent" />
                    <span className="text-navy-700">{t("technicalSheet")}</span>
                    <Download className="w-4 h-4 ml-auto text-navy-400" />
                  </button>
                  <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-surface transition-colors text-left">
                    <FileText className="w-5 h-5 text-accent" />
                    <span className="text-navy-700">{t("safetySheet")}</span>
                    <Download className="w-4 h-4 ml-auto text-navy-400" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="heading-section text-navy-900 mb-8">{t("relatedProducts")}</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {related.map((p) => (
                  <Link key={p.id} href={`/products/item/${p.slug}`} className="card-premium group block overflow-hidden">
                    <div className="relative h-32 overflow-hidden bg-surface">
                      <Image
                        src={p.image}
                        alt={getLocalized(p.name, locale)}
                        fill
                        className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                        sizes="25vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-navy-900 transition-colors group-hover:text-accent">
                        {getLocalized(p.name, locale)}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
