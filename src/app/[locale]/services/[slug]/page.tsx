import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { getServiceBySlug, services } from "@/data/content";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";
import { CTASection } from "@/components/home/HeroSection";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return generateSEO({ title: service.name, description: service.description, locale, path: `/services/${slug}` });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const tCta = await getTranslations({ locale, namespace: "cta" });

  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: getLocalized(service.name, locale) }]} />
          <h1 className="heading-section text-white mt-4">{getLocalized(service.name, locale)}</h1>
          <p className="text-white/85 text-lg mt-4 max-w-2xl">{getLocalized(service.description, locale)}</p>
          <Button href="/contact" className="mt-8">{tCta("consultation")}</Button>
        </div>
      </section>
      <CTASection />
    </>
  );
}
