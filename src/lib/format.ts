const BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

export function formatTanggal(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export function tanggalPendek(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return { day: String(d.getDate()).padStart(2, "0"), month: BULAN[d.getMonth()] };
}
