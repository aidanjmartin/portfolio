import Image from "next/image";
import Link from "next/link";
import { Section } from "./section";

interface MiniProject {
  href: string;
  tag: string;
  title: string;
  description: string;
  media?: {
    type: "img" | "video";
    src: string;
  };
}

const miniProjects: MiniProject[] = [
  {
    href: "https://github.com/gem5b/NeuralNexus6",
    tag: "LIGHTSPEED Hackathon",
    title: "NeuralNexus6 / Optura",
    description:
      "Synthetic healthcare data generator and AI chatbot for HIPAA-compliant datasets using tensor decomposition.",
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/3RIiRee3o-c",
    },
  },
  {
    href: "https://github.com/aidanjmartin/Festo_Handling_Station",
    tag: "Industrial Automation",
    title: "Festo Handling Station",
    description:
      "Mechatronics & automation programming for industrial Festo handling stations — sensor sequencing and PLC-style control.",
  },
  {
    href: "https://github.com/bereketsillassie/DocuAi",
    tag: "AI Application",
    title: "DocuAi",
    description:
      "AI-powered document processing and analysis application — extraction and summarization over uploaded documents.",
  },
  {
    href: "https://github.com/bradyk25/Hackathon2025",
    tag: "Hackathon",
    title: "Hackathon 2025",
    description:
      "Collaborative hackathon software project — full-stack build with teammates.",
    media: {
      type: "img",
      src: "/images/hackmt1.jpeg",
    },
  },
  {
    href: "https://github.com/aidanjmartin/cattype",
    tag: "Side Project",
    title: "cattype",
    description:
      "Typing test / keyboard input application — input timing analysis and live feedback.",
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/JuPiovR7oEo",
    },
  },
];

export function Hackathons() {
  return (
    <Section
      id="projects"
      label="07"
      title="Hackathons & Software Builds"
      description="Rapid prototyping, hackathon submissions, and supporting software projects."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {miniProjects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener"
            className="group flex flex-col border border-border bg-surface p-4 no-underline transition-all hover:-translate-y-0.5 hover:border-walnut-light"
          >
            {/* Media */}
            {project.media && (
              <div className="-mx-4 -mt-4 mb-4 aspect-video overflow-hidden border-b border-border bg-surface">
                {project.media.type === "video" ? (
                  <iframe
                    src={project.media.src}
                    title={project.title}
                    loading="lazy"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <Image
                    src={project.media.src}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            )}

            <span className="mb-1 font-mono text-[0.6rem] uppercase tracking-[0.08em] text-walnut-light">
              {project.tag}
            </span>
            <h3 className="mb-1.5 font-sans text-[0.95rem] font-semibold text-cream">
              {project.title}
            </h3>
            <p className="m-0 flex-1 text-[0.8rem] leading-relaxed text-muted">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
