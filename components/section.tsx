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
      className={`mx-auto max-w-[1100px] px-8 py-20 ${className}`}
    >
      <header className="mb-10 flex items-center gap-4">
        <span className="font-mono text-[0.75rem] tracking-[0.05em] text-walnut">
          {label}
        </span>
        <h2 className="m-0 font-serif text-[clamp(1.5rem,4vw,2.25rem)] font-semibold tracking-[0.01em] text-ink">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-border-strong to-transparent" />
      </header>
      {description && (
        <p className="-mt-6 mb-10 max-w-[600px] text-[0.9rem] text-muted">
          {description}
        </p>
      )}
      {children}
    </section>
  );
}
