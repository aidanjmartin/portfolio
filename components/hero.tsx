"use client";

import Link from "next/link";

const equations = [
  { tex: "ẋ = Ax + Bu", className: "top-[12%] left-[6%] text-xl md:text-2xl eq-drift-a" },
  { tex: "G(s) = K / (s² + 2ζωs + ω²)", className: "top-[20%] right-[7%] text-base md:text-xl eq-drift-b" },
  { tex: "d/dt(∂L/∂q̇) − ∂L/∂q = 0", className: "bottom-[22%] left-[5%] text-base md:text-xl eq-drift-c" },
  { tex: "iℏ ∂ψ/∂t = Ĥψ", className: "top-[38%] right-[10%] text-lg md:text-2xl eq-drift-d" },
  { tex: "∇·E = ρ/ε₀", className: "bottom-[14%] right-[14%] text-lg md:text-2xl eq-drift-a" },
  { tex: "∂V/∂t + ½σ²S²V_SS + rSV_S = rV", className: "bottom-[30%] right-[6%] text-sm md:text-lg eq-drift-c" },
  { tex: "min_θ E[ℒ(θ)]", className: "top-[55%] left-[8%] text-lg md:text-2xl eq-drift-b" },
  { tex: "x̂ = x̂⁻ + K(z − Hx̂⁻)", className: "bottom-[10%] left-[14%] text-base md:text-lg eq-drift-d" },
];

