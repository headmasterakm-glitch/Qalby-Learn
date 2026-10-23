// Data aplikasi ekosistem Qalby.
// Tambah aplikasi baru cukup dengan menyalin satu blok { ... } di bawah,
// lalu ubah isinya. Semua halaman (Beranda, Katalog, Detail, Masuk, Footer)
// akan menyesuaikan otomatis.
//
// Aturan menulis teks: tulis di antara tanda kutip "...". Jika teks Anda
// membutuhkan tanda kutip, gunakan kutip tunggal ' di dalamnya.

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
  name: string; // nama pendek yang tampil di kartu
  fullName: string; // nama lengkap aplikasi
  roles: Role[]; // dipakai untuk filter peran
  roleLabel: string; // label peran yang tampil
  short: string; // keterangan sangat singkat (2–5 kata)
  description: string; // deskripsi lengkap
  features: string[]; // fitur utama
  audience: string; // siapa penggunanya
  guide: string[]; // panduan singkat, urut langkah demi langkah
  loginNote?: string; // keterangan cara masuk
  extraLinks?: { label: string; url: string }[]; // tautan tambahan
  screenshots: string[]; // path gambar di folder public, contoh "/screenshots/asesmen-1.png"
  url: string;
  loginUrl?: string;
  icon: IconKey;
  tone: "teal" | "gold" | "blue" | "clay" | "violet" | "green";
  active: boolean; // false = disembunyikan dari website
  order: number; // urutan tampil
};

