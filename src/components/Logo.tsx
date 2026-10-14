import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type Props = { size?: "sm" | "md"; onDark?: boolean };

// Logo Qalby Learn: simbol "Q" + tulisan QALBY (magenta) LEARN (merah),
// mengikuti warna logo asli.
export default function Logo({ size = "md", onDark = false }: Props) {
  const mark = size === "sm" ? 34 : 42;
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — beranda`}>
      <Image src={site.logo.mark} alt="" width={mark} height={Math.round(mark * 0.966)} priority />
      <span className="flex flex-col leading-none">
        <span className={`${size === "sm" ? "text-lg" : "text-xl"} font-extrabold tracking-[0.04em]`}>
          <span className={onDark ? "text-[#FF5CB8]" : "text-magenta-500 dark:text-[#FF5CB8]"}>QALBY</span>
          <span className={onDark ? "text-[#FF6B6B]" : "text-coral-500 dark:text-[#FF6B6B]"}>LEARN</span>
        </span>
        <span
          className={`mt-1 text-[10px] font-medium tracking-wide ${
            onDark ? "text-brand-300" : "text-brand-500 dark:text-brand-300"
          }`}
        >
          {site.subtitle}
        </span>
      </span>
    </Link>
  );
}
