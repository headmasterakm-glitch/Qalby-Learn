import Link from "next/link";
import type { AppItem } from "@/data/apps";
import AppIcon, { toneClass } from "./AppIcon";

export default function AppCard({ app }: { app: AppItem }) {
  return (
    <article className="card flex flex-col gap-3.5 p-7">
      <div className="flex items-center justify-between">
        <AppIcon app={app} />
        <span className={`rounded-full px-3 py-1.5 text-xs font-bold ${toneClass[app.tone].badge}`}>{app.roleLabel}</span>
      </div>
      <h3 className="text-[22px] font-bold">{app.name}</h3>
      <p className="text-muted line-clamp-4 flex-grow text-[15px] leading-relaxed">{app.description}</p>
      <div className="flex flex-wrap gap-2.5">
        <a href={app.url} className="btn-primary" target="_blank" rel="noopener noreferrer">
          Buka Aplikasi
        </a>
        <Link href={`/aplikasi/${app.slug}`} className="btn-outline">
          Detail
        </Link>
      </div>
    </article>
  );
}
