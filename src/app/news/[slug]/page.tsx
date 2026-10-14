import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNews, news, sortedNews } from "@/data/news";
import { site } from "@/data/site";
import { formatTanggal } from "@/lib/format";
import NewsList from "@/components/NewsList";
import ShareButtons from "@/components/ShareButtons";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const n = getNews(params.slug);
  if (!n) return {};
  return { title: n.title, description: n.summary };
}

export default function NewsDetailPage({ params }: Props) {
  const item = getNews(params.slug);
  if (!item) notFound();

  const others = sortedNews()
    .filter((n) => n.slug !== item.slug)
    .slice(0, 3);
  const paragraphs =
    item.content && item.content.length > 0
      ? item.content
      : [item.summary, "[Isi lengkap berita ditulis di sini. Tambahkan teks di file src/data/news.ts pada bagian content.]"];

  return (
    <>
      <article className="container-site flex max-w-3xl flex-col gap-6 py-14">
        <Link href="/news" className="text-sm font-semibold text-brand-500 hover:underline dark:text-brand-300">
          ← Semua berita
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-brand-500 px-3 py-1.5 text-xs font-bold text-white">{item.type}</span>
          <time dateTime={item.date} className="text-muted text-sm font-semibold">
            {formatTanggal(item.date)}
          </time>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-[40px]">{item.title}</h1>
        <div className="flex flex-col gap-5 text-[18px] leading-[1.8]">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="border-t border-[#E6E1F2] pt-6 dark:border-[#2A2342]">
          <ShareButtons url={`${site.url}/news/${item.slug}`} title={item.title} />
        </div>
      </article>

      {others.length > 0 && (
        <section className="container-site max-w-3xl pb-24">
          <h2 className="mb-2 text-2xl font-extrabold">Berita lainnya</h2>
          <NewsList items={others} />
        </section>
      )}
    </>
  );
}
