import Image from "next/image";
import Link from "next/link";

const TOPICS = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export default function TransformationHub() {
  return (
    <section id="transformation-hub" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=700&q=80"
              alt="A woman standing in a digital city environment, representing the Transformation Hub webinar series"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-maroon">
              Learning With Our CEO:
            </span>
            <h2 className="font-heading text-2xl font-bold text-brand-maroon sm:text-3xl">
              Transformation Hub With Jite Newton
            </h2>
            <p className="text-sm leading-relaxed text-brand-muted sm:text-base">
              Transformation Hub with Jite Newton is a flagship webinar series
              curated by the CEO, Dr. Jite Newton. Designed to elevate career
              trajectories and leadership capabilities, this exclusive event
              offers invaluable insights and strategies for personal and
              professional growth. Whether you&apos;re seeking to advance
              your career or enhance your leadership skills, the
              Transformation Hub provides a transformative learning
              experience to unlock your full potential and drive success in
              your endeavours.
            </p>
            <ul className="grid grid-cols-1 gap-2 text-sm text-brand-dark-2 sm:grid-cols-2">
              {TOPICS.map((topic) => (
                <li key={topic} className="flex items-start gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-maroon"
                    aria-hidden="true"
                  />
                  {topic}
                </li>
              ))}
            </ul>
            <Link
              href="#transformation-hub-learn-more"
              className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-maroon hover:underline"
            >
              Learn More
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
