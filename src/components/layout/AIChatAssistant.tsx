"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Bot, X, Send, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { recommendProducts } from "@/data/products";
import { getLocalized } from "@/data/types";
import { Link } from "@/i18n/routing";
import { aiResponsesHy } from "@/data/aiResponsesHy";

interface Message {
  role: "user" | "assistant";
  content: string;
  products?: { slug: string; name: string }[];
}

export function AIChatAssistant() {
  const t = useTranslations("ai");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: t("greeting") },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const pick = (hy: string, ru: string, en: string) =>
    locale === "hy" ? hy : locale === "ru" ? ru : en;

  const generateResponse = (query: string): Message => {
    const q = query.toLowerCase();

    if (q.includes("food") || q.includes("h1") || q.includes("пищ") || q.includes("սն")) {
      const products = recommendProducts({ foodContact: true });
      return {
        role: "assistant",
        content: pick(
          aiResponsesHy.food,
          "Для пищевой промышленности рекомендую сертифицированные NSF H1 продукты COGELSA FOODLUBE — безопасны при случайном контакте с продуктами и соответствуют HACCP.",
          "For food industry applications, I recommend NSF H1 certified COGELSA FOODLUBE products. Safe for incidental food contact and HACCP-ready."
        ),
        products: products.slice(0, 3).map((p) => ({
          slug: p.slug,
          name: getLocalized(p.name, locale),
        })),
      };
    }

    if (q.includes("hydraulic") || q.includes("гидр") || q.includes("հիդ")) {
      const products = recommendProducts({ equipment: "hydraulic-systems" });
      return {
        role: "assistant",
        content: pick(
          aiResponsesHy.hydraulic,
          "Для гидравлики рекомендую серию COGELSA HYDRAULIC HLP. ISO VG 46 — наиболее частая вязкость. Для интервалов замены полезен анализ масла.",
          "For hydraulic systems, COGELSA HYDRAULIC HLP series oils are recommended. ISO VG 46 is the most common grade. Consider oil analysis for change intervals."
        ),
        products: products.slice(0, 3).map((p) => ({
          slug: p.slug,
          name: getLocalized(p.name, locale),
        })),
      };
    }

    if (
      q.includes("bearing") ||
      q.includes("подшип") ||
      q.includes("grease") ||
      q.includes("смаз") ||
      q.includes("aranc") ||
      q.includes("առան")
    ) {
      const products = recommendProducts({ equipment: "bearings" });
      return {
        role: "assistant",
        content: pick(
          aiResponsesHy.bearing,
          "Для подшипников рекомендую COGELSA BEARING GREASE Lithium EP 2 (NLGI 2). Заполняйте 1/3–1/2 полости подшипника — не пересмазывайте.",
          "For bearings, I recommend COGELSA BEARING GREASE Lithium EP 2 (NLGI 2). Fill 1/3 to 1/2 of the cavity — avoid over-greasing."
        ),
        products: products.slice(0, 3).map((p) => ({
          slug: p.slug,
          name: getLocalized(p.name, locale),
        })),
      };
    }

    if (q.includes("mining") || q.includes("горн") || q.includes("шахт") || q.includes("հան")) {
      const products = recommendProducts({ industry: "mining" });
      return {
        role: "assistant",
        content: pick(
          aiResponsesHy.mining,
          "Горнодобыча требует EP-смазок из-за высоких нагрузок, пыли и влаги. COGELSA предлагает решения для конвейеров, дробилок и тяжёлой техники.",
          "Mining needs EP lubricants for heavy loads, dust, and moisture. COGELSA covers conveyors, crushers, and heavy machinery."
        ),
        products: products.slice(0, 3).map((p) => ({
          slug: p.slug,
          name: getLocalized(p.name, locale),
        })),
      };
    }

    return {
      role: "assistant",
      content: pick(
        aiResponsesHy.default,
        "Помогу с подбором смазки, спецификациями и рекомендациями по применению. Укажите отрасль, тип оборудования или перейдите в Lubricant Finder.",
        "I can help with lubricant selection, specs, and application guidance. Share your industry or equipment — or use the Lubricant Finder."
      ),
    };
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    await new Promise((r) => setTimeout(r, 700));

    const response = generateResponse(userMessage);
    setMessages((prev) => [...prev, response]);
    setLoading(false);
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-white shadow-lift transition-all duration-300 hover:scale-110 hover:bg-navy-700"
          aria-label={t("title")}
        >
          <Bot className="h-6 w-6" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 left-6 z-50 flex h-[520px] max-h-[calc(100vh-6rem)] w-[min(380px,calc(100%-3rem))] animate-scale-in flex-col overflow-hidden rounded-3xl border border-navy-50 bg-white shadow-premium">
          <div className="flex shrink-0 items-center justify-between bg-navy-900 px-4 py-3">
            <div className="flex items-center gap-2 text-white">
              <Bot className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold">{t("title")}</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-white/85 hover:text-white"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-white/85 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "rounded-br-md bg-accent text-white"
                      : "rounded-bl-md bg-surface text-navy-800"
                  )}
                >
                  {msg.content}
                  {msg.products && msg.products.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {msg.products.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/products/item/${p.slug}`}
                          className="block rounded-xl bg-white p-2 text-xs font-medium text-accent hover:underline"
                        >
                          → {p.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-surface px-4 py-3 text-sm text-navy-500">
                  <span className="animate-pulse">
                    {pick(aiResponsesHy.loading, "Анализирую...", "Analyzing...")}
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="shrink-0 border-t border-navy-50 p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={t("placeholder")}
                className="flex-1 rounded-xl bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/30"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="rounded-xl bg-accent p-2.5 text-white transition-colors hover:bg-accent-light disabled:opacity-50"
              >
                <Send className="h-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
