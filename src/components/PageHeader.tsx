import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-brand-900 text-white">
      <div className="container-site flex flex-col gap-4 py-14 sm:py-16">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="text-sm text-[#B8AEE0]">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white">
                      {c.label}
                    </span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#FF7AC6]">{eyebrow}</span>}
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{title}</h1>
        {description && <p className="max-w-2xl text-lg leading-relaxed text-[#D6D0EE]">{description}</p>}
        {children}
      </div>
    </section>
  );
}
