// Pengaturan umum situs.
// Aturan menulis teks: tulis di antara tanda kutip "...". Jika teks Anda
// membutuhkan tanda kutip, gunakan kutip tunggal ' di dalamnya.
export const site = {
  name: "Qalby Learn",
  tagline: "Belajar dengan Hati, Mengelola dengan Cerdas",
  subtitle: "Assessment and Education", // teks di bawah logo
  logo: {
    full: "/brand/logo-qalbylearn.png",
    mark: "/brand/logo-q.png",
  },
  description:
    "Qalby Learn adalah portal ekosistem aplikasi pendidikan untuk madrasah, sekolah, dan pesantren: asesmen, administrasi guru dan kepala madrasah, rapat, hingga kegiatan santri, lengkap dengan artikel dan berita.",
  // Alamat website. Ganti jika nanti memakai domain sendiri (misalnya https://qalbylearn.id).
  url: "https://qalby-learn.vercel.app",
  contact: {
    email: "akmmedia01@gmail.com",
    whatsapp: "0812-8505-9808",
    // Nomor WhatsApp format internasional (62 + nomor tanpa 0 di depan), tanpa spasi.
    whatsappIntl: "6281285059808",
    address: "Maroangin, Tinggi Moncong, Kab. Gowa, Sulawesi Selatan",
  },
  social: [
    { name: "TikTok", href: "https://www.tiktok.com/@qalbylearn" },
    { name: "YouTube", href: "https://www.youtube.com/@Qalbylearn" },
  ],
  nav: [
    { label: "Beranda", href: "/" },
    { label: "Aplikasi", href: "/aplikasi" },
    { label: "Artikel", href: "/artikel" },
    { label: "News", href: "/news" },
    { label: "Tentang", href: "/tentang" },
    { label: "Kontak", href: "/kontak" },
  ],
};

// Halaman Tentang Kami
export const about = {
  intro:
    "Qalby Learn menghadirkan aplikasi pendidikan yang praktis, mudah digunakan, dan lahir dari kebutuhan nyata madrasah. Semua aplikasi kini dapat diakses dari satu platform.",
  developer: {
    name: "Andi Kurnia Muin, S.Pd.I., M.Pd.",
    role: "Kepala Madrasah · Pengembang Aplikasi Pendidikan",
    // Satu teks = satu paragraf
    bio: [
      "Andi Kurnia Muin, S.Pd.I., M.Pd. adalah Kepala Madrasah sekaligus pengembang aplikasi pendidikan, peneliti, dan evaluator di bidang pendidikan. Ia menggabungkan pengalaman kepemimpinan di madrasah dengan keahlian teknologi untuk menghadirkan solusi digital yang menjawab kebutuhan nyata satuan pendidikan.",
      "Karya digitalnya mencakup aplikasi pembelajaran, asesmen, manajemen kegiatan, administrasi guru, sistem pendukung kepala madrasah, hingga pengelolaan keuangan madrasah. Semua aplikasi tersebut dirancang agar praktis, mudah digunakan, dan meningkatkan efisiensi serta mutu layanan pendidikan.",
      "Sebagai akademisi, ia aktif menulis buku ber-ISBN serta artikel ilmiah di jurnal nasional dan internasional. Ia juga produktif membagikan gagasan melalui berbagai platform digital. Komitmennya adalah mendorong transformasi digital madrasah yang berbasis data, inovatif, dan berorientasi pada peningkatan kualitas pembelajaran.",
    ],
  },
  vision:
    "Menjadi pengembang inovasi teknologi pendidikan yang unggul, berbasis riset, dan berlandaskan nilai-nilai keislaman, guna mewujudkan madrasah yang modern, efektif, dan bermutu.",
  mission: [
    "Mengembangkan aplikasi pendidikan yang inovatif, mudah digunakan, dan tepat guna untuk mendukung pembelajaran, asesmen, serta tata kelola madrasah.",
    "Menghasilkan dan menyebarluaskan riset serta evaluasi pendidikan sebagai dasar pengambilan keputusan dan pengembangan produk digital yang berkualitas.",
    "Memberdayakan guru, kepala madrasah, dan tenaga kependidikan melalui literasi digital, karya ilmiah, dan berbagi praktik baik untuk kemajuan pendidikan Indonesia.",
  ],
};

// Statistik beranda
export const stats = [
  { value: "50", label: "Sekolah pengguna" },
  { value: "450", label: "Guru" },
  { value: "2.500", label: "Siswa" },
];

// Testimoni pengguna. Bagian testimoni di Beranda hanya tampil jika daftar ini diisi.
// Contoh format:
// { quote: "Isi testimoni...", name: "Nama", role: "Guru, Nama Sekolah" },
export const testimonials: { quote: string; name: string; role: string }[] = [];
