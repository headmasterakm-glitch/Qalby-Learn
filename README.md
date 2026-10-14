# Qalby Learn

Portal ekosistem aplikasi pendidikan Qalby — Q_Student, Q_Teacher, Q_Assessment, Q_Headmaster, Q_Meeting, Hari Santri Nasional, dan lainnya — lengkap dengan Artikel dan News.

**Tahap 1 (selesai):** struktur proyek + halaman Beranda.
**Tahap 2 (selesai):** Katalog & Detail Aplikasi, Artikel (daftar + baca), News (daftar + detail), Tentang, Kontak (formulir ke WhatsApp), Masuk (pintu ke tiap aplikasi), halaman 404, sitemap.xml & robots.txt.
Tahap berikutnya: panel admin (CMS) + database + login.

## Halaman yang tersedia
| Alamat | Isi |
|---|---|
| `/` | Beranda |
| `/aplikasi` | Katalog aplikasi (pencarian + filter peran) |
| `/aplikasi/q-student` dst. | Detail tiap aplikasi |
| `/artikel`, `/artikel/<judul>` | Daftar & halaman baca artikel |
| `/news`, `/news/<judul>` | Daftar & detail berita |
| `/tentang` | Profil, visi & misi |
| `/kontak` | Formulir kontak (dikirim lewat WhatsApp) |
| `/masuk` | Tombol masuk ke tiap aplikasi |

## Data yang perlu diisi (semua di folder `src/data/`)
- `site.ts` — kontak, **whatsappIntl** (nomor WA format 62…), media sosial, statistik, testimoni, visi-misi, profil pengembang
- `apps.ts` — deskripsi, fitur, pengguna, panduan, **url** & **loginUrl** tiap aplikasi
- `articles.ts` / `news.ts` — tambahkan `content: ["paragraf 1", "paragraf 2"]` untuk isi lengkap
- Tangkapan layar aplikasi: unggah gambar ke `public/screenshots/`, lalu isi `screenshots: ["/screenshots/nama-file.png"]`

## Teknologi
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (mode gelap/terang berbasis class)
- Font Plus Jakarta Sans (@fontsource, tanpa bergantung Google Fonts)

## Menjalankan di komputer
Butuh Node.js 18.17 atau lebih baru.

```bash
npm install
npm run dev
```
Buka http://localhost:3000

Build produksi:
```bash
npm run build
npm start
```

## Struktur folder
```
public/brand/            Logo Qalby Learn (lengkap & simbol Q)
src/app/
  layout.tsx             Kerangka halaman, SEO, mode gelap
  page.tsx               Halaman Beranda
  globals.css            Gaya dasar & komponen
  icon.png, apple-icon.png  Favicon dari logo
src/components/          Navbar, Footer, Logo, kartu aplikasi/artikel, daftar berita, tombol tema
src/data/
  site.ts                Nama, tagline, kontak, media sosial, statistik, testimoni
  apps.ts                Daftar aplikasi  ← tambah aplikasi baru di sini
  articles.ts            6 artikel contoh
  news.ts                6 berita contoh
src/lib/format.ts        Format tanggal Indonesia
```

## Menambah aplikasi baru
Buka `src/data/apps.ts`, salin satu objek, lalu ubah `slug`, `name`, `roles`, `description`, `url`, `icon`, dan `order`. Kartu di Beranda, filter peran, dan footer akan menyesuaikan otomatis. Set `active: false` untuk menyembunyikan aplikasi.

## Yang perlu diisi
Cari teks dalam `[kurung siku]` — deskripsi & link aplikasi, statistik, testimoni, email, WhatsApp, alamat, dan domain di `src/data/site.ts`.

## Warna (dari logo)
| Peran | Warna |
|---|---|
| Ungu (utama) | #5E17EB |
| Magenta | #CC007E |
| Merah | #FF2828 |
| Latar gelap hero/footer | #1A0846 |

## Deploy ke Vercel
1. Unggah folder ini ke repositori GitHub.
2. Masuk ke vercel.com → **Add New Project** → pilih repositori tersebut.
3. Biarkan pengaturan bawaan (Framework: Next.js) → **Deploy**.
4. Tambahkan domain Anda di menu **Settings → Domains**, lalu ganti `url` di `src/data/site.ts`.
