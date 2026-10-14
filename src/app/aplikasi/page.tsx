import type { Metadata } from "next";
import { activeApps } from "@/data/apps";
import PageHeader from "@/components/PageHeader";
import AppsCatalog from "@/components/AppsCatalog";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Katalog Aplikasi",
  description:
    "Daftar lengkap aplikasi ekosistem Qalby untuk siswa, guru, kepala sekolah, dan umum: Q_Student, Q_Teacher, Q_Assessment, Q_Headmaster, Q_Meeting, dan lainnya.",
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
