"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { generateWhatsAppLink, cn } from "@/lib/utils";
import {
  MessageCircle,
  X,
  FileText,
  HelpCircle,
  Search,
  Download,
  Wrench,
} from "lucide-react";

export function WhatsAppButton() {
  const t = useTranslations("cta");
  const [open, setOpen] = useState(false);

  const actions = [
    {
      icon: FileText,
      label: t("requestQuote"),
      message:
        "Здравствуйте! Хочу запросить коммерческое предложение по продукции COGELSA.",
    },
    {
      icon: HelpCircle,
      label: "Need Help",
      message:
        "Здравствуйте! Нужна техническая помощь по подбору смазочных материалов.",
    },
    {
      icon: Search,
      label: t("findLubricant"),
      message: "Здравствуйте! Помогите подобрать смазку для оборудования.",
      href: "/lubricant-finder" as const,
    },
    {
      icon: Download,
      label: t("downloadCatalogue"),
      message: "Здравствуйте! Пришлите, пожалуйста, каталог COGELSA.",
    },
    {
      icon: Wrench,
      label: "Talk to Engineer",
      message: "Здравствуйте! Хочу связаться с инженером по смазке.",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="absolute bottom-16 right-0 mb-3 w-72 animate-scale-in overflow-hidden rounded-3xl border border-navy-50 bg-white shadow-premium">
          <div className="flex items-center justify-between bg-[#25D366] px-4 py-3">
            <div className="flex items-center gap-2 text-white">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-semibold">WhatsApp</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-2">
            {actions.map((action) =>
              action.href ? (
                <Link
                  key={action.label}
                  href={action.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl p-3 text-sm text-navy-700 transition-colors hover:bg-surface"
                >
                  <action.icon className="h-5 w-5 text-accent" />
                  {action.label}
                </Link>
              ) : (
                <a
                  key={action.label}
                  href={generateWhatsAppLink(action.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl p-3 text-sm text-navy-700 transition-colors hover:bg-surface"
                >
                  <action.icon className="h-5 w-5 text-accent" />
                  {action.label}
                </a>
              )
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-all duration-300 hover:scale-110 hover:shadow-glow"
        )}
        aria-label="WhatsApp"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
