import Link from "next/link";
import type { NewsItem } from "@/data/news";
import { tanggalPendek } from "@/lib/format";

export default function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <ul className="flex flex-col">
      {items.map((n, i) => {
        const t = tanggalPendek(n.date);
        return (
          <li key={n.slug} className={i < items.length - 1 ? "border-b border-[#E6E1F2] dark:border-[#2A2342]" : ""}>
            <Link href={`/news/${n.slug}`} className="group flex gap-5 py-5 sm:gap-6">
              <div
                className={`flex h-[72px] w-[72px] shrink-0 flex-col items-center justify-center rounded-[14px] ${
                  i === 0 ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-600 dark:bg-[#241A48] dark:text-brand-300"
                }`}
              >
                <strong className="text-2xl leading-none">{t.day}</strong>
                <span className="text-xs font-semibold">{t.month}</span>
              </div>
              <div className="flex min-w-0 flex-col gap-1.5">
                <span className="text-xs font-bold uppercase text-magenta-500 dark:text-[#FF7AC6]">{n.type}</span>
                <strong className="text-lg leading-snug group-hover:text-brand-500 dark:group-hover:text-brand-300">{n.title}</strong>
                <span className="text-muted text-sm">{n.summary}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
