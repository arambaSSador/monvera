import type { Metadata } from "next";
import { getLocalized, type LocalizedString } from "@/data/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://monvera.am";

interface SEOProps {
  title: LocalizedString | string;
  description: LocalizedString | string;
  locale: string;
  path?: string;
  image?: string;
  keywords?: LocalizedString | string;
  type?: "website" | "article" | "product";
}

function resolveText(text: LocalizedString | string, locale: string): string {
  if (typeof text === "string") return text;
  return getLocalized(text, locale);
}

export function generateSEO({
  title,
  description,
  locale,
  path = "",
  image = "/og-image.jpg",
  keywords,
  type = "website",
}: SEOProps): Metadata {
  const titleText = resolveText(title, locale);
  const descText = resolveText(description, locale);
  const keywordsText = keywords ? resolveText(keywords, locale) : undefined;
  const url = `${siteUrl}/${locale}${path}`;
  const fullTitle = `${titleText} | MONVERA LLC`;

  return {
    title: fullTitle,
    description: descText,
    keywords: keywordsText,
    alternates: {
      canonical: url,
      languages: {
        hy: `${siteUrl}/hy${path}`,
        ru: `${siteUrl}/ru${path}`,
        en: `${siteUrl}/en${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description: descText,
      url,
      siteName: "MONVERA LLC",
      locale,
      type: type === "product" ? "website" : type,
      images: [{ url: image, width: 1200, height: 630, alt: titleText }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: descText,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MONVERA LLC",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description: "Official COGELSA Industrial Lubricants Distributor in Armenia",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yerevan",
      addressCountry: "AM",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+374-99-123-456",
      contactType: "sales",
      availableLanguage: ["Armenian", "Russian", "English"],
    },
    sameAs: [
      "https://facebook.com/monvera.am",
      "https://linkedin.com/company/monvera",
    ],
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "COGELSA",
    },
    manufacturer: {
      "@type": "Organization",
      name: "COGELSA",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "MONVERA LLC",
      },
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "MONVERA LLC",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
    },
  };
}
