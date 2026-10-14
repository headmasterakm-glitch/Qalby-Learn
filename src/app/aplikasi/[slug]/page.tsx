import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { activeApps, getApp } from "@/data/apps";
import AppIcon, { toneClass } from "@/components/AppIcon";

type Props = { params: { slug: string } };

// Hanya slug yang ada di data yang dibuat; selain itu tampil halaman 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return activeApps.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const app = getApp(params.slug);
  if (!app) return {};
  return {
    title: app.fullName,
    description: app.description,
    openGraph: { title: `${app.fullName} | Qalby Learn`, description: app.description },
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="card flex flex-col gap-4 p-7">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

export default function AppDetailPage({ params }: Props) {
  const app = getApp(params.slug);
  if (!app) notFound();

  const others = activeApps.filter((a) => a.slug !== app.slug).slice(0, 3);
  const external = app.url !== "#";

  return (
    <>
      {/* Header aplikasi */}
      <section className="bg-brand-900 text-white">
        <div className="container-site flex flex-col gap-6 py-14 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-[#B8AEE0]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">Beranda</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/aplikasi" className="hover:text-white">Aplikasi</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{app.name}</li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-center gap-5">
            <div className="rounded-[18px] bg-white p-2">
              <AppIcon app={app} size={72} />
            </div>
            <div className="flex min-w-0 flex-col gap-2">
              <span className={`self-start rounded-full px-3 py-1 text-xs font-bold ${toneClass[app.tone].badge}`}>
                {app.roleLabel}
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{app.name}</h1>
              <p className="text-lg text-[#D6D0EE]">{app.fullName}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={app.url}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="rounded-full bg-magenta-500 px-7 py-4 font-bold text-white transition hover:bg-magenta-600"
            >
              Buka Aplikasi
            </a>
            {app.loginUrl && app.loginUrl !== app.url && (
              <a
                href={app.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-[1.5px] border-[#8A79C7] px-7 py-4 font-semibold text-white transition hover:border-white"
              >
                Halaman Masuk
              </a>
            )}
            {app.extraLinks?.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-[1.5px] border-[#8A79C7] px-7 py-4 font-semibold text-white transition hover:border-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Isi */}
      <div className="container-site flex flex-wrap gap-6 py-14">
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-6">
          <Section title="Tentang aplikasi">
            <p className="text-muted text-[17px] leading-relaxed">{app.description}</p>
          </Section>

          <Section title="Fitur utama">
            <ul className="grid gap-4">
              {app.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500 dark:bg-[#241A48] dark:text-brand-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 5 5 9-10" />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Tangkapan layar">
            <div className="grid gap-4 sm:grid-cols-3">
              {app.screenshots.length > 0
                ? app.screenshots.map((src, i) => (
                    <div key={src} className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-[#E6E1F2] dark:border-[#2A2342]">
                      <Image src={src} alt={`Tangkapan layar ${app.name} ${i + 1}`} fill className="object-cover" sizes="(min-width: 640px) 240px, 100vw" />
                    </div>
                  ))
                : [1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="flex aspect-[9/16] items-center justify-center rounded-2xl border-2 border-dashed border-[#D6D0E6] text-center text-sm text-ink-soft dark:border-[#3A3156]"
                    >
                      [Tangkapan layar {n}]
                    </div>
                  ))}
            </div>
          </Section>

          <Section title="Panduan singkat">
            <ol className="flex flex-col gap-4">
              {app.guide.map((step, i) => (
                <li key={step + i} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-1 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </Section>
        </div>

        <aside className="flex min-w-0 flex-[1_1_300px] flex-col gap-6">
          <div className="card flex flex-col gap-4 p-7">
            <h2 className="text-lg font-bold">Siapa penggunanya?</h2>
            <p className="text-muted leading-relaxed">{app.audience}</p>
            <dl className="flex flex-col gap-3 border-t border-[#E6E1F2] pt-4 text-sm dark:border-[#2A2342]">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Untuk</dt>
                <dd className="font-semibold">{app.roleLabel}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Platform</dt>
                <dd className="font-semibold">Web (HP & komputer)</dd>
              </div>
            </dl>
            {app.loginNote && (
              <div className="rounded-xl bg-brand-50 p-4 text-sm leading-relaxed text-brand-700 dark:bg-[#1A1333] dark:text-brand-100">
                <strong className="block">Cara masuk</strong>
                {app.loginNote}
              </div>
            )}
            <a href={app.url} className="btn-primary" target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
              Buka {app.name}
            </a>
          </div>

          <div className="card flex flex-col gap-2 p-7">
            <h2 className="mb-2 text-lg font-bold">Aplikasi lainnya</h2>
            {others.map((o) => (
              <Link key={o.slug} href={`/aplikasi/${o.slug}`} className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-brand-50 dark:hover:bg-[#1A1333]">
                <AppIcon app={o} size={40} />
                <span className="flex flex-col">
                  <strong className="text-[15px]">{o.name}</strong>
                  <span className="text-muted text-sm">{o.short}</span>
                </span>
              </Link>
            ))}
            <Link href="/aplikasi" className="mt-2 text-sm font-bold text-brand-500 hover:underline dark:text-brand-300">
              Lihat semua aplikasi →
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
