import { Suspense } from "react";
import QuotePageClient from "./QuotePageClient";
import { generateSEO } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEO({
    title: { en: "Request Quote", ru: "Запрос цены", hy: "Request Quote" },
    description: { en: "Request commercial offer for COGELSA products", ru: "Запрос коммерческого предложения", hy: "Quote" },
    locale,
    path: "/quote",
  });
}

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center">Loading...</div>}>
      <QuotePageClient />
    </Suspense>
  );
}
