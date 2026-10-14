"use client";

import { useState } from "react";
import type { Article } from "@/data/articles";
import ArticleCard from "./ArticleCard";
import FilterPills from "./FilterPills";
import SearchInput from "./SearchInput";

const PAGE_SIZE = 6;

export default function ArticlesBrowser({
  articles,
  categories,
}: {
  articles: Article[];
  categories: Article["category"][];
}) {
  const options: string[] = ["Semua", ...categories];
  const [cat, setCat] = useState<string>("Semua");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const q = query.trim().toLowerCase();
  const filtered = articles.filter((a) => {
    const catOk = cat === "Semua" || a.category === cat;
    const text = `${a.title} ${a.excerpt} ${a.tags.join(" ")}`.toLowerCase();
    return catOk && (q === "" || text.includes(q));
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const shown = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center lg:justify-between">
        <FilterPills
          options={options}
          value={cat}
          onChange={(v) => {
            setCat(v);
            setPage(1);
          }}
          label="Filter kategori artikel"
        />
        <SearchInput
          value={query}
          onChange={(v) => {
            setQuery(v);
            setPage(1);
          }}
          placeholder="Cari artikel…"
          label="Cari artikel"
        />
      </div>

      {shown.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <div className="card p-12 text-center">
          <strong className="text-lg">Artikel tidak ditemukan</strong>
          <p className="text-muted mt-2">Coba kata kunci atau kategori lain.</p>
        </div>
      )}

      {totalPages > 1 && (
        <nav aria-label="Halaman artikel" className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setPage(current - 1)}
            disabled={current === 1}
            className="btn-outline disabled:opacity-40"
          >
            ← Sebelumnya
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              aria-current={n === current ? "page" : undefined}
              className={`h-11 w-11 rounded-xl text-sm font-semibold ${
                n === current ? "bg-brand-500 text-white" : "border border-[#D6D0E6] dark:border-[#3A3156]"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage(current + 1)}
            disabled={current === totalPages}
            className="btn-outline disabled:opacity-40"
          >
            Berikutnya →
          </button>
        </nav>
      )}
    </div>
  );
}
