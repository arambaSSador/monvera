"use client";

import { useMemo, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  ImagePlus,
  Package,
  Search,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { products } from "@/data/products";
import { getLocalized } from "@/data/types";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";

type StepId = 0 | 1 | 2;

const STEPS = [
  { id: 0 as const, icon: Package },
  { id: 1 as const, icon: Upload },
  { id: 2 as const, icon: Sparkles },
];

function MagneticButton({
  children,
  className,
  disabled,
  type = "button",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? undefined : { y: -2, scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-7 py-3.5 text-sm font-semibold",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-45 disabled:shadow-none",
        className
      )}
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </motion.button>
  );
}

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="group block space-y-2">
      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-navy-500 transition-colors group-focus-within:text-accent">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      {children}
    </label>
  );
}

export default function QuotePageClient() {
  const t = useTranslations("quote");
  const locale = useLocale();
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get("product");

  const [step, setStep] = useState<StepId>(0);
  const [direction, setDirection] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>(
    preselectedProduct ? [preselectedProduct] : []
  );
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  });
  const [files, setFiles] = useState<{
    photos: File[];
    schedule: File | null;
    list: File | null;
  }>({
    photos: [],
    schedule: null,
    list: null,
  });
  const [dragOver, setDragOver] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const photosRef = useRef<HTMLInputElement>(null);
  const scheduleRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLInputElement>(null);

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.slice(0, 24);
    return products
      .filter((p) => {
        const name = getLocalized(p.name, locale).toLowerCase();
        const tags = p.tags?.join(" ").toLowerCase() ?? "";
        return name.includes(q) || tags.includes(q) || p.category.includes(q);
      })
      .slice(0, 30);
  }, [query, locale]);

  const goTo = (next: StepId) => {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const toggleProduct = (slug: string) => {
    setSelectedProducts((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step !== 2) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  const canContinue =
    step === 2
      ? Boolean(form.companyName && form.contactPerson && form.email && form.phone)
      : true;

  if (submitted) {
    return (
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,93,4,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(9,21,38,0.08),_transparent_50%)]" />
        <div className="container-wide relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-accent/10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 16 }}
            >
              <CheckCircle2 className="h-12 w-12 text-accent" />
            </motion.div>
          </motion.div>
          <motion.h1
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="heading-section text-navy-900"
          >
            {t("successTitle")}
          </motion.h1>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-4 max-w-lg text-lg text-navy-600"
          >
            {t("successBody")}
          </motion.p>
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <Link href="/" className="btn-primary group">
              {t("backHome")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  const stepTitle =
    step === 0 ? t("stepProducts") : step === 1 ? t("stepDocuments") : t("stepContacts");
  const stepHint =
    step === 0 ? t("stepProductsHint") : step === 1 ? t("stepDocumentsHint") : t("stepContactsHint");

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
  };

  const uploadZones = [
    {
      key: "photos" as const,
      label: t("uploadPhotos"),
      hint: t("uploadPhotosHint"),
      icon: ImagePlus,
      ref: photosRef,
      multiple: true,
      value: files.photos,
    },
    {
      key: "schedule" as const,
      label: t("uploadSchedule"),
      hint: t("uploadScheduleHint"),
      icon: FileSpreadsheet,
      ref: scheduleRef,
      multiple: false,
      value: files.schedule ? [files.schedule] : [],
    },
    {
      key: "list" as const,
      label: t("uploadList"),
      hint: t("uploadListHint"),
      icon: FileText,
      ref: listRef,
      multiple: false,
      value: files.list ? [files.list] : [],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6f7fa]">
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-64 h-96 w-96 rounded-full bg-navy-900/10 blur-3xl" />

      <section className="relative pt-28 pb-8 sm:pt-32">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: t("title") }]} />
          <div className="mt-6 max-w-3xl">
            <p className="eyebrow">{t("eyebrow")}</p>
            <h1 className="heading-section mt-3 text-navy-900 text-balance">{t("title")}</h1>
            <p className="mt-4 max-w-2xl text-lg text-navy-600">{t("subtitle")}</p>
          </div>

          {/* Progress */}
          <div className="mt-10 max-w-3xl">
            <div className="flex items-center gap-2 sm:gap-3">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                const active = step === s.id;
                const done = step > s.id;
                return (
                  <div key={s.id} className="flex flex-1 items-center gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (done || active) goTo(s.id);
                      }}
                      className={cn(
                        "group flex flex-1 items-center gap-3 rounded-2xl border px-3 py-3 transition-all sm:px-4",
                        active && "border-accent/40 bg-white shadow-[0_12px_40px_rgba(9,21,38,0.08)]",
                        done && "border-navy-100 bg-white/80",
                        !active && !done && "border-transparent bg-white/40"
                      )}
                    >
                      <motion.span
                        animate={{
                          scale: active ? 1.05 : 1,
                          backgroundColor: done || active ? "#e85d04" : "#e8ecf1",
                          color: done || active ? "#ffffff" : "#5a6b7d",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 22 }}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      >
                        {done ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                      </motion.span>
                      <span className="hidden min-w-0 text-left sm:block">
                        <span
                          className={cn(
                            "block truncate text-sm font-semibold",
                            active ? "text-navy-900" : "text-navy-600"
                          )}
                        >
                          {s.id === 0
                            ? t("stepProducts")
                            : s.id === 1
                              ? t("stepDocuments")
                              : t("stepContacts")}
                        </span>
                        <span className="block text-xs text-navy-400">
                          {t("stepLabel", { n: i + 1 })}
                        </span>
                      </span>
                    </button>
                    {i < STEPS.length - 1 ? (
                      <div className="hidden h-px w-6 shrink-0 bg-navy-100 sm:block lg:w-10" />
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-navy-100/80">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
                animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                transition={{ type: "spring", stiffness: 180, damping: 24 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-28 pt-2">
        <div className="container-wide mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/90 p-5 shadow-[0_20px_60px_rgba(9,21,38,0.08)] backdrop-blur-xl sm:p-8 md:p-10">
              <div className="mb-8">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
                  {stepTitle}
                </h2>
                <p className="mt-2 text-navy-500">{stepHint}</p>
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  {step === 0 && (
                    <div className="space-y-5">
                      <div className="relative">
                        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                        <input
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder={t("searchPlaceholder")}
                          className="input-field !rounded-2xl !py-4 !pl-11"
                        />
                      </div>

                      {selectedProducts.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {selectedProducts.map((slug) => {
                            const product = products.find((p) => p.slug === slug);
                            if (!product) return null;
                            return (
                              <motion.button
                                key={slug}
                                type="button"
                                layout
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                onClick={() => toggleProduct(slug)}
                                className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-white"
                              >
                                {getLocalized(product.name, locale)}
                                <X className="h-3.5 w-3.5" />
                              </motion.button>
                            );
                          })}
                        </div>
                      )}

                      <div className="grid max-h-[420px] gap-2 overflow-y-auto pr-1 sm:grid-cols-2">
                        {filteredProducts.map((p) => {
                          const selected = selectedProducts.includes(p.slug);
                          return (
                            <motion.button
                              key={p.id}
                              type="button"
                              onClick={() => toggleProduct(p.slug)}
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.985 }}
                              className={cn(
                                "group flex items-start gap-3 rounded-2xl border p-4 text-left transition-all",
                                selected
                                  ? "border-accent bg-accent/[0.06] shadow-[0_10px_30px_rgba(232,93,4,0.12)]"
                                  : "border-navy-50 bg-surface/50 hover:border-navy-100 hover:bg-white"
                              )}
                            >
                              <span
                                className={cn(
                                  "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition-all",
                                  selected
                                    ? "border-accent bg-accent text-white"
                                    : "border-navy-200 bg-white text-transparent group-hover:border-accent/50"
                                )}
                              >
                                <Check className="h-3.5 w-3.5" />
                              </span>
                              <span className="min-w-0">
                                <span className="block font-medium text-navy-900">
                                  {getLocalized(p.name, locale)}
                                </span>
                                <span className="mt-1 block text-xs text-navy-500 line-clamp-2">
                                  {getLocalized(p.shortDescription, locale)}
                                </span>
                              </span>
                            </motion.button>
                          );
                        })}
                      </div>

                      <p className="text-sm text-navy-400">{t("productsOptional")}</p>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="grid gap-4 md:grid-cols-3">
                      {uploadZones.map((zone) => {
                        const Icon = zone.icon;
                        const hasFiles = zone.value.length > 0;
                        return (
                          <motion.button
                            key={zone.key}
                            type="button"
                            onClick={() => zone.ref.current?.click()}
                            onDragOver={(e) => {
                              e.preventDefault();
                              setDragOver(zone.key);
                            }}
                            onDragLeave={() => setDragOver(null)}
                            onDrop={(e) => {
                              e.preventDefault();
                              setDragOver(null);
                              const dropped = Array.from(e.dataTransfer.files);
                              if (!dropped.length) return;
                              if (zone.multiple) {
                                setFiles((f) => ({ ...f, photos: [...f.photos, ...dropped] }));
                              } else if (zone.key === "schedule") {
                                setFiles((f) => ({ ...f, schedule: dropped[0] }));
                              } else {
                                setFiles((f) => ({ ...f, list: dropped[0] }));
                              }
                            }}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            className={cn(
                              "relative flex min-h-[200px] flex-col items-center justify-center rounded-3xl border-2 border-dashed px-4 py-8 text-center transition-all",
                              dragOver === zone.key
                                ? "border-accent bg-accent/5"
                                : hasFiles
                                  ? "border-accent/50 bg-accent/[0.04]"
                                  : "border-navy-100 bg-surface/40 hover:border-accent/40 hover:bg-white"
                            )}
                          >
                            <input
                              ref={zone.ref}
                              type="file"
                              multiple={zone.multiple}
                              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx"
                              className="hidden"
                              onChange={(e) => {
                                const fileList = e.target.files;
                                if (!fileList) return;
                                if (zone.multiple) {
                                  setFiles((f) => ({
                                    ...f,
                                    photos: [...f.photos, ...Array.from(fileList)],
                                  }));
                                } else if (zone.key === "schedule") {
                                  setFiles((f) => ({ ...f, schedule: fileList[0] }));
                                } else {
                                  setFiles((f) => ({ ...f, list: fileList[0] }));
                                }
                              }}
                            />
                            <span
                              className={cn(
                                "mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors",
                                hasFiles ? "bg-accent text-white" : "bg-white text-navy-500 shadow-sm"
                              )}
                            >
                              <Icon className="h-6 w-6" />
                            </span>
                            <span className="font-semibold text-navy-900">{zone.label}</span>
                            <span className="mt-2 text-xs leading-relaxed text-navy-500">
                              {hasFiles
                                ? zone.value.map((f) => f.name).join(", ")
                                : zone.hint}
                            </span>
                            {hasFiles ? (
                              <span
                                role="button"
                                tabIndex={0}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (zone.key === "photos") {
                                    setFiles((f) => ({ ...f, photos: [] }));
                                  } else if (zone.key === "schedule") {
                                    setFiles((f) => ({ ...f, schedule: null }));
                                  } else {
                                    setFiles((f) => ({ ...f, list: null }));
                                  }
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") e.currentTarget.click();
                                }}
                                className="mt-4 rounded-full bg-navy-900/5 px-3 py-1 text-xs font-medium text-navy-600 hover:bg-navy-900/10"
                              >
                                {t("clearFiles")}
                              </span>
                            ) : null}
                          </motion.button>
                        );
                      })}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label={t("companyName")} required>
                        <input
                          required
                          className="input-field"
                          value={form.companyName}
                          onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                          autoComplete="organization"
                        />
                      </Field>
                      <Field label={t("contactPerson")} required>
                        <input
                          required
                          className="input-field"
                          value={form.contactPerson}
                          onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                          autoComplete="name"
                        />
                      </Field>
                      <Field label={t("email")} required>
                        <input
                          required
                          type="email"
                          className="input-field"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          autoComplete="email"
                        />
                      </Field>
                      <Field label={t("phone")} required>
                        <input
                          required
                          type="tel"
                          className="input-field"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          autoComplete="tel"
                        />
                      </Field>
                      <div className="md:col-span-2">
                        <Field label={t("message")}>
                          <textarea
                            rows={4}
                            className="input-field resize-none"
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder={t("messagePlaceholder")}
                          />
                        </Field>
                      </div>
                      <div className="md:col-span-2 rounded-2xl border border-navy-50 bg-surface/60 px-5 py-4 text-sm text-navy-600">
                        {t("responseTime")}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sticky action bar */}
            <div className="sticky bottom-4 z-20 mt-6">
              <div className="flex items-center justify-between gap-3 rounded-3xl border border-white/80 bg-white/95 p-3 shadow-[0_16px_50px_rgba(9,21,38,0.14)] backdrop-blur-xl sm:p-4">
                <MagneticButton
                  type="button"
                  onClick={() => goTo((step - 1) as StepId)}
                  disabled={step === 0}
                  className="border border-navy-100 bg-white text-navy-800 hover:border-navy-200"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">{t("back")}</span>
                </MagneticButton>

                <div className="hidden text-center text-xs text-navy-400 sm:block">
                  {t("stepOf", { current: step + 1, total: STEPS.length })}
                  {selectedProducts.length > 0 ? (
                    <span className="ml-2 text-accent">· {selectedProducts.length}</span>
                  ) : null}
                </div>

                {step < 2 ? (
                  <MagneticButton
                    type="button"
                    onClick={() => goTo((step + 1) as StepId)}
                    className="group bg-accent text-white shadow-glow hover:bg-accent-light"
                  >
                    {t("continue")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </MagneticButton>
                ) : (
                  <MagneticButton
                    type="submit"
                    disabled={!canContinue || submitting}
                    className="group min-w-[160px] bg-accent text-white shadow-glow hover:bg-accent-light"
                  >
                    {submitting ? (
                      <motion.span
                        className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                      />
                    ) : (
                      <>
                        {t("submit")}
                        <Sparkles className="h-4 w-4" />
                      </>
                    )}
                  </MagneticButton>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
