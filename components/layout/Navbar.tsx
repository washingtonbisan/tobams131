"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Jobs", href: "#jobs" },
  { label: "Projects", href: "#projects" },
  { label: "TG Academy", href: "#tg-academy" },
  { label: "Strategic Partnership", href: "#strategic-partnership" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book a Consultation", href: "#consultation" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-7 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-lg font-bold leading-none tracking-tight text-brand-dark-2"
        >
          <img
            src="/logo.png"
            alt="tobamslogo"
            className="w-32 h-auto rounded-lg shadow-md"
          />
        </Link>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-6 sm:gap-[24px] ">
          <Link
            href="#account"
            className="h-[48px] w-[167px] flex items-center justify-center text-sm font-medium text-white transition-colors hover:bg-opacity-80 flex-shrink-0"
            style={{
              backgroundColor: "rgb(74, 14, 53)",
              borderRadius: "6px",
            }}
          >
            Account
          </Link>

          <Link
            href="#assessment"
            className="h-[48px] w-[183px] flex items-center justify-center text-sm font-medium text-white transition-colors hover:bg-opacity-80 flex-shrink-0"
            style={{
              backgroundColor: "rgb(239, 67, 83)",
              borderRadius: "6px",
            }}
          >
            Take Assessment
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-md text-brand-dark-2 lg:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          {isMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      <nav
        id="primary-navigation"
        aria-label="Primary"
        className="hidden border-t border-brand-border/70 lg:block"
      >
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-2 px-4 py-2.5 font-nunito text-sm font-normal text-brand-dark-2 sm:px-6 lg:px-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="transition-colors hover:text-brand-maroon"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-brand-border/70 bg-white lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-4 py-3 text-sm font-medium text-brand-dark-2 font-nunito">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-2 py-2 transition-colors hover:bg-brand-lavender hover:text-brand-maroon"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex gap-3 px-2">
              <Link
                href="#account"
                className="flex-1 rounded-full border border-brand-maroon/60 px-4 py-2 text-center text-brand-maroon"
              >
                Account
              </Link>
              <Link
                href="#assessment"
                className="flex-1 rounded-full bg-brand-maroon px-4 py-2 text-center text-white"
              >
                Take Assessment
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