const symbols = [
  { ch: "∇", className: "top-[8%] right-[28%] text-7xl md:text-9xl text-forest-light/10" },
  { ch: "∫", className: "bottom-[12%] left-[32%] text-7xl md:text-9xl text-walnut-light/10" },
  { ch: "Σ", className: "top-[32%] left-[28%] text-6xl md:text-8xl text-slate-light/10" },
  { ch: "θ", className: "bottom-[28%] right-[30%] text-6xl md:text-8xl text-forest-light/10" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-[1] flex min-h-screen items-center justify-center overflow-hidden px-6 py-16"
    >
      {/* Background big rotating symbol */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="slow-rotate font-serif text-[28rem] leading-none text-forest-light/[0.04]"
          aria-hidden="true"
        >
          ⌬
        </div>
      </div>

      {/* Decorative greek/math symbols (very faded) */}
      {symbols.map((s, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`pointer-events-none absolute font-serif italic ${s.className}`}
        >
          {s.ch}
        </span>
      ))}

      {/* Floating equations */}
      {equations.map((eq, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`pointer-events-none absolute whitespace-nowrap font-mono italic text-cream/60 ${eq.className}`}
        >
          {eq.tex}
        </span>
      ))}

      {/* Top-left: animated 3-link kinematic arm */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute left-[3%] top-[14%] h-32 w-32 text-forest-light opacity-50 md:h-44 md:w-44"
      >
        <defs>
          <radialGradient id="joint-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* base */}
        <line x1="60" y1="180" x2="140" y2="180" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="180" r="8" fill="currentColor" opacity="0.3" />
        <circle cx="100" cy="180" r="3" fill="currentColor" />
        {/* Link 1 (rotates around base) */}
        <g className="kine-j1" style={{ ["--ox" as string]: "100px", ["--oy" as string]: "180px" }}>
          <line x1="100" y1="180" x2="100" y2="120" stroke="currentColor" strokeWidth="3" />
          <circle cx="100" cy="120" r="5" fill="currentColor" />
          {/* Link 2 (rotates around joint 1 end) */}
          <g className="kine-j2" style={{ ["--ox" as string]: "100px", ["--oy" as string]: "120px" }}>
            <line x1="100" y1="120" x2="100" y2="70" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="100" cy="70" r="4" fill="currentColor" />
            {/* Link 3 (end-effector) */}
            <g className="kine-j3" style={{ ["--ox" as string]: "100px", ["--oy" as string]: "70px" }}>
              <line x1="100" y1="70" x2="100" y2="35" stroke="currentColor" strokeWidth="2" />
              <line x1="92" y1="35" x2="108" y2="35" stroke="currentColor" strokeWidth="2" />
              <line x1="92" y1="35" x2="92" y2="25" stroke="currentColor" strokeWidth="1.5" />
              <line x1="108" y1="35" x2="108" y2="25" stroke="currentColor" strokeWidth="1.5" />
            </g>
          </g>
        </g>
      </svg>

      {/* Top-right: live plot trace */}
      <svg
        aria-hidden="true"
        viewBox="0 0 240 120"
        className="pointer-events-none absolute right-[3%] top-[10%] h-20 w-40 text-walnut-light opacity-70 md:h-28 md:w-56"
      >
        {/* axes */}
        <line x1="10" y1="110" x2="230" y2="110" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <line x1="10" y1="10" x2="10" y2="110" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        {/* gridlines */}
        <line x1="10" y1="60" x2="230" y2="60" stroke="currentColor" strokeWidth="0.3" opacity="0.15" strokeDasharray="2,3" />
        <line x1="120" y1="10" x2="120" y2="110" stroke="currentColor" strokeWidth="0.3" opacity="0.15" strokeDasharray="2,3" />
        {/* damped sine response */}
        <path
          className="plot-trace"
          d="M10,90 C30,40 50,140 70,55 S110,90 130,68 S170,82 190,72 S220,76 230,74"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <text x="14" y="22" className="fill-current font-mono" fontSize="8" opacity="0.6">
          y(t)
        </text>
        <text x="210" y="106" className="fill-current font-mono" fontSize="8" opacity="0.6">
          t
        </text>
      </svg>

      {/* Bottom-left: bode plot */}
      <svg
        aria-hidden="true"
        viewBox="0 0 220 100"
        className="pointer-events-none absolute bottom-[8%] left-[4%] h-16 w-36 text-slate-light opacity-60 md:h-24 md:w-48"
      >
        <line x1="10" y1="90" x2="210" y2="90" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <line x1="10" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <path
          d="M10,30 L60,30 Q90,30 100,55 T200,82"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.85"
        />
        <text x="14" y="22" className="fill-current font-mono" fontSize="7" opacity="0.7">
          |G(jω)|
        </text>
        <text x="186" y="86" className="fill-current font-mono" fontSize="7" opacity="0.7">
          ω
        </text>
      </svg>

      {/* Bottom-right: tiny network/quant graph */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 100"
        className="pointer-events-none absolute bottom-[16%] right-[5%] h-16 w-36 text-walnut-light opacity-55 md:h-20 md:w-44"
      >
        <line x1="10" y1="90" x2="190" y2="90" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
        <path
          d="M10,80 L30,72 L50,76 L70,60 L90,64 L110,42 L130,50 L150,28 L170,32 L190,18"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        {[
          [10, 80], [30, 72], [50, 76], [70, 60], [90, 64],
          [110, 42], [130, 50], [150, 28], [170, 32], [190, 18],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="1.5"
            fill="currentColor"
            className={i % 3 === 0 ? "pulse-dot" : ""}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>

      {/* Foreground: name + tagline */}
      <div className="relative z-10 w-full max-w-5xl text-center">
        <p className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-forest-light md:text-xs">
          ◇ Mechatronics · Robotics · Control · ML ◇
        </p>
        <h1 className="mb-5 font-sans text-[clamp(2.8rem,9vw,6rem)] font-bold leading-[0.95] tracking-tight text-cream">
          AIDAN J <span className="text-walnut-light">MARTIN</span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl font-mono text-[clamp(0.7rem,1.4vw,0.9rem)] uppercase tracking-[0.2em] text-cream-muted">
          Mechatronics Engineering Student / Research Assistant
        </p>

        {/* step response signature, kept */}
        <svg
          className="mx-auto h-[58px] w-[180px] text-forest-light"
          viewBox="0 0 200 60"
          fill="none"
          aria-hidden="true"
        >
          <path
            className="plot-trace"
            d="M0 50 H30 C35 50 35 10 40 10 H200"
            stroke="currentColor"
            strokeWidth="1.8"
            fill="none"
          />
          <line x1="30" y1="50" x2="30" y2="56" stroke="currentColor" strokeWidth="0.5" />
          <text x="30" y="60" className="fill-current font-mono" fontSize="6">t₀</text>
          <line x1="40" y1="10" x2="40" y2="4" stroke="currentColor" strokeWidth="0.5" />
          <text x="40" y="3" className="fill-current font-mono" fontSize="6">y∞</text>
        </svg>
      </div>

      {/* Scroll cue */}
      <Link
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-cream-muted">
          scroll
        </span>
        <span className="relative block h-12 w-px overflow-hidden bg-border-strong">
          <span className="scroll-line absolute left-0 top-0 h-4 w-full bg-walnut-light" />
        </span>
      </Link>
    </section>
  );
}
