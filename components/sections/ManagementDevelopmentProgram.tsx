import Image from "next/image";

const OUTCOMES = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementDevelopmentProgram() {
  return (
    <section id="management-development" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid overflow-hidden rounded-sm bg-[#571244] lg:grid-cols-2">
          <div className="relative h-64 w-full sm:h-80 lg:h-full lg:min-h-[480px]">
            <Image
              src="/ManageDev.png"
              alt="Management Development program picture"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-4 p-6 sm:p-10 lg:p-14">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Management Development Program
            </h2>
            <p className="text-base leading-relaxed text-white/80">
              Tobams Group offers a comprehensive Management Development Program
              designed to equip corporate organisations with the high-performing
              leaders they need to thrive. Our program includes workshops,
              seminars, coaching sessions, online courses, and experiential
              learning opportunities designed to improve leadership, strategic
              thinking, communication, and other essential managerial
              competencies for corporate organisations.
            </p>

            <ul className="mt-2 flex flex-col gap-3">
              {OUTCOMES.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-center gap-3 rounded-sm bg-white/10 px-4 py-3 text-sm font-semibold text-white"
                >
                  <span
                    className="h-2 w-2 shrink-0 rotate-45 bg-white"
                    aria-hidden="true"
                  />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
