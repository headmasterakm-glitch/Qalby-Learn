import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="container-site pb-24">
      <div className="flex flex-wrap items-center justify-between gap-8 rounded-[28px] bg-brand-500 p-8 text-white sm:p-12">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-3">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Siap memulai bersama Qalby Learn?
          </h2>
          <p className="text-lg leading-relaxed text-[#E5DCFD]">
            Satu platform untuk semua aplikasi — siswa, guru, dan kepala sekolah. Mulai gunakan hari ini.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/aplikasi" className="rounded-full bg-white px-7 py-4 font-bold text-brand-500 transition hover:bg-brand-50">
            Mulai Sekarang
          </Link>
          <Link href="/kontak" className="rounded-full border-[1.5px] border-[#C9B6FA] px-7 py-4 font-semibold text-white transition hover:border-white">
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
