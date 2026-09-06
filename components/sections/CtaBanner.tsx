import Button from "@/components/ui/Button";

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
    <section id={id} className="bg-brand-dark-2">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 py-14 text-center sm:px-6 sm:py-16">
        {eyebrow && (
          <p className="text-sm font-medium text-white/70">{eyebrow}</p>
        )}
        <h2 className="font-heading text-xl font-bold text-white sm:text-2xl lg:text-3xl">
          {heading}
        </h2>
        <Button href={ctaHref}>{ctaLabel}</Button>
      </div>
    </section>
  );
}
