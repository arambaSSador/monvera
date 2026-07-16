import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { downloads, companyInfo } from "@/data/company";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";
import { generateWhatsAppLink } from "@/lib/utils";
import { Download, FileText, BookOpen, MessageCircle } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEO({
    title: { en: "Downloads", ru: "Загрузки", hy: "Nerberner" },
    description: {
      en: "Catalogues, TDS, MSDS, certificates",
      ru: "Каталоги, паспорта, сертификаты",
      hy: "Catalogues and documents",
    },
    locale,
    path: "/downloads",
  });
}

export default async function DownloadsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "nav" });

  const categories = [
    {
      key: "catalogue",
      icon: BookOpen,
      label: locale === "ru" ? "PDF-каталоги" : "PDF Catalogues",
    },
    {
      key: "guide",
      icon: FileText,
      label: locale === "ru" ? "Технические руководства" : "Technical Guides",
    },
    {
      key: "technical",
      icon: FileText,
      label: locale === "ru" ? "Технические данные" : "Technical Data",
    },
    {
      key: "profile",
      icon: FileText,
      label: locale === "ru" ? "Профиль компании" : "Company Profile",
    },
  ];

  const hint =
    locale === "ru"
      ? "PDF пока высылаем по запросу в WhatsApp. Нажмите карточку — откроется чат с готовым сообщением."
      : "PDFs are sent on request via WhatsApp. Click a card to open a chat with a ready message.";

  return (
    <>
      <section className="bg-navy-900 pt-32 pb-12 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: tNav("downloads") }]} />
          <h1 className="heading-section mt-4 text-white">{tNav("downloads")}</h1>
          <p className="mt-4 max-w-2xl text-white/75">{hint}</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto space-y-12">
          {categories.map(({ key, icon: Icon, label }) => {
            const items = downloads.filter((d) => d.type === key);
            if (items.length === 0) return null;
            return (
              <div key={key}>
                <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-navy-900">
                  <Icon className="h-6 w-6 text-accent" />
                  {label}
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((doc) => {
                    const name = getLocalized(doc.name, locale);
                    const hasFile = Boolean(doc.file);
                    const waMessage =
                      locale === "ru"
                        ? `Здравствуйте! Пришлите, пожалуйста, документ: ${name}.`
                        : `Hello! Please send me this document: ${name}.`;
                    const href = hasFile
                      ? doc.file
                      : generateWhatsAppLink(waMessage);

                    return (
                      <a
                        key={doc.id}
                        href={href}
                        {...(hasFile
                          ? { download: true }
                          : { target: "_blank", rel: "noopener noreferrer" })}
                        className="card-premium group flex w-full items-center justify-between p-5 text-left hover:border-accent/30"
                      >
                        <div>
                          <h3 className="font-semibold text-navy-900 transition-colors group-hover:text-accent">
                            {name}
                          </h3>
                          <p className="mt-1 text-sm text-navy-400">
                            {hasFile
                              ? doc.size
                              : locale === "ru"
                                ? "Запросить в WhatsApp"
                                : "Request via WhatsApp"}
                          </p>
                        </div>
                        {hasFile ? (
                          <Download className="h-5 w-5 shrink-0 text-accent" />
                        ) : (
                          <MessageCircle className="h-5 w-5 shrink-0 text-accent" />
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="rounded-3xl border border-navy-100 bg-surface p-6 sm:p-8">
            <p className="font-semibold text-navy-900">
              {locale === "ru" ? "Нужен другой документ?" : "Need another document?"}
            </p>
            <p className="mt-2 text-sm text-navy-500">
              {locale === "ru"
                ? `Напишите на ${companyInfo.email} или в WhatsApp — пришлём TDS, MSDS или каталог.`
                : `Email ${companyInfo.email} or WhatsApp — we will send TDS, MSDS or catalogues.`}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={generateWhatsAppLink(
                  locale === "ru"
                    ? "Здравствуйте! Нужен каталог / документ COGELSA."
                    : "Hello! I need a COGELSA catalogue / document."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a href={`mailto:${companyInfo.email}`} className="btn-secondary">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
