import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { generateSEO } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEO({
    title: { en: "Privacy Policy", ru: "Политика конфиденциальности", hy: "Privacy Policy" },
    description: { en: "MONVERA LLC privacy policy", ru: "Политика конфиденциальности MONVERA", hy: "Privacy" },
    locale,
    path: "/privacy",
  });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "footer" });

  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4">
          <Breadcrumbs items={[{ label: t("privacy") }]} />
          <h1 className="heading-section text-white mt-4">{t("privacy")}</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto max-w-3xl prose-monvera">
          <p>MONVERA LLC respects your privacy and is committed to protecting your personal data.</p>
          <h2>Data Collection</h2>
          <p>We collect information you provide through contact forms, quotation requests, and newsletter subscriptions.</p>
          <h2>Data Usage</h2>
          <p>Your data is used solely to respond to inquiries, process orders, and improve our services.</p>
          <h2>Contact</h2>
          <p>For privacy-related questions, contact us at info@monvera.am</p>
        </div>
      </section>
    </>
  );
}
