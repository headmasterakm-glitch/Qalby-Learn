// DATA CONTOH (dummy) artikel. Ganti dengan artikel asli Anda.
// Tahap berikutnya: halaman /artikel dan /artikel/[slug] membaca data ini.

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Tips Mengajar" | "Teknologi Pendidikan" | "Parenting" | "Panduan Aplikasi";
  author: string;
  date: string; // format ISO: YYYY-MM-DD
  readMinutes: number;
  image?: string; // path gambar di /public, opsional
  tags: string[];
  content?: string[]; // isi artikel, satu teks = satu paragraf
};

export const articles: Article[] = [
  {
    slug: "lima-cara-membuat-kelas-lebih-hidup",
    title: "5 Cara Membuat Suasana Kelas Lebih Hidup",
    excerpt: "Strategi sederhana agar siswa lebih aktif bertanya dan berdiskusi di kelas.",
    category: "Tips Mengajar",
    author: "Tim Qalby",
    date: "2026-10-10",
    readMinutes: 5,
    tags: ["pembelajaran aktif", "kelas"],
  },
  {
    slug: "memanfaatkan-penilaian-digital",
    title: "Memanfaatkan Penilaian Digital untuk Umpan Balik yang Cepat",
    excerpt: "Bagaimana ujian daring membantu guru memberi umpan balik tepat waktu.",
    category: "Teknologi Pendidikan",
    author: "Tim Qalby",
    date: "2026-10-06",
    readMinutes: 4,
    tags: ["asesmen", "digital"],
  },
  {
    slug: "panduan-memulai-q-assessment",
    title: "Panduan Memulai Q_Assessment untuk Guru Baru",
    excerpt: "Langkah awal membuat bank soal dan menjadwalkan ujian pertama Anda.",
    category: "Panduan Aplikasi",
    author: "Tim Qalby",
    date: "2026-10-02",
    readMinutes: 6,
    tags: ["Q_Assessment", "panduan"],
  },
  {
    slug: "mendampingi-anak-belajar-di-rumah",
    title: "Mendampingi Anak Belajar di Rumah Tanpa Tekanan",
    excerpt: "Peran orang tua dalam menjaga semangat belajar anak setelah pulang sekolah.",
    category: "Parenting",
    author: "Tim Qalby",
    date: "2026-09-28",
    readMinutes: 5,
    tags: ["orang tua", "belajar di rumah"],
  },
  {
    slug: "supervisi-akademik-yang-efektif",
    title: "Supervisi Akademik yang Efektif bagi Kepala Sekolah",
    excerpt: "Merencanakan, melaksanakan, dan menindaklanjuti supervisi dengan data.",
    category: "Tips Mengajar",
    author: "Tim Qalby",
    date: "2026-09-22",
    readMinutes: 7,
    tags: ["kepala sekolah", "supervisi"],
  },
  {
    slug: "notulen-rapat-digital",
    title: "Rapat Sekolah Lebih Rapi dengan Notulen Digital",
    excerpt: "Mencatat keputusan rapat dan tindak lanjutnya agar tidak tercecer.",
    category: "Panduan Aplikasi",
    author: "Tim Qalby",
    date: "2026-09-15",
    readMinutes: 4,
    tags: ["Q_Meeting", "rapat"],
  },
];

export const sortedArticles = () =>
  [...articles].sort((a, b) => b.date.localeCompare(a.date));

export const latestArticles = (n = 3) => sortedArticles().slice(0, n);

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const articleCategories: Article["category"][] = [
  "Tips Mengajar",
  "Teknologi Pendidikan",
  "Parenting",
  "Panduan Aplikasi",
];
