// Berita Qalby Learn.
// Tambah berita baru dengan menyalin satu blok { ... } lalu mengubah isinya.
// content: satu teks = satu paragraf.

export type NewsItem = {
  slug: string; // bagian alamat: /news/<slug>
  title: string;
  summary: string;
  type: "Rilis Fitur" | "Pembaruan" | "Kegiatan" | "Pengumuman";
  date: string; // format: TAHUN-BULAN-TANGGAL
  content?: string[];
};

export const news: NewsItem[] = [
  {
    slug: "qalby-learn-hadir-sebagai-pusat-aplikasi",
    title: "Qalby Learn Hadir sebagai Pusat Aplikasi Pendidikan",
    summary: "Seluruh aplikasi Qalby kini dapat diakses dari satu platform, lengkap dengan artikel dan berita.",
    type: "Pengumuman",
    date: "2026-10-14",
    content: [
      "Qalby Learn resmi hadir sebagai pusat ekosistem aplikasi pendidikan. Melalui satu alamat, guru, kepala madrasah, siswa, dan panitia kegiatan dapat menemukan dan membuka aplikasi yang mereka butuhkan.",
      "Aplikasi yang tersedia saat ini meliputi Qalby Learn Asesmen, Administrasi Guru & Karyawan, ADM KAMAD, Qalby Meeting, Hari Santri Nasional 2026, dan Rapat MTs Darul Mahfudz. Setiap aplikasi dilengkapi halaman detail berisi fitur dan panduan singkat.",
      "Qalby Learn juga menyediakan artikel seputar asesmen, pengajaran, dan panduan aplikasi. Pertanyaan dan permintaan pendampingan dapat disampaikan melalui halaman Kontak.",
    ],
  },
  {
    slug: "pendaftaran-hari-santri-nasional-2026",
    title: "Pendaftaran Hari Santri Nasional 2026 Dibuka melalui Aplikasi",
    summary: "Kemah Santri PPM Darul Mahfudz Lekopadis berlangsung 19–22 Oktober 2026. Daftar, ambil kartu QR, dan ajukan sertifikat lewat aplikasi.",
    type: "Kegiatan",
    date: "2026-10-13",
    content: [
      "Peringatan Hari Santri Nasional 2026 di PPM Darul Mahfudz Lekopadis akan berlangsung pada 19–22 Oktober 2026. Pendaftaran peserta Kemah Santri, Bina Pendamping, Expo Santri, serta peserta dan mushahhih Bahts al-Masa’il dilakukan melalui aplikasi Hari Santri Nasional 2026.",
      "Peserta yang sudah disetujui akan mendapatkan kartu ber-QR untuk absensi di setiap kegiatan. Aplikasi ini juga menyediakan kuis refleksi harian, pencatatan penjualan Expo Santri, dan pengajuan sertifikat.",
    ],
  },
  {
    slug: "qalby-meeting-formulir-daftar-hadir",
    title: "Qalby Meeting: Formulir Daftar Hadir Kini Bisa Diatur Sendiri",
    summary: "Notulis dapat menambah, menghapus, dan mengurutkan pertanyaan daftar hadir dengan berbagai jenis jawaban.",
    type: "Rilis Fitur",
    date: "2026-10-08",
    content: [
      "Qalby Meeting memungkinkan notulis mengatur sendiri formulir daftar hadir untuk setiap rapat. Pertanyaan dapat ditambah, dihapus, dan diurutkan, dengan berbagai jenis jawaban seperti jawaban singkat, pilihan ganda, kotak centang, dan nomor HP.",
      "Peserta tetap mengisi daftar hadir dan tanda tangan dari HP tanpa perlu akun. Notulen dan daftar hadir dapat diunduh dalam format Word atau PDF lengkap dengan kop dan logo lembaga.",
    ],
  },
  {
    slug: "asesmen-dukung-observasi-panca-cinta",
    title: "Qalby Learn Asesmen Mendukung Observasi Sikap Panca Cinta",
    summary: "Guru dan musrif/musrifah dapat mengisi lembar observasi KBC dari HP, lengkap dengan rekap per dimensi.",
    type: "Rilis Fitur",
    date: "2026-10-01",
    content: [
      "Qalby Learn Asesmen kini mendukung observasi sikap Kurikulum Berbasis Cinta (Panca Cinta). Guru di kelas dan musrif/musrifah di asrama dapat mengisi lembar observasi langsung dari HP.",
      "Hasil observasi direkap per dimensi, dan instrumennya dapat diuji validitas serta reliabilitasnya, sehingga penilaian sikap menjadi lebih terukur.",
    ],
  },
];

export const sortedNews = () => [...news].sort((a, b) => b.date.localeCompare(a.date));

export const latestNews = (n = 3) => sortedNews().slice(0, n);

export const getNews = (slug: string) => news.find((n) => n.slug === slug);
