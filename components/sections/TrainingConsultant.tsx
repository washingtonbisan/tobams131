import Link from "next/link";

const CARDS = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function TrainingConsultant() {
  return (
    <section id="consultant" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="rounded-[28px] bg-brand-lavender p-6 sm:p-10 lg:p-14">
          <h2 className="font-heading text-2xl font-bold text-brand-maroon sm:text-3xl">
            Training The Consultant
          </h2>
          <p className="mt-2 text-sm font-semibold text-brand-dark-2 sm:text-base">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-brand-muted sm:text-base">
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified
            training consultant. Learn from professionals in the field, immerse
            yourself in a thorough curriculum, and hone your training methods
            through interactive workshops. Participating in our program will
            enable you to gain expertise in diverse courses while also
            developing the abilities to mentor and encourage others in their
            career advancement.
          </p>

          {/* One unified panel — internal 2x2 text grid, no per-item card backgrounds */}
          <div className="mt-8 rounded-2xl bg-[rgb(87,18,68)] p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
              {CARDS.map((card) => (
                <div key={card.title}>
                  <h3 className="font-heading text-base font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="#consultant-learn-more"
              className="inline-flex items-center gap-1.5 rounded-full bg-[rgb(87,18,68)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
