"use client";

import { useState } from "react";

// Formulir ini tidak membutuhkan server: saat dikirim, pesan dibuka
// di WhatsApp dan langsung tertuju ke nomor admin.
// (Penyimpanan pesan ke panel admin akan dibuat di tahap CMS.)
export default function ContactForm({ whatsappIntl }: { whatsappIntl: string }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Guru");
  const [school, setSchool] = useState("");
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text =
      `Assalamu'alaikum, saya ${name} (${role}${school ? `, ${school}` : ""}).\n\n` +
      `${message}\n\n(Dikirim dari website Qalby Learn)`;
    window.open(`https://wa.me/${whatsappIntl}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  const field =
    "h-12 w-full rounded-xl border border-[#D6D0E6] bg-white px-4 text-[15px] outline-none transition focus:border-brand-500 dark:border-[#3A3156] dark:bg-[#0E0A1C]";

  return (
    <form onSubmit={submit} className="card flex flex-col gap-5 p-7 sm:p-8">
      <h2 className="text-xl font-bold">Kirim pesan</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="nama" className="text-sm font-semibold">Nama lengkap</label>
          <input id="nama" required value={name} onChange={(e) => setName(e.target.value)} className={field} autoComplete="name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="peran" className="text-sm font-semibold">Saya adalah</label>
          <select id="peran" value={role} onChange={(e) => setRole(e.target.value)} className={field}>
            <option>Guru</option>
            <option>Kepala Sekolah</option>
            <option>Operator Sekolah</option>
            <option>Siswa</option>
            <option>Orang Tua</option>
            <option>Lainnya</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="sekolah" className="text-sm font-semibold">
          Nama sekolah <span className="text-muted font-normal">(opsional)</span>
        </label>
        <input id="sekolah" value={school} onChange={(e) => setSchool(e.target.value)} className={field} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="pesan" className="text-sm font-semibold">Pesan</label>
        <textarea
          id="pesan"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${field} h-auto py-3`}
          placeholder="Tuliskan pertanyaan atau kebutuhan sekolah Anda…"
        />
      </div>
      <button type="submit" className="btn-primary self-start px-6 py-3.5 text-[15px]">
        Kirim lewat WhatsApp
      </button>
      <p className="text-muted text-xs">Pesan akan dibuka di aplikasi WhatsApp Anda sebelum dikirim.</p>
    </form>
  );
}
