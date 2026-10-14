// Pengaturan umum situs. Ganti nilai bertanda [ ... ] dengan data asli.
export const site = {
  name: "Qalby Learn",
  tagline: "Belajar dengan Hati, Mengelola dengan Cerdas",
  subtitle: "Assessment and Education", // teks di bawah logo
  logo: {
    full: "/brand/logo-qalbylearn.png",
    mark: "/brand/logo-q.png",
  },
  description:
    "Qalby Learn adalah portal ekosistem aplikasi pendidikan untuk siswa, guru, dan kepala sekolah, lengkap dengan artikel dan berita pendidikan terbaru.",
  url: "https://qalbylearn.id", // [ganti dengan domain Anda]
  contact: {
    email: "[email@domain.com]",
    whatsapp: "[08xx-xxxx-xxxx]",
    // Nomor WhatsApp format internasional TANPA tanda + dan spasi,
    // contoh 081234567890 → "6281234567890". Dipakai formulir Kontak.
    whatsappIntl: "62xxxxxxxxxx",
    address: "[Alamat lengkap]",
  },
  social: [
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "Facebook", href: "#" },
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

// Halaman Tentang Kami — ganti dengan profil asli.
export const about = {
  intro:
    "Qalby Learn lahir dari kebutuhan sekolah akan aplikasi yang sederhana, terhubung, dan dibuat dengan hati. Semua aplikasi Qalby kini dapat diakses dari satu platform.",
  developer: {
    name: "[Nama Pengembang]",
    role: "[Jabatan / Profesi]",
    bio: "[Profil singkat pengembang: latar belakang, pengalaman di dunia pendidikan, dan alasan membuat aplikasi Qalby.]",
  },
  vision: "[Visi Qalby Learn, contoh: Menjadi ekosistem aplikasi pendidikan yang memudahkan setiap sekolah di Indonesia.]",
  mission: [
    "[Misi 1, contoh: Menyediakan aplikasi yang mudah digunakan oleh guru, siswa, dan kepala sekolah.]",
    "[Misi 2]",
    "[Misi 3]",
  ],
};

// Statistik beranda — DATA CONTOH, ganti dengan angka sebenarnya.
export const stats = [
  { value: "[0]", label: "Sekolah pengguna" },
  { value: "[0]", label: "Guru aktif" },
  { value: "[0]", label: "Siswa terdaftar" },
];

// Testimoni — DATA CONTOH, ganti dengan testimoni asli.
export const testimonials = [
  {
    quote: "[Kutipan testimoni dari guru pengguna Q_Teacher.]",
    name: "[Nama Guru]",
    role: "Guru, [Nama Sekolah]",
  },
  {
    quote: "[Kutipan testimoni dari kepala sekolah pengguna Q_Headmaster.]",
    name: "[Nama Kepala Sekolah]",
    role: "Kepala Sekolah, [Nama Sekolah]",
  },
  {
    quote: "[Kutipan testimoni dari siswa pengguna Q_Student.]",
    name: "[Nama Siswa]",
    role: "Siswa, [Nama Sekolah]",
  },
];
