import Link from "next/link";
import { Section } from "./section";

const contactLinks = [
  {
    href: "https://github.com/aidanjmartin",
    label: "GitHub",
    primary: true,
  },
  {
    href: "https://www.linkedin.com/in/aidanjmartin/",
    label: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/@ajmartin_robot",
    label: "YouTube",
  },
  {
    href: "/images/aidan-martin-resume.pdf",
    label: "Resume",
  },
  {
    href: "mailto:ajm2dp@mtmail.mtsu.edu",
    label: "MTSU Email",
  },
  {
    href: "mailto:aidan.martin@vanderbilt.edu",
    label: "Vanderbilt Email",
  },
  {
    href: "tel:+16158562864",
    label: "+1 (615) 856-2864",
  },
];

export function Contact() {
  return (
    <Section id="contact" label="08" title="Contact" className="pb-12">
      <div className="border border-border bg-surface p-10 text-center">
        <h3 className="mb-3 font-sans text-[clamp(1.5rem,3.5vw,2rem)] font-semibold text-cream">
          Let&apos;s build something.
        </h3>
        <p className="mx-auto mb-6 max-w-[400px] text-[0.85rem] text-muted">
          Open to research collaboration, robotics consulting, and engineering
          opportunities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {contactLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener"
              className={`px-5 py-2.5 font-mono text-[0.75rem] uppercase tracking-[0.05em] no-underline transition-all ${
                link.primary
                  ? "bg-forest-light text-background hover:bg-forest"
                  : "border border-forest-light text-forest-light hover:bg-forest-light hover:text-background"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
