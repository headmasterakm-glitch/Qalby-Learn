import type { Metadata } from "next";
import { activeApps } from "@/data/apps";
import PageHeader from "@/components/PageHeader";
import AppsCatalog from "@/components/AppsCatalog";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Katalog Aplikasi",
  description:
    "Daftar lengkap aplikasi Qalby Learn: Asesmen Terpadu, Administrasi Guru & Karyawan, ADM KAMAD, Qalby Meeting, Hari Santri Nasional 2026, dan lainnya.",
};

export default function AplikasiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Katalog Aplikasi"
        title="Semua aplikasi Qalby dalam satu tempat"
        description="Temukan aplikasi yang sesuai dengan peran Anda di sekolah. Gunakan pencarian atau filter untuk menemukannya lebih cepat."
        crumbs={[{ label: "Beranda", href: "/" }, { label: "Aplikasi" }]}
      />
      <section className="container-site py-14">
        <AppsCatalog apps={activeApps} />
      </section>
      <CtaBanner />
    </>
  );
}
