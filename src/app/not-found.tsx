import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20 text-center">
      <Image src={site.logo.mark} alt="" width={88} height={85} />
      <p className="bg-gradient-to-r from-brand-500 via-magenta-500 to-coral-500 bg-clip-text text-7xl font-extrabold text-transparent">
        404
      </p>
      <h1 className="text-2xl font-extrabold sm:text-3xl">Halaman tidak ditemukan</h1>
      <p className="text-muted max-w-md leading-relaxed">
        Maaf, halaman yang Anda cari tidak ada atau sudah dipindahkan. Silakan kembali ke Beranda atau jelajahi aplikasi kami.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary px-6 py-3.5 text-[15px]">
          Kembali ke Beranda
        </Link>
        <Link href="/aplikasi" className="btn-outline px-6 py-3.5 text-[15px]">
          Lihat Aplikasi
        </Link>
      </div>
    </section>
  );
}
