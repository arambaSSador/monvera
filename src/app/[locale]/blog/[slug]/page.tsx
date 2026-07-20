import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getBlogBySlug, getAllBlogSlugs, blogPosts } from "@/data/content";
import { getLocalized } from "@/data/types";
import { generateSEO, generateArticleSchema } from "@/lib/seo";
import { Link } from "@/i18n/routing";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return generateSEO({
    title: post.title,
    description: post.excerpt,
    locale,
    path: `/blog/${slug}`,
    image: post.image,
    type: "article",
    keywords: post.seoKeywords,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const articleSchema = generateArticleSchema({
    title: getLocalized(post.title, locale),
    description: getLocalized(post.excerpt, locale),
    image: post.image,
    date: post.date,
    author: post.author,
  });

  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tCta = await getTranslations({ locale, namespace: "cta" });
  const tCat = await getTranslations({ locale, namespace: "blogCategories" });
  const content = getLocalized(post.content, locale);
  const paragraphs = content.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article>
        <section className="pt-32 pb-8">
          <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ label: tNav("blog"), href: "/blog" }, { label: getLocalized(post.title, locale) }]} />
            <span className="badge-accent mt-6 inline-block">
              {tCat(post.category as "guides" | "maintenance" | "food" | "case-studies")}
            </span>
            <h1 className="heading-section text-navy-900 mt-4">{getLocalized(post.title, locale)}</h1>
            <div className="flex items-center gap-4 mt-4 text-navy-500 text-sm">
              <span>{post.author}</span>
              <span>•</span>
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime} min</span>
            </div>
          </div>
        </section>
        <div className="container-wide mx-auto px-4 max-w-4xl mb-12">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-premium">
            <Image src={post.image} alt={getLocalized(post.title, locale)} fill className="object-cover" priority />
          </div>
        </div>
        <div className="container-wide mx-auto px-4 max-w-3xl pb-20">
          <div className="prose-monvera">
            <p className="text-xl text-navy-600 leading-relaxed mb-8">{getLocalized(post.excerpt, locale)}</p>
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="mb-5 text-base leading-relaxed text-navy-700 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-navy-100">
            <Link href="/contact" className="btn-primary">{tCta("contactExpert")} →</Link>
          </div>
        </div>
      </article>
    </>
  );
}
