import Link from "next/link";

interface CtaBannerProps {
  id?: string;
  eyebrow?: string;
  heading: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function CtaBanner({
  id,
  eyebrow,
  heading,
  ctaLabel,
  ctaHref,
}: CtaBannerProps) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-[28px] bg-[rgb(87,18,68)] px-6 py-10 text-center sm:px-10 sm:py-12">
          {eyebrow && (
            <p className="text-sm font-semibold text-white sm:text-base">
              {eyebrow}
            </p>
          )}
          <p className="mt-1 text-sm font-semibold text-white sm:text-base">
            {heading}
          </p>
          <Link
            href={ctaHref}
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[rgb(87,18,68)] transition-opacity hover:opacity-90"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
