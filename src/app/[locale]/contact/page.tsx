"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { companyInfo } from "@/data/company";
import { getLocalized } from "@/data/types";
import { generateWhatsAppLink } from "@/lib/utils";
import { Phone, Mail, MessageCircle, Send, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [formType, setFormType] = useState<"consultation" | "offer">("consultation");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: t("title") }]} />
          <h1 className="heading-section text-white mt-4">{t("title")}</h1>
          <p className="text-white/85 text-lg mt-4">{t("subtitle")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {[
                { icon: Phone, label: t("phone"), value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                { icon: Mail, label: t("email"), value: companyInfo.email, href: `mailto:${companyInfo.email}` },
                { icon: MessageCircle, label: t("whatsapp"), value: companyInfo.phone, href: generateWhatsAppLink("Hello MONVERA") },
                { icon: Send, label: t("telegram"), value: companyInfo.telegram, href: `https://t.me/${companyInfo.telegram.replace("@", "")}` },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="card-premium flex items-center gap-4 p-5 hover:border-accent/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-navy-500 text-sm">{label}</div>
                    <div className="font-semibold text-navy-900">{value}</div>
                  </div>
                </a>
              ))}

              <div className="card-premium p-5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-navy-900 mb-1">{t("office")}</div>
                    <p className="text-navy-600 text-sm">{getLocalized(companyInfo.office, locale)}</p>
                    <div className="font-semibold text-navy-900 mt-4 mb-1">{t("warehouse")}</div>
                    <p className="text-navy-600 text-sm">{getLocalized(companyInfo.warehouse, locale)}</p>
                  </div>
                </div>
              </div>

              <div className="card-premium p-5 flex items-center gap-4">
                <Clock className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-semibold text-navy-900">{t("hours")}</div>
                  <p className="text-navy-600 text-sm">{getLocalized(companyInfo.hours, locale)}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="card-premium p-8">
                <div className="flex gap-2 mb-8">
                  <button
                    onClick={() => setFormType("consultation")}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      formType === "consultation" ? "bg-accent text-white" : "bg-surface text-navy-600"
                    }`}
                  >
                    {t("formConsultation")}
                  </button>
                  <button
                    onClick={() => setFormType("offer")}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      formType === "offer" ? "bg-accent text-white" : "bg-surface text-navy-600"
                    }`}
                  >
                    {t("formOffer")}
                  </button>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <h3 className="font-display font-bold text-2xl text-navy-900 mb-2">Thank you!</h3>
                    <p className="text-navy-600">We will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <div>
                      <label className="label-field">Company</label>
                      <input required className="input-field" />
                    </div>
                    <div>
                      <label className="label-field">Contact Person</label>
                      <input required className="input-field" />
                    </div>
                    <div>
                      <label className="label-field">Email</label>
                      <input required type="email" className="input-field" />
                    </div>
                    <div>
                      <label className="label-field">Phone</label>
                      <input required type="tel" className="input-field" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="label-field">Message</label>
                      <textarea rows={4} className="input-field resize-none" />
                    </div>
                    <div className="md:col-span-2">
                      <Button type="submit" className="w-full">Submit Request</Button>
                    </div>
                  </form>
                )}
              </div>

              <div className="mt-8 rounded-3xl overflow-hidden h-64 bg-surface">
                <iframe
                  title="MONVERA Office Location"
                  src={`https://maps.google.com/maps?q=${companyInfo.mapCoords.lat},${companyInfo.mapCoords.lng}&z=15&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
