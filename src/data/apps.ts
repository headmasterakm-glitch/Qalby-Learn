// Data aplikasi ekosistem Qalby.
// Tambah aplikasi baru cukup dengan menyalin satu blok { ... } di bawah,
// lalu ubah isinya. Semua halaman (Beranda, Katalog, Detail, Masuk, Footer)
// akan menyesuaikan otomatis.
//
// Yang paling penting diisi:
//   url       : alamat aplikasi (contoh: "https://qstudent.example.com")
//   loginUrl  : alamat halaman login aplikasi (boleh sama dengan url)
//   description, features, audience, guide : teks penjelasan

export type Role = "Siswa" | "Guru" | "Kepala Sekolah" | "Umum";

export type IconKey =
  | "student"
  | "teacher"
  | "assessment"
  | "headmaster"
  | "meeting"
  | "santri";

export type AppItem = {
  slug: string; // bagian alamat halaman detail: /aplikasi/<slug>
  name: string;
  roles: Role[];
  roleLabel: string;
  short: string; // deskripsi sangat singkat (2–4 kata)
  description: string; // deskripsi lengkap
  features: string[]; // fitur utama
  audience: string; // siapa penggunanya
  guide: string[]; // panduan singkat, urut langkah demi langkah
  screenshots: string[]; // path gambar di folder public, contoh "/screenshots/q-student-1.png"
  url: string;
  loginUrl?: string;
  icon: IconKey;
  tone: "teal" | "gold" | "blue" | "clay" | "violet" | "green";
  active: boolean; // false = disembunyikan dari website
  order: number; // urutan tampil
};

export const apps: AppItem[] = [
  {
    slug: "q-student",
    name: "Q_Student",
    roles: ["Siswa"],
    roleLabel: "Siswa",
    short: "Ruang belajar siswa",
    description:
      "[Deskripsi Q_Student, misalnya: materi belajar, tugas, dan jadwal pelajaran dalam satu aplikasi.]",
    features: ["[Fitur 1]", "[Fitur 2]", "[Fitur 3]"],
    audience: "Siswa yang ingin mengakses materi, tugas, dan jadwal pelajaran dari mana saja.",
    guide: [
      "Buka aplikasi melalui tombol Buka Aplikasi.",
      "Masuk menggunakan akun yang diberikan sekolah.",
      "[Langkah berikutnya]",
    ],
    screenshots: [],
    url: "#",
    icon: "student",
    tone: "teal",
    active: true,
    order: 1,
  },
  {
    slug: "q-teacher",
    name: "Q_Teacher",
    roles: ["Guru"],
    roleLabel: "Guru",
    short: "Asisten kerja guru",
    description:
      "[Deskripsi Q_Teacher, misalnya: administrasi kelas, presensi, dan perangkat ajar guru.]",
    features: ["[Fitur 1]", "[Fitur 2]", "[Fitur 3]"],
    audience: "Guru mata pelajaran dan wali kelas.",
    guide: [
      "Buka aplikasi melalui tombol Buka Aplikasi.",
      "Masuk menggunakan akun guru.",
      "[Langkah berikutnya]",
    ],
    screenshots: [],
    url: "#",
    icon: "teacher",
    tone: "gold",
    active: true,
    order: 2,
  },
  {
    slug: "q-assessment",
    name: "Q_Assessment",
    roles: ["Guru", "Siswa"],
    roleLabel: "Guru & Siswa",
    short: "Ujian & penilaian",
    description:
      "[Deskripsi Q_Assessment, misalnya: ujian daring, bank soal, dan rekap nilai otomatis.]",
    features: ["[Fitur 1]", "[Fitur 2]", "[Fitur 3]"],
    audience: "Guru yang menyusun dan menilai ujian, serta siswa yang mengerjakannya.",
    guide: [
      "Buka aplikasi melalui tombol Buka Aplikasi.",
      "Guru: buat bank soal dan jadwalkan ujian.",
      "Siswa: masuk dan kerjakan ujian sesuai jadwal.",
    ],
    screenshots: [],
    url: "#",
    icon: "assessment",
    tone: "blue",
    active: true,
    order: 3,
  },
  {
    slug: "q-headmaster",
    name: "Q_Headmaster",
    roles: ["Kepala Sekolah"],
    roleLabel: "Kepala Sekolah",
    short: "Kendali kepala sekolah",
    description:
      "[Deskripsi Q_Headmaster, misalnya: pemantauan kinerja guru, supervisi, dan laporan sekolah.]",
    features: ["[Fitur 1]", "[Fitur 2]", "[Fitur 3]"],
    audience: "Kepala sekolah dan wakil kepala sekolah.",
    guide: [
      "Buka aplikasi melalui tombol Buka Aplikasi.",
      "Masuk menggunakan akun kepala sekolah.",
      "[Langkah berikutnya]",
    ],
    screenshots: [],
    url: "#",
    icon: "headmaster",
    tone: "clay",
    active: true,
    order: 4,
  },
  {
    slug: "q-meeting",
    name: "Q_Meeting",
    roles: ["Umum"],
    roleLabel: "Umum",
    short: "Rapat & notulen",
    description:
      "[Deskripsi Q_Meeting, misalnya: jadwal rapat, notulen, dan daftar hadir rapat sekolah.]",
    features: ["[Fitur 1]", "[Fitur 2]", "[Fitur 3]"],
    audience: "Seluruh warga sekolah yang mengadakan atau mengikuti rapat.",
    guide: [
      "Buka aplikasi melalui tombol Buka Aplikasi.",
      "Buat jadwal rapat dan undang peserta.",
      "[Langkah berikutnya]",
    ],
    screenshots: [],
    url: "#",
    icon: "meeting",
    tone: "violet",
    active: true,
    order: 5,
  },
  {
    slug: "hari-santri-nasional",
    name: "Hari Santri Nasional",
    roles: ["Umum"],
    roleLabel: "Umum",
    short: "Peringatan Hari Santri",
    description:
      "[Deskripsi aplikasi Hari Santri Nasional, misalnya: informasi kegiatan, twibbon, dan ucapan peringatan 22 Oktober.]",
    features: ["[Fitur 1]", "[Fitur 2]", "[Fitur 3]"],
    audience: "Santri, siswa, guru, dan masyarakat umum.",
    guide: [
      "Buka aplikasi melalui tombol Buka Aplikasi.",
      "[Langkah berikutnya]",
    ],
    screenshots: [],
    url: "#",
    icon: "santri",
    tone: "green",
    active: true,
    order: 6,
  },
];

export const activeApps = apps
  .filter((a) => a.active)
  .sort((a, b) => a.order - b.order);

export const getApp = (slug: string) => activeApps.find((a) => a.slug === slug);
