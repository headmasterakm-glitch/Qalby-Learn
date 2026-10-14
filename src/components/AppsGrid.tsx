"use client";

import { useState } from "react";
import Link from "next/link";
import type { AppItem, Role } from "@/data/apps";
import AppCard from "./AppCard";

const FILTERS: ("Semua" | Role)[] = ["Semua", "Siswa", "Guru", "Kepala Sekolah", "Umum"];

export default function AppsGrid({ apps, showAllLink = true }: { apps: AppItem[]; showAllLink?: boolean }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Semua");
  const shown = filter === "Semua" ? apps : apps.filter((a) => a.roles.includes(filter));

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter berdasarkan peran">
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={`rounded-full px-[18px] py-2.5 text-sm transition ${
                active
                  ? "bg-ink font-semibold text-white dark:bg-white dark:text-ink"
                  : "border border-[#D6D0E6] bg-white font-medium text-ink-muted hover:border-brand-500 dark:border-[#3A3156] dark:bg-transparent dark:text-[#B3ADC8]"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
        {shown.length === 0 && (
          <p className="text-muted col-span-full py-10 text-center">Belum ada aplikasi untuk peran ini.</p>
        )}
        {showAllLink && (
          <Link
            href="/aplikasi"
            className="flex min-h-[240px] flex-col items-center justify-center gap-3 rounded-[20px] border-2 border-dashed border-brand-300 p-7 text-brand-500 transition hover:bg-brand-50 dark:text-brand-300 dark:hover:bg-[#1A1333]"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v8M8 12h8" />
            </svg>
            <strong className="text-lg">Lihat Semua Aplikasi</strong>
            <span className="text-muted text-sm">Katalog lengkap ekosistem Qalby</span>
          </Link>
        )}
      </div>
    </div>
  );
}
