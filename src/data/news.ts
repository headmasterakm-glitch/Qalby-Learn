// DATA CONTOH (dummy) berita. Ganti dengan berita asli Anda.

export type NewsItem = {
  slug: string;
  title: string;
  summary: string;
  type: "Rilis Fitur" | "Pembaruan" | "Kegiatan" | "Pengumuman";
  date: string; // YYYY-MM-DD
  content?: string[]; // isi berita, satu teks = satu paragraf
};

export const news: NewsItem[] = [
  {
    slug: "peluncuran-aplikasi-hari-santri-nasional",
    title: "Aplikasi Hari Santri Nasional Resmi Diluncurkan",
    summary: "Menyambut 22 Oktober, aplikasi baru kini tersedia di ekosistem Qalby.",
    type: "Rilis Fitur",
    date: "2026-10-12",
  },
  {
    slug: "pembaruan-q-teacher-oktober",
    title: "Q_Teacher Mendapat Pembaruan Fitur Presensi",
    summary: "[Ringkasan pembaruan Q_Teacher.]",
    type: "Pembaruan",
    date: "2026-10-08",
  },
  {
    slug: "pelatihan-guru-q-assessment",
    title: "Pelatihan Penggunaan Q_Assessment bagi Guru",
    summary: "[Ringkasan kegiatan pelatihan.]",
    type: "Kegiatan",
    date: "2026-10-03",
  },
  {
    slug: "jadwal-pemeliharaan-server",
    title: "Jadwal Pemeliharaan Server Akhir Bulan",
    summary: "[Ringkasan pengumuman pemeliharaan.]",
    type: "Pengumuman",
    date: "2026-09-29",
  },
  {
    slug: "q-meeting-dukung-notulen-otomatis",
    title: "Q_Meeting Kini Mendukung Ekspor Notulen",
    summary: "[Ringkasan rilis fitur Q_Meeting.]",
    type: "Rilis Fitur",
    date: "2026-09-20",
  },
  {
    slug: "qalby-learn-hadir",
    title: "Qalby Learn Hadir sebagai Pusat Ekosistem Aplikasi",
    summary: "Semua aplikasi Qalby kini dapat diakses dari satu platform.",
    type: "Pengumuman",
    date: "2026-09-10",
  },
];

export const sortedNews = () => [...news].sort((a, b) => b.date.localeCompare(a.date));

export const latestNews = (n = 3) => sortedNews().slice(0, n);

export const getNews = (slug: string) => news.find((n) => n.slug === slug);
