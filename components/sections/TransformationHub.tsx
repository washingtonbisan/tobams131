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
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="rounded-sm bg-[#FBEAF0] p-6 sm:p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 w-full overflow-hidden rounded-sm sm:h-80 lg:h-[420px]">
              <Image
                src="/jite.png"
                alt="A woman standing in a digital city environment, representing the Transformation Hub webinar series"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-sm bg-[#571244] px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-white"
                  aria-hidden="true"
                />
                Ovundah Nyenke
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-maroon">
                Learning With Our CEO:
              </span>
              <h2 className="text-2xl font-bold text-brand-maroon sm:text-3xl">
                Transformation Hub With Jite Newton
              </h2>
              <p className="text-base leading-relaxed text-brand-muted">
                Transformation Hub with Jite Newton is a flagship webinar series
                curated by the CEO, Dr. Jite Newton. Designed to elevate career
                trajectories and leadership capabilities, this exclusive event
                offers invaluable insights and strategies for personal and
                professional growth. Whether you&apos;re seeking to advance your
                career or enhance your leadership skills, the Transformation Hub
                provides a transformative learning experience to unlock your
                full potential and drive success in your endeavours.
              </p>
              <ul className="grid grid-cols-1 gap-2 text-base text-brand-dark-2 sm:grid-cols-2">
                {TOPICS.map((topic) => (
                  <li key={topic} className="flex items-start gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-maroon"
                      aria-hidden="true"
                    />
                    {topic}
                  </li>
                ))}
              </ul>
              <Link
                href="#transformation-hub-learn-more"
                className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-sm bg-[#571244] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Learn More
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
