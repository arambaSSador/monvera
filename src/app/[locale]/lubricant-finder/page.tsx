"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { industries } from "@/data/industries";
import { equipmentList } from "@/data/equipment";
import { recommendProducts } from "@/data/products";
import { getLocalized } from "@/data/types";
import { Search, ChevronRight, CheckCircle2 } from "lucide-react";

const steps = ["industry", "equipment", "temperature", "foodContact", "results"] as const;

export default function LubricantFinderPage() {
  const t = useTranslations("finder");
  const tCta = useTranslations("cta");
  const locale = useLocale();
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({
    industry: "",
    equipment: "",
    temperature: "",
    foodContact: false,
    load: "",
    speed: "",
    humidity: "",
    currentLubricant: "",
  });

  const recommendations = step === 4
    ? recommendProducts({
        industry: selections.industry,
        equipment: selections.equipment,
        foodContact: selections.foodContact,
      })
    : [];

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: t("title") }]} />
          <h1 className="heading-section text-white mt-4">{t("title")}</h1>
          <p className="text-white/85 text-lg mt-4 max-w-2xl">{t("subtitle")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-12 max-w-full overflow-hidden gap-1 sm:gap-2">
            {steps.slice(0, 4).map((s, i) => (
              <div key={s} className="flex items-center min-w-0">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                    i <= step ? "bg-accent text-white" : "bg-surface text-navy-400"
                  }`}
                >
                  {i < step ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                </div>
                {i < 3 && (
                  <div className={`w-8 xs:w-12 sm:w-24 h-0.5 mx-1 sm:mx-2 shrink ${i < step ? "bg-accent" : "bg-navy-100"}`} />
                )}
              </div>
            ))}
          </div>

          <div className="card-premium p-8 lg:p-12">
            {step === 0 && (
              <div>
                <h2 className="font-display font-bold text-2xl text-navy-900 mb-6">{t("industry")}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {industries.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => {
                        setSelections({ ...selections, industry: ind.slug });
                        nextStep();
                      }}
                      className={`p-4 rounded-2xl border-2 text-left transition-all hover:border-accent ${
                        selections.industry === ind.slug ? "border-accent bg-accent/5" : "border-navy-100"
                      }`}
                    >
                      {getLocalized(ind.name, locale)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="font-display font-bold text-2xl text-navy-900 mb-6">{t("equipment")}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {equipmentList.map((eq) => (
                    <button
                      key={eq.id}
                      onClick={() => {
                        setSelections({ ...selections, equipment: eq.slug });
                        nextStep();
                      }}
                      className={`p-4 rounded-2xl border-2 text-left transition-all hover:border-accent ${
                        selections.equipment === eq.slug ? "border-accent bg-accent/5" : "border-navy-100"
                      }`}
                    >
                      {getLocalized(eq.name, locale)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display font-bold text-2xl text-navy-900 mb-6">{t("temperature")}</h2>
                <div className="grid grid-cols-2 gap-3">
                  {["-40°C to +80°C", "-20°C to +120°C", "-10°C to +150°C", "+50°C to +250°C"].map((temp) => (
                    <button
                      key={temp}
                      onClick={() => {
                        setSelections({ ...selections, temperature: temp });
                        nextStep();
                      }}
                      className="p-4 rounded-2xl border-2 border-navy-100 hover:border-accent transition-all text-left"
                    >
                      {temp}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-display font-bold text-2xl text-navy-900 mb-6">{t("foodContact")}</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      setSelections({ ...selections, foodContact: true });
                      nextStep();
                    }}
                    className="p-6 rounded-2xl border-2 border-navy-100 hover:border-accent transition-all"
                  >
                    Yes — Food Grade Required
                  </button>
                  <button
                    onClick={() => {
                      setSelections({ ...selections, foodContact: false });
                      nextStep();
                    }}
                    className="p-6 rounded-2xl border-2 border-navy-100 hover:border-accent transition-all"
                  >
                    No — Standard Industrial
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="font-display font-bold text-2xl text-navy-900 mb-6">{t("results")}</h2>
                {recommendations.length > 0 ? (
                  <div className="space-y-4">
                    {recommendations.map((product, i) => (
                      <ScrollReveal key={product.id} delay={i * 100}>
                        <div className="flex items-center justify-between p-5 rounded-2xl bg-surface hover:bg-accent/5 transition-colors">
                          <div>
                            <h3 className="font-semibold text-navy-900">
                              {getLocalized(product.name, locale)}
                            </h3>
                            <p className="text-navy-500 text-sm mt-1">
                              {getLocalized(product.shortDescription, locale)}
                            </p>
                          </div>
                          <Link href={`/products/item/${product.slug}`} className="btn-primary !py-2 !px-4 !text-sm">
                            View <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                ) : (
                  <p className="text-navy-600">No exact matches. Contact our engineers for custom recommendation.</p>
                )}
                <div className="flex gap-4 mt-8">
                  <Button href="/quote">{tCta("requestQuote")}</Button>
                  <Button href="/contact" variant="secondary">{tCta("contactExpert")}</Button>
                </div>
              </div>
            )}

            {step < 4 && step > 0 && (
              <button onClick={prevStep} className="mt-6 text-navy-500 hover:text-accent transition-colors">
                ← Back
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
