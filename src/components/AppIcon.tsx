import type { AppItem, IconKey } from "@/data/apps";

export const toneClass: Record<AppItem["tone"], { box: string; icon: string; badge: string }> = {
  teal: { box: "bg-[#E2F4F1] dark:bg-[#123330]", icon: "text-[#0B6B5F] dark:text-[#5FD3C2]", badge: "bg-[#E2F4F1] text-[#0B5A50] dark:bg-[#123330] dark:text-[#5FD3C2]" },
  gold: { box: "bg-[#FDF1D8] dark:bg-[#3A2C0E]", icon: "text-[#9A6406] dark:text-[#F2B544]", badge: "bg-[#FDF1D8] text-[#7A4F05] dark:bg-[#3A2C0E] dark:text-[#F2B544]" },
  blue: { box: "bg-brand-50 dark:bg-[#241A48]", icon: "text-brand-500 dark:text-brand-300", badge: "bg-brand-50 text-brand-600 dark:bg-[#241A48] dark:text-brand-300" },
  clay: { box: "bg-coral-50 dark:bg-[#3C1616]", icon: "text-coral-600 dark:text-[#FF8A8A]", badge: "bg-coral-50 text-[#B01818] dark:bg-[#3C1616] dark:text-[#FF8A8A]" },
  violet: { box: "bg-magenta-50 dark:bg-[#3A1030]", icon: "text-magenta-500 dark:text-[#FF7AC6]", badge: "bg-magenta-50 text-magenta-600 dark:bg-[#3A1030] dark:text-[#FF7AC6]" },
  green: { box: "bg-[#E6F4E4] dark:bg-[#15301A]", icon: "text-[#2E7A2A] dark:text-[#7BD474]", badge: "bg-[#E6F4E4] text-[#24611F] dark:bg-[#15301A] dark:text-[#7BD474]" },
};

const paths: Record<IconKey, React.ReactNode> = {
  student: (
    <>
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </>
  ),
  teacher: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  assessment: (
    <>
      <path d="m9 11 3 3 8-8" />
      <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" />
    </>
  ),
  headmaster: (
    <>
      <path d="M3 21V9l9-6 9 6v12" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  meeting: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M15 14.5c3 0 6 1.8 6 5.5" />
    </>
  ),
  santri: (
    <>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
      <path d="m17 4 .7 1.6L19.3 6l-1.6.7L17 8.3l-.7-1.6L14.7 6l1.6-.4z" />
    </>
  ),
};

export default function AppIcon({ app, size = 52 }: { app: AppItem; size?: number }) {
  const t = toneClass[app.tone];
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-[14px] ${t.box} ${t.icon}`}
      style={{ width: size, height: size }}
    >
      <svg width={size / 2} height={size / 2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {paths[app.icon]}
      </svg>
    </div>
  );
}
