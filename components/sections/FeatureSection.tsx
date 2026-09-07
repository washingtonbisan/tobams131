import Image from "next/image";
import Link from "next/link";

interface FeatureSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  ctaLabel?: string;
  ctaHref?: string;
  bulletsIntro?: string;
}

export default function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  bullets,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  ctaLabel,
  ctaHref,
  bulletsIntro,
}: FeatureSectionProps) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className={`relative h-64 w-full overflow-hidden rounded-sm sm:h-80 lg:h-[360px] ${
              imagePosition === "right" ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div
            className={`flex flex-col gap-3 ${
              imagePosition === "right" ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {eyebrow && (
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-maroon">
                {eyebrow}
              </span>
            )}
            <h2 className="text-2xl font-bold text-brand-maroon sm:text-3xl">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-brand-muted">
              {description}
            </p>
            {bulletsIntro && (
              <p className="text-base font-semibold text-brand-dark-2">
                {bulletsIntro}
              </p>
            )}
            <ul className="flex flex-col gap-2 text-base text-brand-dark-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-maroon"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-sm bg-brand-maroon px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-maroon-dark"
              >
                {ctaLabel}
                <span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
