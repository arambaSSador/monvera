import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { generateSEO } from "@/lib/seo";
import { CTASection } from "@/components/home/HeroSection";
import { Phone, Mail, MessageCircle, Wrench } from "lucide-react";
import { companyInfo } from "@/data/company";
import { generateWhatsAppLink } from "@/lib/utils";
import { Link } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEO({
    title: { en: "Technical Support", ru: "Техническая поддержка", hy: "Technical Support" },
    description: { en: "Expert lubrication engineering support", ru: "Экспертная техническая поддержка", hy: "Support" },
    locale,
    path: "/technical-support",
  });
}

export default async function TechnicalSupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tCta = await getTranslations({ locale, namespace: "cta" });

  const supportOptions = [
    { icon: Phone, title: "Phone Support", desc: "Speak directly with our lubrication engineers", action: companyInfo.phone, href: `tel:${companyInfo.phone}` },
    { icon: Mail, title: "Email Support", desc: "Send technical questions to our engineering team", action: companyInfo.emailTechnical, href: `mailto:${companyInfo.emailTechnical}` },
    { icon: MessageCircle, title: "WhatsApp", desc: "Quick responses via WhatsApp", action: "Chat now", href: generateWhatsAppLink("Technical support request") },
    { icon: Wrench, title: "On-Site Visit", desc: "Schedule an engineer visit to your facility", action: "Request visit", href: "/contact" },
  ];

  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4">
          <Breadcrumbs items={[{ label: tNav("technicalSupport") }]} />
          <h1 className="heading-section text-white mt-4">{tNav("technicalSupport")}</h1>
          <p className="text-white/85 text-lg mt-4 max-w-2xl">
            Our lubrication engineers are ready to help with product selection, troubleshooting, and optimization.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto grid md:grid-cols-2 gap-8">
          {supportOptions.map(({ icon: Icon, title, desc, action, href }) => (
            <a key={title} href={href} className="card-premium p-8 group hover:border-accent/30 transition-colors block">
              <Icon className="w-10 h-10 text-accent mb-4" />
              <h2 className="font-display font-bold text-xl text-navy-900 group-hover:text-accent transition-colors">{title}</h2>
              <p className="text-navy-600 mt-2">{desc}</p>
              <span className="text-accent font-semibold mt-4 inline-block">{action} →</span>
            </a>
          ))}
        </div>
        <div className="text-center mt-12 flex flex-wrap justify-center gap-4">
          <Button href="/lubricant-finder">{tCta("findLubricant")}</Button>
          <Link href="/technical-library" className="btn-secondary">Technical Library</Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
