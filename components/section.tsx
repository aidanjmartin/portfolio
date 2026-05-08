import { ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  label,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-[1100px] px-8 py-16 ${className}`}
    >
      <header className="mb-8 flex items-center gap-4">
        <span className="font-mono text-[0.7rem] tracking-[0.05em] text-forest-light">
          {label}
        </span>
        <h2 className="m-0 font-sans text-[clamp(1.25rem,3.5vw,1.75rem)] font-semibold tracking-tight text-cream">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-border-strong to-transparent" />
      </header>
      {description && (
        <p className="-mt-4 mb-8 max-w-[600px] text-[0.85rem] leading-relaxed text-muted">
          {description}
        </p>
      )}
      {children}
    </section>
  );
}
