"use client";

import { useState } from "react";
import type { AppItem, Role } from "@/data/apps";
import AppCard from "./AppCard";
import FilterPills from "./FilterPills";
import SearchInput from "./SearchInput";

const FILTERS = ["Semua", "Siswa", "Guru", "Kepala Sekolah", "Umum"] as const;
type Filter = (typeof FILTERS)[number];

export default function AppsCatalog({ apps }: { apps: AppItem[] }) {
  const [filter, setFilter] = useState<Filter>("Semua");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const shown = apps.filter((a) => {
    const roleOk = filter === "Semua" || a.roles.includes(filter as Role);
    const text = `${a.name} ${a.short} ${a.description} ${a.roleLabel}`.toLowerCase();
    return roleOk && (q === "" || text.includes(q));
  });

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center lg:justify-between">
        <FilterPills options={FILTERS} value={filter} onChange={setFilter} label="Filter berdasarkan peran" />
        <SearchInput value={query} onChange={setQuery} placeholder="Cari aplikasi…" label="Cari aplikasi" />
      </div>

      <p className="text-muted text-sm" aria-live="polite">
        Menampilkan {shown.length} dari {apps.length} aplikasi
      </p>

      {shown.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      ) : (
        <div className="card flex flex-col items-center gap-3 p-12 text-center">
          <strong className="text-lg">Aplikasi tidak ditemukan</strong>
          <p className="text-muted">Coba kata kunci lain atau pilih filter &quot;Semua&quot;.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setFilter("Semua");
            }}
            className="btn-outline mt-2"
          >
            Atur ulang pencarian
          </button>
        </div>
      )}
    </div>
  );
}
