import { HeroSection, CTASection } from "@/components/home/HeroSection";
import {
  IndustriesSection,
  ProductsSection,
  ServicesSection,
  WhyUsSection,
  CertificatesSection,
  BlogSection,
  CaseStudiesSection,
} from "@/components/home/Sections";
import { generateSEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateSEO({
    title: {
      hy: "MONVERA LLC — Official COGELSA Distributor",
      ru: "MONVERA LLC — Официальный дистрибьютор COGELSA",
      en: "MONVERA LLC — Official COGELSA Distributor",
    },
    description: {
      hy: "Industrial lubrication solutions in Armenia. Official COGELSA distributor. 500+ products, technical support.",
      ru: "Промышленные смазочные решения в Армении. Официальный дистрибьютор COGELSA. 500+ продуктов, техническая поддержка.",
      en: "Industrial lubrication solutions in Armenia. Official COGELSA distributor. 500+ products, technical support.",
    },
    locale,
    path: "",
    keywords: {
      hy: "industrial lubricants Armenia, COGELSA, hydraulic oil, food grade",
      ru: "промышленные смазки Армения, COGELSA, гидравлическое масло",
      en: "industrial lubricants Armenia, COGELSA, hydraulic oil, food grade",
    },
  });
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IndustriesSection />
      <ProductsSection />
      <ServicesSection />
      <WhyUsSection />
      <CertificatesSection />
      <CaseStudiesSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
