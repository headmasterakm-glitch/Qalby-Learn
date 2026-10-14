import type { Metadata } from "next";
import Image from "next/image";
import { about, site } from "@/data/site";
import { activeApps } from "@/data/apps";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Profil pengembang serta visi dan misi Qalby Learn.",
};

export default function TentangPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Dibuat dengan hati untuk sekolah Indonesia"
        description={about.intro}
        crumbs={[{ label: "Beranda", href: "/" }, { label: "Tentang" }]}
      />

      <div className="container-site flex flex-col gap-6 py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="card flex flex-col gap-4 p-8">
            <span className="eyebrow">Visi</span>
            <p className="text-xl font-semibold leading-relaxed">{about.vision}</p>
          </section>
          <section className="card flex flex-col gap-4 p-8">
            <span className="eyebrow">Misi</span>
            <ol className="flex flex-col gap-3">
              {about.mission.map((m, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed">{m}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className="card flex flex-wrap items-center gap-8 p-8">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-brand-50 dark:bg-[#241A48]">
            <Image src={site.logo.mark} alt="" width={64} height={62} />
          </div>
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-2">
            <span className="eyebrow">Pengembang</span>
            <h2 className="text-2xl font-extrabold">{about.developer.name}</h2>
            <p className="font-semibold text-brand-500 dark:text-brand-300">{about.developer.role}</p>
            <p className="text-muted leading-relaxed">{about.developer.bio}</p>
          </div>
        </section>

        <section className="card grid grid-cols-2 gap-6 p-8 sm:grid-cols-3">
          <div>
            <strong className="text-3xl font-extrabold text-brand-500 dark:text-brand-300">{activeApps.length}</strong>
            <p className="text-muted text-sm">Aplikasi dalam ekosistem</p>
          </div>
          <div>
            <strong className="text-3xl font-extrabold text-magenta-500 dark:text-[#FF7AC6]">4</strong>
            <p className="text-muted text-sm">Peran pengguna dilayani</p>
          </div>
          <div>
            <strong className="text-3xl font-extrabold text-coral-600 dark:text-[#FF8A8A]">1</strong>
            <p className="text-muted text-sm">Platform untuk semuanya</p>
          </div>
        </section>
      </div>

      <CtaBanner />
    </>
  );
}
