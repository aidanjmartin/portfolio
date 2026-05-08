"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-[1] flex min-h-[70vh] items-center justify-center px-6 py-16"
    >
      <div className="relative w-full max-w-4xl">
        {/* Main hero content */}
        <div className="text-center">
          <h1 className="mb-4 font-sans text-[clamp(2.5rem,8vw,5rem)] font-semibold leading-none tracking-tight text-cream">
            AIDAN J MARTIN
          </h1>
          <p className="font-mono text-[clamp(0.7rem,1.5vw,0.85rem)] font-normal uppercase tracking-[0.2em] text-muted">
            Mechatronics Engineering Student / Research Assistant
          </p>

          {/* Step response SVG - control systems signature */}
          <svg
            className="mx-auto mt-10 h-[50px] w-[160px] text-forest-light opacity-60"
            viewBox="0 0 200 60"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="step-response"
              d="M0 50 H30 C35 50 35 10 40 10 H200"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <line
              x1="30"
              y1="50"
              x2="30"
              y2="56"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <text
              x="30"
              y="60"
              className="fill-current font-mono text-[6px]"
            >
              t₀
            </text>
            <line
              x1="40"
              y1="10"
              x2="40"
              y2="4"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <text x="40" y="3" className="fill-current font-mono text-[6px]">
              y∞
            </text>
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        className="absolute bottom-6 left-1/2 h-[50px] w-px -translate-x-1/2 overflow-hidden bg-border-strong"
        aria-label="Scroll to content"
      >
        <span className="scroll-line absolute left-0 top-0 h-4 w-full bg-forest-light" />
      </Link>
    </section>
  );
}
