import Image from "next/image";
import Link from "next/link";
import { activeApps } from "@/data/apps";
import { latestArticles } from "@/data/articles";
import { latestNews } from "@/data/news";
import { site, stats, testimonials } from "@/data/site";
import AppIcon from "@/components/AppIcon";
import AppsGrid from "@/components/AppsGrid";
import ArticleCard from "@/components/ArticleCard";
import NewsList from "@/components/NewsList";

export default function HomePage() {
  const heroApps = activeApps.slice(0, 4);
  const allStats = [...stats, { value: `${activeApps.length}+`, label: "Aplikasi dalam satu ekosistem" }];

  return (
    <>
      {/* HERO */}
      <section className="bg-brand-900 text-white">
        <div className="container-site flex flex-wrap items-center gap-14 pb-28 pt-16 sm:pt-20">
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-6">
            <span className="self-start rounded-full bg-white/10 px-3.5 py-2 text-[13px] font-bold uppercase tracking-wider text-[#FF7AC6]">
              Ekosistem Pendidikan Digital
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]">
              Belajar dengan Hati,
              <br />
              <span className="text-[#FF7AC6]">Mengelola</span> dengan <span className="text-[#FF6B6B]">Cerdas.</span>
            </h1>
            <p className="max-w-[540px] text-lg leading-relaxed text-[#D6D0EE]">
              Satu pintu untuk seluruh aplikasi Qalby — dari ruang kelas siswa, meja guru, hingga ruang kepala sekolah.
              Lengkap dengan artikel dan berita pendidikan terbaru.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link href="#aplikasi" className="rounded-full bg-magenta-500 px-7 py-4 font-bold text-white transition hover:bg-magenta-600">
                Jelajahi Aplikasi
              </Link>
              <Link href="#artikel" className="rounded-full border-[1.5px] border-[#8A79C7] px-7 py-4 font-semibold text-white transition hover:border-white">
                Baca Artikel
              </Link>
            </div>
          </div>

          <div className="relative flex min-w-0 flex-[1_1_400px] justify-center">
            <div className="absolute -top-6 right-2 hidden h-24 w-24 opacity-90 sm:block">
              <Image src={site.logo.mark} alt="" width={96} height={93} />
            </div>
            <div className="grid w-full max-w-[480px] grid-cols-2 gap-4">
              {heroApps.map((app, i) => (
                <Link
                  key={app.slug}
                  href={`/aplikasi/${app.slug}`}
                  className={`flex flex-col gap-2.5 rounded-[20px] bg-white p-6 text-ink transition hover:-translate-y-1 ${i % 2 ? "mt-8" : ""}`}
                >
                  <AppIcon app={app} size={44} />
                  <strong className="text-[17px]">{app.name}</strong>
                  <span className="text-sm text-ink-muted">{app.short}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="container-site -mt-12">
        <div className="card grid grid-cols-2 gap-6 p-7 shadow-sm lg:grid-cols-4 lg:p-8">
          {allStats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <strong className="bg-gradient-to-r from-brand-500 to-magenta-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                {s.value}
              </strong>
              <span className="text-muted text-[15px]">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* APLIKASI */}
      <section id="aplikasi" className="container-site flex scroll-mt-24 flex-col gap-8 pb-10 pt-24">
        <div className="flex max-w-[620px] flex-col gap-2.5">
          <span className="eyebrow">Ekosistem Aplikasi</span>
          <h2 className="section-title">Satu akun, semua kebutuhan sekolah</h2>
          <p className="text-muted text-[17px] leading-relaxed">
            Pilih aplikasi sesuai peran Anda. Semua terhubung dalam satu platform {site.name}.
          </p>
        </div>
        <AppsGrid apps={activeApps} />
      </section>

      {/* ARTIKEL */}
      <section id="artikel" className="container-site flex scroll-mt-24 flex-col gap-9 pb-10 pt-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-2.5">
            <span className="eyebrow">Artikel</span>
            <h2 className="section-title">Wawasan untuk pendidik</h2>
          </div>
          <Link href="/artikel" className="font-bold text-brand-500 hover:underline dark:text-brand-300">
            Semua artikel →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestArticles(3).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section id="berita" className="container-site scroll-mt-24 pb-10 pt-14">
        <div className="card flex flex-wrap gap-10 rounded-[28px] p-7 sm:p-10">
          <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-3.5">
            <span className="eyebrow">News</span>
            <h2 className="section-title">Kabar terbaru Qalby</h2>
            <p className="text-muted leading-relaxed">Rilis fitur, pembaruan aplikasi, dan pengumuman kegiatan.</p>
            <Link
              href="/news"
              className="mt-2 self-start rounded-full border-[1.5px] border-brand-500 px-5 py-3 text-sm font-bold text-brand-500 transition hover:bg-brand-500 hover:text-white dark:border-brand-300 dark:text-brand-300"
            >
              Lihat semua berita
            </Link>
          </div>
          <div className="min-w-0 flex-[999_1_520px]">
            <NewsList items={latestNews(3)} />
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="container-site flex flex-col gap-8 pb-24 pt-14">
        <h2 className="section-title text-center">Kata mereka tentang Qalby</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.role + t.name} className="card m-0 flex flex-col gap-5 p-7">
              <blockquote className="text-[17px] leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 font-bold text-brand-600 dark:bg-[#241A48] dark:text-brand-300" aria-hidden="true">
                  {t.name.replace(/[^A-Za-z]/g, "").charAt(0) || "Q"}
                </div>
                <div className="flex flex-col">
                  <strong className="text-[15px]">{t.name}</strong>
                  <span className="text-[13px] text-ink-soft dark:text-[#9C96B2]">{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
