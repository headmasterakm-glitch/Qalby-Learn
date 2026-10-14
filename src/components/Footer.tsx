import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/data/site";
import { activeApps } from "@/data/apps";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-[#CFC8E6]">
      <div className="container-site flex flex-col gap-10 pb-8 pt-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <Logo onDark />
            <p className="text-sm leading-relaxed">
              Platform ekosistem aplikasi pendidikan untuk siswa, guru, dan kepala sekolah.
            </p>
            <div className="mt-1 flex gap-4">
              {site.social.map((s) => (
                <a key={s.name} href={s.href} className="text-sm font-semibold text-white hover:text-[#FF7AC6]">
                  {s.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <strong className="text-[15px] text-white">Aplikasi</strong>
            {activeApps.map((a) => (
              <Link key={a.slug} href={`/aplikasi/${a.slug}`} className="text-sm hover:text-white">
                {a.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <strong className="text-[15px] text-white">Jelajahi</strong>
            {site.nav.slice(2).map((n) => (
              <Link key={n.href} href={n.href} className="text-sm hover:text-white">
                {n.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2.5 text-sm">
            <strong className="text-[15px] text-white">Hubungi Kami</strong>
            <span>{site.contact.email}</span>
            <span>{site.contact.whatsapp}</span>
            <span>{site.contact.address}</span>
          </div>
        </div>
        <div className="border-t border-[#2E2358] pt-6 text-[13px] text-[#A39BC2]">
          © {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
