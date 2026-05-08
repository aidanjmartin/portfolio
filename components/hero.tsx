"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-[1] flex min-h-screen items-center justify-center p-8"
    >
      <div className="relative w-full max-w-[900px] px-8 py-16">
        {/* Engineering annotations */}
        <div
          className="absolute left-0 top-0 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground"
          aria-hidden="true"
        >
          <span className="h-px w-10 bg-border-strong" />
          <span>REV 2026.05</span>
        </div>
        <div
          className="absolute right-0 top-0 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground"
          aria-hidden="true"
        >
          <span>SCALE 1:1</span>
          <span className="h-px w-10 bg-border-strong" />
        </div>

        {/* Main hero content */}
        <div className="py-16 text-center">
          <h1 className="mb-6 font-serif text-[clamp(3rem,10vw,7rem)] font-semibold leading-none tracking-[0.02em] text-ink">
            AIDAN J MARTIN
          </h1>
          <p className="font-mono text-[clamp(0.75rem,1.8vw,0.95rem)] font-normal uppercase tracking-[0.15em] text-muted">
            Mechatronics Engineering Student / Research Assistant
          </p>

          {/* Step response SVG */}
          <svg
            className="mx-auto mt-12 h-[60px] w-[180px] text-slate opacity-50"
            viewBox="0 0 200 60"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="step-response"
              d="M0 50 H30 C35 50 35 10 40 10 H200"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
            <line
              x1="30"
              y1="50"
              x2="30"
              y2="55"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <text
              x="30"
              y="59"
              className="fill-current font-mono text-[6px]"
            >
              t₀
            </text>
            <line
              x1="40"
              y1="10"
              x2="40"
              y2="5"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <text x="40" y="4" className="fill-current font-mono text-[6px]">
              y∞
            </text>
          </svg>
        </div>

        {/* Crosshairs */}
        <div
          className="absolute bottom-0 left-0 h-5 w-5"
          aria-hidden="true"
        >
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-border-strong" />
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border-strong" />
        </div>
        <div
          className="absolute bottom-0 right-0 h-5 w-5"
          aria-hidden="true"
        >
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-border-strong" />
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border-strong" />
        </div>

        {/* Bottom annotation */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <span className="font-mono text-[0.7rem] tracking-[0.05em] text-muted-foreground">
            |&lt;——— 2024–2027 ———&gt;|
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 h-[60px] w-px -translate-x-1/2 overflow-hidden bg-border-strong"
        aria-label="Scroll to content"
      >
        <span className="scroll-line absolute left-0 top-0 h-5 w-full bg-forest" />
      </Link>
    </section>
  );
}
