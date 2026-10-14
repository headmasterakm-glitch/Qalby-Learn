// Data aplikasi ekosistem Qalby.
// Tambah aplikasi baru cukup dengan menambah satu objek di daftar ini —
// tampilan akan menyesuaikan otomatis. (Tahap panel admin akan memindahkan
// data ini ke database.)

export type Role = "Siswa" | "Guru" | "Kepala Sekolah" | "Umum";

export type IconKey =
  | "student"
  | "teacher"
  | "assessment"
  | "headmaster"
  | "meeting"
  | "santri";

export type AppItem = {
  slug: string;
  name: string;
  roles: Role[];
  roleLabel: string;
  short: string;
  description: string;
  features: string[];
  url: string;
  icon: IconKey;
  tone: "teal" | "gold" | "blue" | "clay" | "violet" | "green";
  active: boolean;
  order: number;
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
