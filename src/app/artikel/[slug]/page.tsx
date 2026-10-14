import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, sortedArticles } from "@/data/articles";
import { site } from "@/data/site";
import { formatTanggal } from "@/lib/format";
import ArticleCard from "@/components/ArticleCard";
import ShareButtons from "@/components/ShareButtons";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const a = getArticle(params.slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    openGraph: { type: "article", title: a.title, description: a.excerpt, publishedTime: a.date },
  };
}

export default function ArtikelDetailPage({ params }: Props) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const all = sortedArticles().filter((a) => a.slug !== article.slug);
  const related = [
    ...all.filter((a) => a.category === article.category),
    ...all.filter((a) => a.category !== article.category),
  ].slice(0, 3);

  const url = `${site.url}/artikel/${article.slug}`;
  const paragraphs =
    article.content && article.content.length > 0
      ? article.content
      : [article.excerpt];

  return (
    <>
      <article>
        <header className="bg-brand-900 text-white">
          <div className="container-site flex max-w-3xl flex-col gap-5 py-14 sm:py-16">
            <nav aria-label="Breadcrumb" className="text-sm text-[#B8AEE0]">
              <Link href="/artikel" className="hover:text-white">← Semua artikel</Link>
            </nav>
            <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#FF7AC6]">{article.category}</span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-[44px]">{article.title}</h1>
            <p className="text-[#D6D0EE]">
              {article.author} · {formatTanggal(article.date)} · {article.readMinutes} menit baca
            </p>
          </div>
        </header>

        <div className="container-site flex max-w-3xl flex-col gap-8 py-12">
          {article.image && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-[20px]">
              <Image src={article.image} alt="" fill className="object-cover" sizes="768px" priority />
            </div>
          )}
          <div className="flex flex-col gap-5 text-[18px] leading-[1.8]">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.map((t) => (
                <span key={t} className="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-600 dark:bg-[#241A48] dark:text-brand-300">
                  #{t}
                </span>
              ))}
            </div>
          )}

          <div className="border-t border-[#E6E1F2] pt-6 dark:border-[#2A2342]">
            <ShareButtons url={url} title={article.title} />
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="container-site flex flex-col gap-8 pb-24">
          <h2 className="section-title">Artikel terkait</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
