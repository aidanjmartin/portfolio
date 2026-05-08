import Link from "next/link";
import { Section } from "./section";

const awards = [
  {
    title: "VISE Summer Fellow",
    org: "Vanderbilt Institute for Surgery and Engineering — 2026",
    description:
      "Selected for the VUSE Summer Research Program — 3D kidney reconstruction and optimal control.",
  },
  {
    title: "AI Scholar",
    org: "VALIANT — Vanderbilt",
    description:
      "Selected as an AI Scholar for the Vanderbilt Lab for Immersive AI Translation.",
  },
  {
    title: "1st Place — MechTech Course Project Award",
    org: "MTSU — 2026",
    description: "First place at the 2026 MTSU MechTech award for BalanceCV.",
  },
  {
    title: "IEEE Student Branch — Founder & President",
    org: "MTSU",
    description: "Founded and currently lead the MTSU IEEE student branch.",
  },
  {
    title: "Robotics Club President",
    org: "MTSU — SME-affiliated",
    description:
      "Leading MTSU's Robotics Club; member of the Society of Manufacturing Engineers.",
  },
  {
    title: "Certificate of Achievement",
    org: "LIGHTSPEED Hackathon — Team Neural Nexus 6",
    description:
      "Recognition from the LIGHTSPEED hackathon for the NeuralNexus6 / Optura submission.",
    link: "/images/Certificate%20of%20Achievement%20-%20Team%20Neural%20Nexus%206.pdf",
  },
];

export function Awards() {
  return (
    <Section id="awards" label="04" title="Awards & Recognition">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((award) => (
          <article
            key={award.title}
            className="border border-border bg-parchment-dark p-6 transition-colors hover:border-walnut"
          >
            <h3 className="mb-1 font-serif text-[1.05rem] font-semibold text-ink">
              {award.title}
            </h3>
            <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-walnut">
              {award.org}
            </p>
            <p className="m-0 text-[0.85rem] leading-relaxed text-muted">
              {award.description}
            </p>
            {award.link && (
              <Link
                href={award.link}
                target="_blank"
                rel="noopener"
                className="mt-3 inline-block border-b border-transparent text-[0.8rem] text-forest no-underline transition-colors hover:border-forest"
              >
                View certificate (PDF)
              </Link>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
