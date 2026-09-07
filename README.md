# Tobams Group — Training and Development (Frontend Intern Assessment)

A pixel-focused, responsive rebuild of the Tobams Group "Training and Development"
page, built with Next.js (App Router) and Tailwind CSS as a frontend internship
assessment submission.

**Live URL:**https://tobams131.vercel.app/
**Figma reference:** https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- `next/font` (Poppins for headings, Inter for body)
- `next/image` for all imagery

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx       # Root layout, fonts, metadata
  page.tsx         # Composes all sections for the single page
  globals.css      # Tailwind import + design tokens (@theme)
components/
  layout/          # Navbar, Footer
  sections/        # One component per page section (Hero, FeatureSection, ...)
  ui/               # Small reusable primitives (Button, Eyebrow)
```

Each page section is its own component under `/components/sections`, composed
in `app/page.tsx`. Repeated layout patterns (alternating image/text blocks,
the dark CTA banner used twice) are extracted into a single reusable
component (`FeatureSection`, `CtaBanner`) driven by props, rather than
duplicated per section.

## Design decisions & assumptions

- **Design source:** The provided Figma link renders the Tobams Group
  "Training and Development" marketing page. I cross-referenced the design
  against the real page content/copy to make sure text, imagery, and section
  order are accurate rather than approximated from a screenshot alone.
- **Colors:** Brand palette extracted from the design — a deep maroon accent
  (`#6E1E46`) for headings, links, and primary buttons, a near-black
  (`#1C1C1C` / `#262626`) for the hero and CTA banner backgrounds, and a soft
  lavender tint (`#F4EEF4`) used to alternate section backgrounds for visual
  rhythm.
- **Fonts:** Poppins for headings (bold, geometric, matches the design's
  display type) and Inter for body copy, both loaded via `next/font/google`
  so they're self-hosted at build time (no runtime font request, no layout
  shift).
- **Images:** Sourced from Unsplash at the same URLs/crops used in the
  reference build, served through `next/image` for automatic optimization,
  lazy-loading, and responsive `sizes`. All images have descriptive alt text.
- **Nav / footer links:** In-page anchors (`#section-id`) rather than real
  routes, since this assessment scope is a single static page and the linked
  pages (About, Jobs, Projects, etc.) don't exist in this build.
- **Testimonials:** Rendered as a responsive card grid rather than a JS
  carousel — the same content, without adding client-side carousel logic
  that isn't part of the assessment's requirements.

## Responsive behaviour

Verified at 425px (mobile), 768px (tablet), and 1280px+ (desktop) using only
Tailwind's `sm:` / `lg:` responsive prefixes — no custom media queries. The
nav collapses into a toggleable mobile menu below the `lg` breakpoint;
image/text sections stack vertically on mobile and go side-by-side from
`lg:` up.

## Accessibility

- Semantic landmarks throughout: `<header>`, `<nav>`, `<main>`, `<section>`,
  `<footer>`.
- All images carry descriptive `alt` text.
- Visible focus ring (`:focus-visible`) on all interactive elements; nav
  links, buttons, and the mobile menu toggle are all keyboard-reachable.

## AI tool disclosure

Built with the assistance of Claude (Anthropic) for scaffolding, component
structure, and copy transcription from the reference design/content. All
output was reviewed and verified (build + lint) before submission.

## Known issues / TODO

- Nav and footer links point to in-page anchors or `#`, since the linked
  destination pages are out of scope for this assessment.
