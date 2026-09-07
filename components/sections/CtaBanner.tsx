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
        <div className="rounded-sm bg-[#571244] px-6 py-10 text-center sm:px-10 sm:py-12">
          {eyebrow && (
            <p className="text-base font-semibold text-white">{eyebrow}</p>
          )}
          <p className="mt-1 text-base font-semibold text-white">{heading}</p>
          <Link
            href={ctaHref}
            className="mt-6 inline-flex items-center gap-1.5 rounded-sm bg-white px-6 py-3 text-sm font-semibold text-[#571244] transition-opacity hover:opacity-90"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
