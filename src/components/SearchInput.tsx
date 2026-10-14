"use client";

export default function SearchInput({
  value,
  onChange,
  placeholder,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  label: string;
}) {
  return (
    <div className="relative w-full sm:max-w-sm">
      <label htmlFor="cari" className="sr-only">
        {label}
      </label>
      <svg
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input
        id="cari"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-full border border-[#D6D0E6] bg-white pl-11 pr-4 text-[15px] outline-none transition placeholder:text-ink-soft focus:border-brand-500 dark:border-[#3A3156] dark:bg-[#17112B]"
      />
    </div>
  );
}
