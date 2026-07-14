import { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/data/products";
import { getAllIndustrySlugs } from "@/data/industries";
import { getAllEquipmentSlugs } from "@/data/equipment";
import { getAllBlogSlugs, getAllCaseStudySlugs } from "@/data/content";
import { getAllCategorySlugs } from "@/data/categories";
import { getAllTechnicalGuideSlugs } from "@/data/company";
import { routing } from "@/i18n/routing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://monvera.am";

const staticPages = [
  "", "/products", "/industries", "/services", "/about", "/blog",
  "/certificates", "/downloads", "/contact", "/lubricant-finder", "/quote",
  "/technical-support", "/technical-library", "/case-studies", "/equipment",
  "/portal", "/privacy", "/products/compare",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${siteUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
      });
    }

    for (const slug of getAllProductSlugs()) {
      entries.push({
        url: `${siteUrl}/${locale}/products/item/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const slug of getAllIndustrySlugs()) {
      entries.push({
        url: `${siteUrl}/${locale}/industries/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }

    for (const slug of getAllEquipmentSlugs()) {
      entries.push({
        url: `${siteUrl}/${locale}/equipment/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const slug of getAllBlogSlugs()) {
      entries.push({
        url: `${siteUrl}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }

    for (const slug of getAllCaseStudySlugs()) {
      entries.push({
        url: `${siteUrl}/${locale}/case-studies/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    for (const slug of getAllCategorySlugs()) {
      entries.push({
        url: `${siteUrl}/${locale}/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const slug of getAllTechnicalGuideSlugs()) {
      entries.push({
        url: `${siteUrl}/${locale}/technical-library/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
