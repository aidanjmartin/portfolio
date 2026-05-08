"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#credentials", label: "Credentials" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/aidanjmartin",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/aidanjmartin/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@ajmartin_robot",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
        <path d="M23.5 6.2c-.3-1.1-1.1-1.9-2.2-2.2C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.3.5c-1.1.3-1.9 1.1-2.2 2.2C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1.1 1.1 1.9 2.2 2.2 1.9.5 9.3.5 9.3.5s7.4 0 9.3-.5c1.1-.3 1.9-1.1 2.2-2.2.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
      </svg>
    ),
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-[100] flex items-center justify-between gap-8 border-b border-border bg-background/95 px-8 py-4 backdrop-blur-sm ${
        isOpen ? "flex-wrap" : ""
      }`}
      id="nav"
    >
      <Link
        href="#top"
        className="font-sans text-lg font-semibold tracking-tight text-cream no-underline"
      >
        AJM
      </Link>

      {/* Desktop nav links */}
      <ul
        className={`m-0 hidden list-none gap-8 p-0 md:flex ${
          isOpen ? "!flex flex-col absolute top-full left-0 right-0 bg-background border-b border-border px-8 py-6 gap-4" : ""
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-mono text-[0.75rem] tracking-[0.02em] text-muted no-underline transition-colors hover:text-cream"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social links */}
      <div className="hidden items-center gap-4 md:flex">
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener"
            aria-label={link.label}
            className="text-muted no-underline transition-colors hover:text-forest-light"
          >
            {link.icon}
          </Link>
        ))}
        <Link
          href="/images/aidan-martin-resume.pdf"
          target="_blank"
          rel="noopener"
          className="border border-forest-light px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.05em] text-forest-light no-underline transition-all hover:bg-forest-light hover:text-background"
        >
          Resume
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        className="flex flex-col gap-[5px] p-2 md:hidden"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`h-px w-5 bg-cream transition-all ${
            isOpen ? "translate-y-[6px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-5 bg-cream transition-all ${
            isOpen ? "-translate-y-[0px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="flex w-full flex-col gap-4 border-t border-border pt-4 md:hidden">
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-[0.85rem] tracking-[0.02em] text-muted no-underline transition-colors hover:text-cream"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-t border-border pt-4">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener"
                aria-label={link.label}
                className="text-muted no-underline transition-colors hover:text-forest-light"
              >
                {link.icon}
              </Link>
            ))}
            <Link
              href="/images/aidan-martin-resume.pdf"
              target="_blank"
              rel="noopener"
              className="ml-auto border border-forest-light px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.05em] text-forest-light no-underline transition-all hover:bg-forest-light hover:text-background"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
