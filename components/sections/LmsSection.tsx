import Image from "next/image";
import Link from "next/link";

interface LmsSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  bullets: string[];
  bulletsIntro?: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * LmsSection — the "Learning Management System" block.
 *
 * Layered colors:
 * - Outer band (rgb(233,226,231)) stretches full-bleed edge-to-edge of the
 *   section, but is only as tall as this block's own content — it does not
 *   fill the whole section height.
 * - Card (rgb(218,205,215)), slightly rounded corners, sits BEHIND the text
 *   content on the right — not behind the photo.
 * - Circular photo on the left sits directly on the outer band, no card
 *   behind it.
 */
export default function LmsSection({
  id,
  eyebrow,
  title,
  description,
  bullets,
  bulletsIntro,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
}: LmsSectionProps) {
  return (
    <section id={id} className="bg-white">
      <div className="w-full bg-[rgb(233,226,231)] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Circular photo — no card behind it */}
            <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-full lg:order-1">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 80vw"
                className="object-cover"
              />
            </div>

            {/* Card behind the text content */}
            <div className="flex flex-col gap-4 rounded-[28px] bg-[rgb(218,205,215)] p-6 sm:p-8 lg:order-2 lg:p-10">
              {eyebrow && (
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-maroon">
                  {eyebrow}
                </span>
              )}
              <h2 className="font-heading text-2xl font-bold text-brand-maroon sm:text-3xl">
                {title}
              </h2>
              <p className="text-sm leading-relaxed text-brand-muted sm:text-base">
                {description}
              </p>
              {bulletsIntro && (
                <p className="text-sm font-semibold text-brand-dark-2">
                  {bulletsIntro}
                </p>
              )}
              <ul className="grid grid-cols-1 gap-2 text-sm text-brand-dark-2 sm:grid-cols-2">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-maroon"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              {ctaLabel && ctaHref && (
                <Link
                  href={ctaHref}
                  className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-[rgb(87,18,68)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  {ctaLabel}
                  <span aria-hidden="true">↗</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
