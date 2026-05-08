"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "./section";
import { ProjectModal, type ProjectModalData } from "./project-modal";

interface MiniProject {
  href: string;
  tag: string;
  title: string;
  description: string;
  media?: { type: "img" | "video"; src: string };
  extraLinks?: { href: string; label: string }[];
}

const miniProjects: MiniProject[] = [
  {
    href: "https://github.com/gem5b/NeuralNexus6",
    tag: "LIGHTSPEED Hackathon",
    title: "NeuralNexus6 / Optura",
    description:
      "Synthetic healthcare data generator and AI chatbot for HIPAA-compliant datasets using tensor decomposition.",
    media: { type: "video", src: "https://www.youtube.com/embed/3RIiRee3o-c" },
    extraLinks: [
      {
        href: "/images/Certificate of Achievement - Team Neural Nexus 6.pdf",
        label: "Certificate",
      },
    ],
  },
  {
    href: "https://github.com/aidanjmartin/Festo_Handling_Station",
    tag: "Industrial Automation",
    title: "Festo Handling Station",
    description:
      "Mechatronics & automation programming for industrial Festo handling stations — sensor sequencing and PLC-style control.",
    media: { type: "img", src: "/images/photo_handling.png" },
  },
  {
    href: "https://github.com/bereketsillassie/DocuAi",
    tag: "AI Application",
    title: "DocuAi",
    description:
      "AI-powered document processing and analysis application — extraction and summarization over uploaded documents.",
    media: { type: "img", src: "/images/docuai.png" },
  },
  {
    href: "https://github.com/bradyk25/Hackathon2025",
    tag: "Hackathon",
    title: "Hackathon 2025",
    description:
      "Collaborative hackathon software project — full-stack build with teammates.",
    media: { type: "img", src: "/images/hackmt1.jpeg" },
  },
  {
    href: "https://github.com/aidanjmartin/cattype",
    tag: "Side Project",
    title: "cattype",
    description:
      "Typing test / keyboard input application — input timing analysis and live feedback.",
    media: { type: "video", src: "https://www.youtube.com/embed/JuPiovR7oEo" },
  },
];

function MiniCard({
  project,
  onOpen,
}: {
  project: MiniProject;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="group flex flex-col border border-border bg-surface p-4 text-left no-underline transition-all hover:-translate-y-1 hover:border-walnut-light hover:shadow-[0_8px_30px_-10px_var(--color-walnut-glow)]"
    >
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
              className="pointer-events-none h-full w-full"
            />
          ) : (
            <Image
              src={project.media.src}
              alt={project.title}
              width={400}
              height={225}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
      <span className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-forest-light opacity-0 transition-opacity group-hover:opacity-100">
        ⤢ Open details →
      </span>
    </button>
  );
}

export function Hackathons() {
  const [open, setOpen] = useState<ProjectModalData | null>(null);

  return (
    <Section
      id="projects"
      label="07"
      title="Hackathons & Software Builds"
      description="Rapid prototyping, hackathon submissions, and supporting software projects. Click any card for details."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {miniProjects.map((project) => (
          <MiniCard
            key={project.title}
            project={project}
            onOpen={() =>
              setOpen({
                href: project.href,
                tag: project.tag,
                title: project.title,
                description: project.description,
                media: project.media
                  ? [project.media]
                  : [{ type: "img", src: "/images/headshot.png", alt: project.title }],
                extraLinks: project.extraLinks,
              })
            }
          />
        ))}
      </div>
      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </Section>
  );
}
