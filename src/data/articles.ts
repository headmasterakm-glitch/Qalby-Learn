// Artikel Qalby Learn.
// Tambah artikel baru dengan menyalin satu blok { ... } lalu mengubah isinya.
// content: satu teks = satu paragraf.

export type Article = {
  slug: string; // bagian alamat: /artikel/<slug> (huruf kecil, pakai tanda -)
  title: string;
  excerpt: string;
  category: "Tips Mengajar" | "Teknologi Pendidikan" | "Parenting" | "Panduan Aplikasi";
  author: string;
  date: string; // format: TAHUN-BULAN-TANGGAL, contoh 2026-10-14
  readMinutes: number;
  image?: string; // path gambar di /public, opsional
  tags: string[];
  content?: string[];
};

export const articles: Article[] = [
  {
    slug: "panduan-memulai-qalby-learn-asesmen",
    title: "Panduan Memulai Qalby Learn Asesmen: Dari Kisi-kisi hingga Analisis Butir",
    excerpt: "Lima langkah menyiapkan sekolah, menyusun soal, menerbitkan ujian, dan membaca hasil analisis butir soal.",
    category: "Panduan Aplikasi",
    author: "Tim Qalby Learn",
    date: "2026-10-14",
    readMinutes: 4,
    tags: ["asesmen", "panduan", "analisis butir"],
    content: [
      "Qalby Learn Asesmen menyatukan seluruh siklus penilaian dalam satu aplikasi: kisi-kisi, penulisan dan telaah soal, ujian CBT maupun luring, koreksi, analisis butir soal, laporan, hingga tindak lanjut remedial dan pengayaan. Panduan ini membantu Anda memulai dari nol.",
      "Langkah 1 — Daftarkan sekolah. Buka halaman login, buat akun, lalu pilih Daftarkan sekolah baru. Guru lain di sekolah yang sama tidak perlu mendaftarkan ulang; mereka cukup memilih Gabung ke sekolah dengan kode yang dibagikan admin.",
      "Langkah 2 — Siapkan kelas dan siswa. Di menu Kelas & Siswa, tambahkan kelas lalu tempel daftar siswa langsung dari Excel. Cara ini jauh lebih cepat daripada mengetik nama satu per satu.",
      "Langkah 3 — Susun asesmen. Klik Buat Asesmen Baru, susun kisi-kisi, lalu tulis soal sendiri atau minta draf dari Asisten AI. Setelah itu lakukan telaah soal. Keputusan akhir tetap di tangan guru.",
      "Langkah 4 — Terbitkan ujian. Di tahap Rakit & Jadwal, terbitkan ujian dan bagikan kode ujian kepada siswa. Siswa cukup membuka halaman ujian dan memasukkan kode tanpa perlu email. Jika internet putus, jawaban tetap tersimpan di perangkat dan terkirim otomatis saat tersambung kembali.",
      "Langkah 5 — Analisis dan tindak lanjut. Setelah ujian selesai, buka tahap Analisis Butir untuk melihat tingkat kesukaran, daya pembeda, efektivitas pengecoh, dan reliabilitas soal. Lanjutkan ke Laporan dan Tindak Lanjut untuk menyusun program remedial dan pengayaan. Semua dokumen bisa dicetak berkop sekolah, siap untuk supervisi.",
    ],
  },
  {
    slug: "cara-mendaftar-kemah-santri-hsn-2026",
    title: "Cara Mendaftar Kemah Santri Hari Santri Nasional 2026",
    excerpt: "Langkah mendaftar, mendapatkan kartu QR, mengikuti kegiatan, hingga mengunduh sertifikat Hari Santri Nasional 2026.",
    category: "Panduan Aplikasi",
    author: "Tim Qalby Learn",
    date: "2026-10-13",
    readMinutes: 3,
    tags: ["hari santri", "kemah santri", "panduan"],
    content: [
      "Peringatan Hari Santri Nasional 2026 di PPM Darul Mahfudz Lekopadis berlangsung pada 19–22 Oktober 2026. Seluruh proses, mulai dari pendaftaran sampai sertifikat, dikelola melalui aplikasi Hari Santri Nasional 2026 yang dapat dibuka dari HP.",
      "Pendaftaran. Buka aplikasi di browser ponsel lalu pilih Daftar. Pilih jenis kegiatan (Kemah Santri, Bina Pendamping, Expo Santri, atau Bahts al-Masa’il), isi data, dan tempel link Google Drive berisi dokumen persyaratan.",
      "Simpan kode peserta. Setelah mendaftar, Anda akan menerima kode peserta dengan format HSN26-XXXXX. Simpan kode ini baik-baik karena dipakai untuk masuk ke aplikasi. Tunggu hingga pendaftaran disetujui admin.",
      "Kartu dan absensi. Unduh kartu peserta di menu Kartu. Tunjukkan kode QR pada kartu kepada panitia di setiap kegiatan agar kehadiran tercatat.",
      "Selama kegiatan, peserta dapat mengisi kuis refleksi harian, peserta Expo Santri dapat mencatat penjualan, dan peserta Bahts al-Masa’il dapat mengikuti kuisnya. Setelah pengajuan dibuka admin, ajukan sertifikat melalui menu Kartu lalu Sertifikat, dan unduh dalam format PNG atau PDF.",
    ],
  },
  {
    slug: "daftar-hadir-rapat-tanpa-kertas-qalby-meeting",
    title: "Daftar Hadir Rapat Tanpa Kertas dengan Qalby Meeting",
    excerpt: "Peserta mengisi daftar hadir dan tanda tangan dari HP, notulen langsung jadi dokumen Word atau PDF berkop lembaga.",
    category: "Panduan Aplikasi",
    author: "Tim Qalby Learn",
    date: "2026-10-10",
    readMinutes: 3,
    tags: ["rapat", "notulen", "daftar hadir"],
    content: [
      "Daftar hadir kertas sering tercecer, sulit dibaca, dan harus diketik ulang untuk laporan. Qalby Meeting memindahkan seluruh proses itu ke HP: peserta mengisi daftar hadir dan tanda tangan melalui link, sementara notulis mencatat jalannya rapat.",
      "Atur sekali, pakai berkali-kali. Isi Profil lembaga (nama, alamat, logo, dan pimpinan) satu kali saja. Data ini otomatis dipakai sebagai kop dan kolom tanda tangan di semua dokumen rapat.",
      "Buat rapat dan formulir. Tekan Buat rapat baru, isi rincian di tab Notulen, lalu atur pertanyaan daftar hadir di tab Formulir. Tersedia beberapa jenis jawaban, seperti jawaban singkat, pilihan ganda, kotak centang, dan nomor HP.",
      "Bagikan link. Dari tab Daftar hadir, kirim link ke grup WhatsApp peserta. Peserta tidak perlu membuat akun; nama mereka langsung muncul di layar notulis begitu formulir dikirim.",
      "Tutup dan unduh. Setelah rapat selesai, tekan Tutup pengisian agar daftar hadir tidak berubah lagi, lalu unduh notulen dan daftar hadir dalam format Word atau PDF di tab Unduh.",
    ],
  },
  {
    slug: "membaca-hasil-analisis-butir-soal",
    title: "Membaca Hasil Analisis Butir Soal: Kesukaran, Daya Pembeda, dan Pengecoh",
    excerpt: "Memahami angka-angka analisis butir agar guru bisa memutuskan soal mana yang dipakai, direvisi, atau dibuang.",
    category: "Teknologi Pendidikan",
    author: "Tim Qalby Learn",
    date: "2026-10-07",
    readMinutes: 5,
    tags: ["analisis butir", "asesmen", "kualitas soal"],
    content: [
      "Analisis butir soal membantu guru menilai kualitas setiap soal, bukan hanya nilai siswa. Dengan analisis ini, bank soal sekolah makin baik dari waktu ke waktu karena soal yang lemah dapat diperbaiki atau diganti.",
      "Tingkat kesukaran menunjukkan proporsi siswa yang menjawab benar. Nilai mendekati 1 berarti soal terlalu mudah, sedangkan nilai mendekati 0 berarti soal terlalu sukar. Soal yang baik umumnya berada di rentang sedang, dengan sebagian kecil soal mudah dan sukar sebagai variasi.",
      "Daya pembeda menunjukkan seberapa baik soal membedakan siswa yang menguasai materi dari yang belum. Soal dengan daya pembeda rendah, apalagi negatif, perlu ditelaah ulang. Bisa jadi kunci jawabannya keliru, kalimat soalnya membingungkan, atau materinya belum diajarkan.",
      "Efektivitas pengecoh khusus untuk soal pilihan ganda. Pengecoh yang baik dipilih oleh sebagian siswa yang belum menguasai materi. Pengecoh yang hampir tidak pernah dipilih sebaiknya diganti dengan pilihan yang lebih masuk akal.",
      "Reliabilitas (misalnya KR-20 atau Alpha) menggambarkan konsistensi tes secara keseluruhan. Di Qalby Learn Asesmen, semua angka ini muncul otomatis setelah ujian, lengkap dengan rekomendasi Dipakai, Direvisi, atau Dibuang, sehingga guru bisa langsung menindaklanjutinya.",
    ],
  },
  {
    slug: "menumbuhkan-panca-cinta-lewat-pembiasaan",
    title: "Menumbuhkan Panca Cinta Lewat Pembiasaan Harian di Madrasah",
    excerpt: "Nilai Kurikulum Berbasis Cinta tumbuh dari kebiasaan kecil yang konsisten, keteladanan, dan pengamatan yang terencana.",
    category: "Tips Mengajar",
    author: "Tim Qalby Learn",
    date: "2026-10-03",
    readMinutes: 4,
    tags: ["KBC", "Panca Cinta", "pendidikan karakter"],
    content: [
      "Kurikulum Berbasis Cinta (KBC) menempatkan nilai cinta sebagai ruh pembelajaran di madrasah. Nilai-nilai Panca Cinta tidak cukup diajarkan lewat ceramah; nilai itu tumbuh dari kebiasaan kecil yang dilakukan setiap hari.",
      "Mulailah dari program pembiasaan yang sederhana dan terjadwal, misalnya kegiatan pagi, adab di kelas, menjaga kebersihan lingkungan, dan saling menyapa. Kebiasaan yang konsisten lebih berdampak daripada kegiatan besar yang hanya sesekali.",
      "Keteladanan adalah kunci. Siswa belajar dari apa yang mereka lihat. Kepala madrasah dan guru dapat mencatat praktik keteladanan dalam jurnal, sehingga pembiasaan benar-benar dimulai dari pendidik.",
      "Amati dan catat perkembangan sikap siswa secara terencana. Lembar observasi yang diisi guru di kelas dan musrif/musrifah di asrama memberikan gambaran yang lebih utuh dibandingkan pengamatan sekilas.",
      "Terakhir, evaluasi secara berkala, misalnya tiap semester. Hasil observasi yang direkap per dimensi membantu madrasah melihat nilai mana yang sudah kuat dan mana yang perlu program penguatan.",
    ],
  },
  {
    slug: "mendampingi-anak-belajar-di-rumah",
    title: "Mendampingi Anak Belajar di Rumah Tanpa Tekanan",
    excerpt: "Peran orang tua dalam menjaga semangat belajar anak setelah pulang sekolah atau pesantren.",
    category: "Parenting",
    author: "Tim Qalby Learn",
    date: "2026-09-28",
    readMinutes: 4,
    tags: ["orang tua", "belajar di rumah"],
    content: [
      "Mendampingi anak belajar tidak berarti mengerjakan tugas untuknya. Peran orang tua adalah menciptakan suasana yang membuat anak nyaman bertanya, mencoba, dan sesekali salah.",
      "Buat rutinitas yang jelas. Waktu belajar yang sama setiap hari, meski hanya 30–45 menit, membantu anak terbiasa tanpa perlu disuruh berulang kali. Sediakan tempat belajar yang tenang dan jauh dari gangguan layar.",
      "Tanyakan prosesnya, bukan hanya nilainya. Pertanyaan seperti 'Bagian mana yang paling sulit hari ini?' membuka percakapan dan membantu orang tua mengetahui di mana anak membutuhkan bantuan.",
      "Hargai usaha anak. Pujian atas kesungguhan, bukan semata hasil, menumbuhkan keyakinan bahwa kemampuan bisa berkembang dengan latihan.",
      "Jalin komunikasi dengan guru atau wali kelas. Kabar dari sekolah membantu orang tua memahami perkembangan anak dan menyelaraskan pendampingan di rumah dengan pembelajaran di kelas.",
    ],
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
