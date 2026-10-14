"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E6E1F2] bg-white/90 backdrop-blur dark:border-[#2A2342] dark:bg-[#0E0A1C]/90">
      <nav className="container-site flex items-center justify-between gap-4 py-3" aria-label="Navigasi utama">
        <Logo size="sm" />

        <div className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3.5 py-2.5 text-[15px] transition ${
                  active
                    ? "font-semibold text-brand-500 dark:text-brand-300"
                    : "font-medium text-ink-muted hover:text-brand-500 dark:text-[#B3ADC8] dark:hover:text-brand-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/masuk" className="hidden rounded-full bg-brand-500 px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-brand-600 sm:inline-flex">
            Masuk
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label="Buka menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6E1F2] lg:hidden dark:border-[#2A2342]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-t border-[#E6E1F2] lg:hidden dark:border-[#2A2342]">
          <div className="container-site flex flex-col py-3">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium hover:text-brand-500"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/masuk" className="btn-primary mt-2">
              Masuk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
