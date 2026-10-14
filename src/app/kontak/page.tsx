import type { Metadata } from "next";
import { site } from "@/data/site";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi tim Qalby Learn melalui formulir, email, atau WhatsApp.",
};

export default function KontakPage() {
  const items = [
    { label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
    { label: "WhatsApp", value: site.contact.whatsapp, href: `https://wa.me/${site.contact.whatsappIntl}` },
    { label: "Alamat", value: site.contact.address },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Kontak"
        title="Ada pertanyaan? Kami siap membantu"
        description="Hubungi kami untuk informasi aplikasi, pendampingan penggunaan, atau kerja sama dengan sekolah Anda."
        crumbs={[{ label: "Beranda", href: "/" }, { label: "Kontak" }]}
      />
      <div className="container-site flex flex-wrap gap-6 py-14 pb-24">
        <div className="min-w-0 flex-[999_1_520px]">
          <ContactForm whatsappIntl={site.contact.whatsappIntl} />
        </div>
        <aside className="flex min-w-0 flex-[1_1_280px] flex-col gap-4">
          {items.map((it) => (
            <div key={it.label} className="card flex flex-col gap-1 p-6">
              <span className="eyebrow">{it.label}</span>
              {it.href ? (
                <a href={it.href} className="break-words text-lg font-semibold hover:text-brand-500 dark:hover:text-brand-300">
                  {it.value}
                </a>
              ) : (
                <span className="text-lg font-semibold">{it.value}</span>
              )}
            </div>
          ))}
          <div className="card flex flex-col gap-3 p-6">
            <span className="eyebrow">Media sosial</span>
            <div className="flex flex-wrap gap-2">
              {site.social.map((s) => (
                <a key={s.name} href={s.href} className="btn-outline">
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
