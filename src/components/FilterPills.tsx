"use client";

export default function FilterPills<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
      {options.map((o) => {
        const active = o === value;
        return (
          <button
            key={o}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o)}
            className={`rounded-full px-[18px] py-2.5 text-sm transition ${
              active
                ? "bg-ink font-semibold text-white dark:bg-white dark:text-ink"
                : "border border-[#D6D0E6] bg-white font-medium text-ink-muted hover:border-brand-500 dark:border-[#3A3156] dark:bg-transparent dark:text-[#B3ADC8]"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
