const OUTCOMES = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementDevelopmentProgram() {
  return (
    <section id="management-development" className="bg-brand-lavender">
      <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <img
          src="/ManageDev.png"
          alt="Management Development program picture"
        />
        <h2 className="font-heading text-2xl font-bold text-brand-maroon sm:text-3xl">
          Management Development Program
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
          Tobams Group offers a comprehensive Management Development Program
          designed to equip corporate organisations with the high-performing
          leaders they need to thrive.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
          Our program includes workshops, seminars, coaching sessions, online
          courses, and experiential learning opportunities designed to improve
          leadership, strategic thinking, communication, and other essential
          managerial competencies for corporate organisations.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((outcome) => (
            <li
              key={outcome}
              className="rounded-xl border border-brand-border bg-white px-4 py-5 text-sm font-semibold text-brand-dark-2 shadow-sm"
            >
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