export const apps: AppItem[] = [
    {
    slug: "all-event",
    name: "All Event",
    fullName: "All Event — Aplikasi Pengelolaan Kegiatan",
    roles: ["Umum", "Siswa"],
    roleLabel: "Panitia & Peserta",
    short: "Pendaftaran hingga sertifikat",
    description:
      "Aplikasi web untuk mengelola berbagai kegiatan lembaga, seperti perkemahan, lomba, pelatihan, dan seminar. Seluruh proses dikelola dalam satu aplikasi yang dapat dibuka dari HP, mulai dari pendaftaran peserta, kartu QR, absensi, dan kuis sampai sertifikat.",
    features: [
      "Pendaftaran peserta secara daring dari HP atau laptop.",
      "Kartu peserta ber-QR untuk absensi cepat oleh panitia di setiap sesi kegiatan.",
      "Absensi dengan pemindai kamera, yang rekapnya tersimpan otomatis.",
      "Kuis untuk peserta selama kegiatan berlangsung.",
      "Sertifikat yang dapat diajukan dan diunduh sendiri oleh peserta.",
    ],
    audience:
      "Panitia kegiatan sekolah, madrasah, dan pesantren, serta peserta kegiatan.",
    guide: [
      "Buka aplikasi All Event di browser HP atau laptop.",
      "Peserta memilih kegiatan, lalu mengisi formulir pendaftaran.",
      "Setelah disetujui panitia, peserta mengunduh kartu ber-QR.",
      "Tunjukkan kode QR kepada panitia di setiap sesi agar kehadiran tercatat.",
      "Setelah kegiatan selesai, ajukan dan unduh sertifikat.",
    ],
    loginNote: "Peserta mendaftar langsung dari halaman utama aplikasi. Panitia masuk dengan akun yang diberikan admin.",
    screenshots: [],
    url: "https://allaventqalby.netlify.app",
    loginUrl: "https://allaventqalby.netlify.app",
    icon: "santri",
    tone: "gold",
    active: true,
    order: 7,
  },
  {
    slug: "asesmen-terpadu",
    name: "Qalby Learn Asesmen",
    fullName: "Qalby Learn — Aplikasi Asesmen Terpadu",
    roles: ["Guru", "Siswa"],
    roleLabel: "Guru & Siswa",
    short: "Asesmen & analisis butir soal",
    description:
      "Aplikasi asesmen untuk sekolah, madrasah, dan pesantren yang menyatukan seluruh siklus penilaian: kisi-kisi, penulisan dan telaah soal, ujian CBT maupun luring, koreksi, analisis butir soal otomatis, laporan, sampai tindak lanjut remedial dan pengayaan. Mendukung Kurikulum Merdeka dan Kurikulum Berbasis Cinta (KBC). Setiap tahap bisa dikerjakan manual atau dibantu AI.",
    features: [
      "Analisis butir soal otomatis: tingkat kesukaran, daya pembeda, efektivitas pengecoh, dan reliabilitas (KR-20/Alpha) langsung muncul setelah ujian, lengkap dengan keputusan Dipakai, Direvisi, atau Dibuang.",
      "Observasi sikap KBC (Panca Cinta): guru di kelas dan musrif/musrifah di asrama mengisi lembar observasi dari HP, lalu hasilnya direkap per dimensi dan instrumennya diuji validitas serta reliabilitasnya.",
      "Ujian CBT dan luring: siswa cukup memasukkan kode ujian tanpa email. Jawaban tersimpan di perangkat saat internet putus dan terkirim otomatis saat tersambung.",
      "Asisten AI: membantu menyusun kisi-kisi, membuat draf soal, menelaah soal, memberi saran skor uraian, dan menulis rencana remedial. Keputusan akhir tetap di tangan guru.",
      "Dokumen administrasi sekali klik: kisi-kisi, naskah soal, kartu soal, analisis butir, dan program remedial-pengayaan tercetak berkop sekolah, siap untuk supervisi.",
    ],
    audience:
      "Guru dan admin sekolah, madrasah, atau pesantren yang menyusun dan menganalisis asesmen; siswa yang mengikuti ujian; serta musrif/musrifah yang mengisi observasi sikap.",
    guide: [
      "Buka halaman login, daftar akun, lalu pilih Daftarkan sekolah baru. Guru lain cukup memilih Gabung ke sekolah dengan kode dari admin.",
      "Tambahkan kelas dan tempel daftar siswa dari Excel di menu Kelas & Siswa.",
      "Klik Buat Asesmen Baru, susun kisi-kisi, tulis atau buat soal, lalu telaah.",
      "Di tahap Rakit & Jadwal, terbitkan ujian dan bagikan kode ujian ke siswa.",
      "Setelah siswa selesai, buka tahap Analisis Butir, Laporan, dan Tindak Lanjut.",
    ],
    loginNote: "Guru masuk lewat halaman login. Siswa yang akan ujian cukup membuka halaman ujian dan memasukkan kode ujian.",
    extraLinks: [{ label: "Halaman ujian siswa", url: "https://qalbylearn.netlify.app/ujian.html" }],
    screenshots: [],
    url: "https://qalbylearn.netlify.app",
    loginUrl: "https://qalbylearn.netlify.app/app.html",
    icon: "assessment",
    tone: "blue",
    active: true,
    order: 1,
  },
  {
    slug: "adm-guru-karyawan",
    name: "ADM Guru & Karyawan",
    fullName: "Administrasi Guru & Karyawan PPM Darul Mahfudz",
    roles: ["Guru", "Kepala Sekolah"],
    roleLabel: "Guru & Karyawan",
    short: "Kinerja, absensi & jurnal guru",
    description:
      "Aplikasi web untuk mengelola administrasi guru dan karyawan di lingkungan PPM Darul Mahfudz (MTs, MA, MDT, SPM Ula, serta Keamanan & Bidang Usaha). Mencakup penilaian kinerja, absensi, jurnal guru, kelengkapan dokumen, serta rekap gaji dan keuangan untuk bendahara.",
    features: [
      "Raport kinerja guru dan karyawan: skor otomatis dari kehadiran, kelengkapan administrasi, ketepatan nilai, dan supervisi, lengkap dengan nilai budaya kerja.",
      "Absen harian dan potongan otomatis: piket menandai kehadiran, lalu potongan dihitung dari keterlambatan dan ketidakhadiran.",
      "Jurnal guru: jurnal mengajar dan jurnal harian (wali kelas, piket, panitia, pembina, dan tugas lain) yang terhubung ke pimpinan masing-masing lembaga.",
      "Input dokumen administrasi: centang kelengkapan dokumen, dengan kolom link Google Drive untuk tiap dokumen.",
      "Rekap bendahara: rekap gaji, kehadiran, potongan, tugas tambahan, keuangan, dan iuran santri, yang bisa diunduh dalam format Word, Excel, dan PDF.",
    ],
    audience: "Kepala madrasah, guru piket, guru, karyawan, dan bendahara di lingkungan PPM Darul Mahfudz.",
    guide: [
      "Buka link aplikasi di browser.",
      "Masuk dengan email dan kata sandi akun lembaga yang diberikan admin.",
      "Pilih menu sesuai peran: kepala madrasah, guru piket, guru, atau bendahara.",
      "Isi data (absen, jurnal, atau dokumen), lalu klik Simpan.",
      "Untuk laporan, buka rekap lalu klik Cetak atau unduh PDF, Word, atau Excel.",
    ],
    loginNote: "Halaman login muncul otomatis saat link dibuka.",
    screenshots: [],
    url: "https://admgurudarulmahfudz.netlify.app",
    icon: "teacher",
    tone: "gold",
    active: true,
    order: 2,
  },
  {
    slug: "adm-kamad",
    name: "ADM KAMAD",
    fullName: "Administrasi Kepala Madrasah (ADM KAMAD) PPM Darul Mahfudz",
    roles: ["Kepala Sekolah"],
    roleLabel: "Kepala Madrasah",
    short: "Administrasi kepala madrasah",
    description:
      "Aplikasi administrasi digital untuk kepala madrasah di lingkungan PPM Darul Mahfudz, yaitu SPM Ula, MTs, MA, dan MDT. Isinya mencakup perencanaan, data guru dan tendik, supervisi, penilaian kinerja dan PKKM, budaya Kurikulum Berbasis Cinta (KBC), serta agenda dan persuratan. Semua dokumen bisa dicetak langsung dari aplikasi.",
    features: [
      "Perencanaan madrasah: menyusun RKJM 4 tahun, RKTM/RKAM beserta anggaran dan statusnya, serta daftar periksa Kurikulum Operasional Madrasah.",
      "Guru & tendik dan supervisi: mengelola data PTK, mencetak SK pembagian tugas, serta mencatat supervisi akademik dan manajerial lengkap dengan instrumen penilaian dan tindak lanjutnya.",
      "Kinerja & PKKM: menilai diri dengan instrumen PKKM, menilai kinerja guru, lalu mencetak instrumen dan rekapnya.",
      "Budaya Cinta (KBC): menyusun program pembiasaan Panca Cinta, mengisi jurnal keteladanan kepala, dan mengevaluasi KBC tiap semester.",
      "Agenda & surat: mengelola agenda kepala dan register surat masuk/keluar, mencetak surat tugas, SK tim, undangan rapat, dan surat keterangan aktif, serta membuat cadangan data.",
    ],
    audience: "Kepala madrasah SPM Ula, MTs, MA, dan MDT di lingkungan PPM Darul Mahfudz.",
    guide: [
      "Buka aplikasi dan masuk dengan email dan kata sandi.",
      "Pilih lembaga yang dikelola (SPM Ula, MTs, MA, atau MDT). Lembaga bisa diganti kapan saja lewat tombol Ganti lembaga.",
      "Lengkapi Pengaturan: alamat kop surat, NPSN, NIP kepala, periode RKJM, visi, dan misi.",
      "Isi menu sesuai kebutuhan: Perencanaan, Guru & Tendik, Supervisi, Kinerja & PKKM, Kewirausahaan, Budaya Cinta, dan Agenda & Surat.",
      "Pantau kelengkapan dokumen, agenda terdekat, dan tenggat di Beranda.",
      "Cetak dokumen yang diperlukan, dan unduh cadangan data (.json) secara berkala.",
    ],
    loginNote: "Halaman login langsung muncul saat aplikasi dibuka. Masuk memakai email dan kata sandi.",
    screenshots: [],
    url: "https://admkamad.netlify.app/",
    icon: "headmaster",
    tone: "clay",
    active: true,
    order: 3,
  },
  {
    slug: "qalby-meeting",
    name: "Qalby Meeting",
    fullName: "Qalby Meeting — Notulen & Daftar Hadir Rapat",
    roles: ["Umum"],
    roleLabel: "Umum",
    short: "Notulen & daftar hadir rapat",
    description:
      "Aplikasi notulen dan daftar hadir rapat digital untuk sekolah dan lembaga pendidikan. Notulis mencatat jalannya rapat, sementara peserta mengisi daftar hadir dan tanda tangan dari HP masing-masing melalui link. Hasilnya bisa diunduh sebagai dokumen Word atau PDF lengkap dengan kop lembaga.",
    features: [
      "Daftar hadir lewat link: peserta mengisi dari HP tanpa akun, termasuk tanda tangan digital. Nama mereka langsung muncul di layar notulis.",
      "Formulir daftar hadir yang bisa diubah: notulis bisa menambah, menghapus, dan mengurutkan pertanyaan, dengan 8 jenis jawaban seperti jawaban singkat, pilihan ganda, kotak centang, dan nomor HP.",
      "Notulen rapat: mencatat rincian rapat, pembahasan, keputusan, dan tindak lanjut.",
      "Unduh Word dan PDF: notulen dan daftar hadir tersusun rapi dengan kop surat, logo lembaga, dan kolom tanda tangan pimpinan.",
      "Profil lembaga: nama, alamat, logo, dan pimpinan diatur sekali, lalu otomatis dipakai di semua dokumen.",
    ],
    audience: "Notulis dan pimpinan rapat di sekolah, madrasah, dan lembaga pendidikan, serta peserta rapat (tanpa perlu akun).",
    guide: [
      "Buka aplikasi dan masuk dengan akun notulis.",
      "Isi Profil lembaga (nama, alamat, logo, pimpinan), lalu simpan.",
      "Tekan Buat rapat baru dan isi rincian rapat di tab Notulen.",
      "Atur pertanyaan daftar hadir di tab Formulir, lalu simpan.",
      "Bagikan link daftar hadir ke peserta lewat WhatsApp dari tab Daftar hadir.",
      "Setelah rapat selesai, tekan Tutup pengisian, lalu unduh notulen dan daftar hadir di tab Unduh.",
    ],
    loginNote: "Notulis masuk di halaman awal. Peserta rapat tidak perlu login; cukup membuka link daftar hadir yang dibagikan notulis.",
    screenshots: [],
    url: "https://qalbymeeting.netlify.app/",
    icon: "meeting",
    tone: "violet",
    active: true,
    order: 4,
  },
  {
    slug: "hari-santri-nasional-2026",
    name: "Hari Santri Nasional 2026",
    fullName: "Hari Santri Nasional 2026 — Kemah Santri PPM Darul Mahfudz",
    roles: ["Umum", "Siswa"],
    roleLabel: "Santri & Panitia",
    short: "Kemah Santri 19–22 Oktober",
    description:
      "Aplikasi web untuk mengelola Hari Santri Nasional 2026 di PPM Darul Mahfudz Lekopadis (19–22 Oktober 2026). Aplikasi ini mengurus pendaftaran, kartu QR, absensi oleh panitia, kuis, catatan Expo Santri, dan sertifikat.",
    features: [
      "Pendaftaran peserta Kemah Santri, Bina Pendamping, Expo Santri, serta peserta dan mushahhih Bahts al-Masa’il, dengan link dokumen persyaratan dari Google Drive.",
      "Kartu peserta ber-QR dan absensi oleh panitia dengan pemindai kamera, termasuk pembatalan jika salah pindai.",
      "Kuis refleksi harian, nilai, dan kuis Bahts al-Masa’il.",
      "Catatan penjualan, pengeluaran, dan untung/rugi Expo Santri, yang hasilnya bisa diunduh dalam bentuk Excel.",
      "Pengajuan dan unduh sertifikat (PNG atau PDF) setelah disetujui admin.",
    ],
    audience: "Santri peserta kegiatan, pendamping, peserta Expo Santri dan Bahts al-Masa’il, serta panitia dan admin kegiatan.",
    guide: [
      "Buka link aplikasi di browser ponsel, lalu pilih Daftar.",
      "Pilih jenis kegiatan, isi data, dan tempel link Google Drive dokumen persyaratan.",
      "Simpan kode peserta (HSN26-XXXXX) dan tunggu persetujuan admin.",
      "Unduh kartu di menu Kartu, lalu tunjukkan QR ke panitia di setiap kegiatan.",
      "Ikuti kegiatan: isi kuis, catat penjualan Expo, atau hadiri sesi Bahts al-Masa’il.",
      "Setelah pengajuan dibuka admin, ajukan sertifikat di Kartu lalu Sertifikat.",
    ],
    loginNote: "Buka menu Daftar. Peserta memilih tab Masuk peserta dan memakai kode peserta. Panitia dan admin memilih tab Panitia/Admin dan memakai email serta kata sandi.",
    screenshots: [],
    url: "https://harisantri2026.netlify.app",
    icon: "santri",
    tone: "green",
    active: true,
    order: 5,
  },
  {
    slug: "rapat-mts-darul-mahfudz",
    name: "Rapat MTs Darul Mahfudz",
    fullName: "Notulen & Daftar Hadir Rapat MTs Darul Mahfudz",
    roles: ["Umum"],
    roleLabel: "MTs Darul Mahfudz",
    short: "Notulen rapat MTs",
    description:
      "Aplikasi notulen dan daftar hadir rapat digital untuk MTs Darul Mahfudz. Notulis mencatat jalannya rapat, sementara peserta mengisi daftar hadir dan tanda tangan dari HP masing-masing melalui link. Notulen dan daftar hadir bisa diunduh sebagai dokumen Word atau PDF lengkap dengan kop madrasah.",
    features: [
      "Daftar hadir lewat link: peserta mengisi nama, jabatan, mata pelajaran, nomor HP, kesan, dan saran, lalu menandatangani langsung dari HP. Nama mereka segera muncul di layar notulis.",
      "Berbagi lewat WhatsApp: link daftar hadir bisa disalin atau langsung dibagikan ke grup WhatsApp.",
      "Pengisian bisa ditutup: notulis menutup pengisian setelah rapat selesai, sehingga daftar hadir tidak berubah lagi.",
      "Notulen rapat: mencatat agenda, waktu, tempat, pimpinan rapat, moderator, pembahasan, keputusan, dan tindak lanjut.",
      "Unduh Word dan PDF: notulen dan daftar hadir tersusun rapi dengan kop MTs Darul Mahfudz dan kolom tanda tangan.",
    ],
    audience: "Notulis, pimpinan, dan peserta rapat di MTs Darul Mahfudz.",
    guide: [
      "Buka aplikasi dan masuk sebagai notulis.",
      "Buat rapat baru, lalu isi rincian rapat di tab Notulen.",
      "Di tab Daftar hadir, salin link atau tekan Bagikan lewat WhatsApp untuk mengirimnya ke peserta.",
      "Peserta membuka link, mengisi data, tanda tangan, lalu mengirim. Notulis juga bisa mengisikan untuk peserta lewat kolom Isi di perangkat ini.",
      "Setelah rapat, lengkapi notulen lalu tekan Tutup pengisian.",
      "Unduh notulen dan daftar hadir di tab Unduh, dalam format Word atau PDF.",
    ],
    loginNote: "Notulis masuk dengan email dan kata sandi di halaman awal. Peserta tidak perlu login; cukup mengisi lewat link daftar hadir yang dibagikan notulis.",
    screenshots: [],
    url: "https://admrapat.netlify.app/",
    icon: "meeting",
    tone: "teal",
    active: true,
    order: 6,
  },
];

export const activeApps = apps
  .filter((a) => a.active)
  .sort((a, b) => a.order - b.order);

export const getApp = (slug: string) => activeApps.find((a) => a.slug === slug);
