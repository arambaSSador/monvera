import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { blogPosts } from "@/data/content";
import { getLocalized } from "@/data/types";
import { generateSEO } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateSEO({
    title: { en: "Technical Blog", ru: "Технический блог", hy: "Tekhnakan blog" },
    description: { en: "Industrial lubrication tips and guides", ru: "Советы по промышленной смазке", hy: "Smazki masin" },
    locale,
    path: "/blog",
  });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sections" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: t("blog") }]} />
          <h1 className="heading-section text-white mt-4">{t("blog")}</h1>
          <p className="text-white/85 text-lg mt-4">{t("blogSubtitle")}</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="card-premium group block">
              <div className="relative h-52 overflow-hidden">
                <Image src={post.image} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
              </div>
              <div className="p-6">
                <span className="badge-accent">{post.category}</span>
                <h2 className="font-display font-bold text-lg mt-3 group-hover:text-accent transition-colors">{getLocalized(post.title, locale)}</h2>
                <p className="text-navy-500 text-sm mt-2 line-clamp-2">{getLocalized(post.excerpt, locale)}</p>
                <span className="text-accent text-sm font-semibold mt-4 inline-block">{tCommon("readMore")} →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
