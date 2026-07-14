import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { certificates } from "@/data/content";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";
import { Award } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEO({
    title: { en: "Certificates", ru: "Сертификаты", hy: "Վկայագրեր" },
    description: {
      en: "ISO 9001, ISO 14001, NSF H1, Halal, Kosher certifications",
      ru: "Сертификаты качества COGELSA",
      hy: "Quality certificates",
    },
    locale,
    path: "/certificates",
  });
}

export default async function CertificatesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sections" });

  return (
    <>
      <section className="bg-navy-900 pb-12 pt-32 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: t("certificates") }]} />
          <h1 className="heading-section mt-4 text-white">{t("certificates")}</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <div key={cert.id} className="card-premium p-8 text-center">
                <div className="relative mx-auto mb-6 h-24 w-24 overflow-hidden rounded-2xl">
                  <Image
                    src={cert.image}
                    alt={getLocalized(cert.name, locale)}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h2 className="font-display text-2xl font-bold text-navy-900">
                  {getLocalized(cert.name, locale)}
                </h2>
                <p className="mt-3 text-navy-600">
                  {getLocalized(cert.description, locale)}
                </p>
                <p className="mt-2 text-sm text-navy-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "European Manufacturing", desc: "All COGELSA products manufactured in Spain with strict quality control" },
              { title: "Quality Control", desc: "Every batch tested in COGELSA research laboratory" },
              { title: "Innovation", desc: "100+ years of R&D in industrial lubrication technology" },
            ].map((item) => (
              <div key={item.title} className="bg-surface rounded-3xl p-8">
                <Award className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-display font-bold text-lg text-navy-900">{item.title}</h3>
                <p className="text-navy-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
