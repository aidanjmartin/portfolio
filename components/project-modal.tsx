"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProjectModalData {
  href: string;
  hrefLabel?: string;
  tag: string;
  title: string;
  description: string;
  chips?: string[];
  media: { type: "img" | "video"; src: string; alt?: string }[];
  extraLinks?: { href: string; label: string }[];
}

interface Props {
  project: ProjectModalData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  const [activeMedia, setActiveMedia] = useState(0);

  useEffect(() => {
    if (!project) return;
    setActiveMedia(0);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;
  // Guard against a stale activeMedia index when reopening with a project that has fewer media items.
  const current = project.media[activeMedia] ?? project.media[0];

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 px-4 py-10 backdrop-blur-md md:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="modal-card relative my-auto w-full max-w-4xl overflow-hidden border border-border-strong bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close */}
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center border border-border-strong bg-background/70 font-mono text-lg text-cream transition-colors hover:border-walnut-light hover:text-walnut-light"
        >
          ×
        </button>

        {/* big media */}
        <div className="relative aspect-video w-full bg-background">
          {current.type === "video" ? (
            <iframe
              src={current.src}
              title={project.title}
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <Image
              src={current.src}
              alt={current.alt || project.title}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          )}
        </div>

        {/* gallery thumbs */}
        {project.media.length > 1 && (
          <div className="thin-scroll flex gap-2 overflow-x-auto border-y border-border bg-background px-4 py-3">
            {project.media.map((m, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMedia(idx)}
                className={`relative h-14 flex-shrink-0 overflow-hidden border transition-all ${
                  idx === activeMedia
                    ? "border-forest-light shadow-[0_0_0_1px_var(--color-forest-light)]"
                    : "border-border hover:border-forest-light/60"
                }`}
                style={{ aspectRatio: "16/10", width: "92px" }}
              >
                {m.type === "video" ? (
                  <span className="flex h-full w-full items-center justify-center bg-surface font-mono text-[0.6rem] tracking-wider text-forest-light">
                    ▶ VIDEO
                  </span>
                ) : (
                  <Image
                    src={m.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="92px"
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* body */}
        <div className="space-y-4 px-6 py-6 md:px-8 md:py-8">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-walnut-light">
            {project.tag}
          </span>
          <h2 className="font-sans text-2xl font-bold leading-tight text-cream md:text-3xl">
            {project.title}
          </h2>
          <p className="text-[0.95rem] leading-relaxed text-cream/85 md:text-base">
            {project.description}
          </p>

          {project.chips && project.chips.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.chips.map((chip) => (
                <span
                  key={chip}
                  className="border border-border-strong bg-background/40 px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.04em] text-cream-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={project.href}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 border border-forest-light bg-forest-light/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-forest-light transition-colors hover:bg-forest-light hover:text-background"
            >
              {project.hrefLabel || "View on GitHub"} →
            </Link>
            {project.extraLinks?.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border border-border-strong bg-background/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-cream-muted transition-colors hover:border-walnut-light hover:text-walnut-light"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
