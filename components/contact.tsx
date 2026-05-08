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
];

export function Contact() {
  return (
    <Section id="contact" label="08" title="Contact" className="pb-16">
      <div className="border border-border bg-parchment-dark p-12 text-center">
        <h3 className="mb-3 font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-ink">
          Let&apos;s build something.
        </h3>
        <p className="mx-auto mb-8 max-w-[400px] text-muted">
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
              className={`px-6 py-3 font-mono text-[0.8rem] uppercase tracking-[0.05em] no-underline transition-all ${
                link.primary
                  ? "bg-forest text-parchment hover:bg-forest-light"
                  : "border border-forest text-forest hover:bg-forest hover:text-parchment"
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
