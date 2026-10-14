import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";
import { formatTanggal } from "@/lib/format";

const placeholderTone: Record<Article["category"], string> = {
  "Tips Mengajar": "bg-brand-50 text-brand-600 dark:bg-[#241A48] dark:text-brand-300",
  "Teknologi Pendidikan": "bg-magenta-50 text-magenta-600 dark:bg-[#3A1030] dark:text-[#FF7AC6]",
  Parenting: "bg-coral-50 text-[#B01818] dark:bg-[#3C1616] dark:text-[#FF8A8A]",
  "Panduan Aplikasi": "bg-[#EEE9FB] text-brand-700 dark:bg-[#1F1838] dark:text-brand-100",
};

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="card group flex flex-col overflow-hidden">
      <Link href={`/artikel/${article.slug}`} className="flex h-full flex-col">
        <div className={`relative flex h-48 items-center justify-center text-sm font-semibold ${placeholderTone[article.category]}`}>
          {article.image ? (
            <Image src={article.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 380px, 100vw" />
          ) : (
            <span>{article.category}</span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-500 dark:text-brand-300">{article.category}</span>
          <h3 className="text-xl font-bold leading-snug group-hover:text-brand-500 dark:group-hover:text-brand-300">{article.title}</h3>
          <p className="text-muted flex-1 text-[15px] leading-relaxed">{article.excerpt}</p>
          <span className="text-[13px] text-ink-soft dark:text-[#9C96B2]">
            {article.author} · {formatTanggal(article.date)} · {article.readMinutes} menit baca
          </span>
        </div>
      </Link>
    </article>
  );
}
