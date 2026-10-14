import type { Metadata } from "next";
import Link from "next/link";
import { activeApps } from "@/data/apps";
import PageHeader from "@/components/PageHeader";
import AppIcon, { toneClass } from "@/components/AppIcon";

export const metadata: Metadata = {
  title: "Masuk",
  description: "Masuk ke aplikasi ekosistem Qalby Learn: asesmen, administrasi guru dan kepala madrasah, rapat, dan kegiatan santri.",
};

export default function MasukPage() {
  return (
    <>
      <PageHeader
        eyebrow="Masuk"
        title="Pilih aplikasi yang ingin Anda masuki"
        description="Setiap aplikasi Qalby memiliki halaman masuknya sendiri. Pilih aplikasi sesuai peran Anda di bawah ini."
        crumbs={[{ label: "Beranda", href: "/" }, { label: "Masuk" }]}
      />

      <div className="container-site flex flex-col gap-8 py-14 pb-24">
        <div className="flex flex-wrap items-start gap-3 rounded-2xl border border-brand-100 bg-brand-50 p-5 text-[15px] leading-relaxed text-brand-700 dark:border-[#3A3156] dark:bg-[#1A1333] dark:text-brand-100">
          <svg className="mt-0.5 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8h.01M11 12h1v5h1" />
          </svg>
          <p className="min-w-0 flex-1">
            <strong>Segera hadir:</strong> satu akun Qalby Learn untuk masuk ke semua aplikasi sekaligus. Untuk saat ini,
            gunakan akun masing-masing aplikasi.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activeApps.map((app) => {
            const href = app.loginUrl ?? app.url;
            const external = href !== "#";
            return (
              <div key={app.slug} className="card flex flex-col gap-4 p-6">
                <div className="flex items-center gap-4">
                  <AppIcon app={app} size={52} />
                  <div className="flex min-w-0 flex-col gap-1">
                    <strong className="text-lg">{app.name}</strong>
                    <span className={`self-start rounded-full px-2.5 py-1 text-xs font-bold ${toneClass[app.tone].badge}`}>
                      {app.roleLabel}
                    </span>
                  </div>
                </div>
                {app.loginNote && <p className="text-muted flex-1 text-sm leading-relaxed">{app.loginNote}</p>}
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="btn-primary"
                >
                  Masuk ke {app.name}
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-muted text-center text-sm">
          Belum punya akun atau lupa kata sandi?{" "}
          <Link href="/kontak" className="font-semibold text-brand-500 hover:underline dark:text-brand-300">
            Hubungi kami
          </Link>
        </p>
      </div>
    </>
  );
}
