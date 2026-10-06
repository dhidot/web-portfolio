const experiences = [
  {
    period: "2024 — Present",
    company: "BCA Finance",
    role: "Full Stack Developer",
    description:
      "Developing and maintaining enterprise applications across backend, frontend, database, and system integration layers, with a focus on reliable APIs, secure authentication, and maintainable application architecture.",
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "SQL Server",
      "Laravel",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40">
        {/* Section Header */}
        <div className="mb-20 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--accent)]">
            02
          </span>

          <span className="h-px w-10 bg-[var(--border)]" />

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
            Experience
          </span>
        </div>

        {/* Experience */}
        <div className="relative">
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="grid gap-12 lg:grid-cols-[0.35fr_1fr]"
            >
              {/* Left Meta */}
              <div className="relative">
                <div className="sticky top-32">
                  <p className="font-mono text-xs tracking-wider text-[var(--subtle)]">
                    {experience.period}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                      Current Role
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="relative">
                {/* Company */}
                <div className="flex flex-col gap-3 border-b border-[var(--border)] pb-8 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--subtle)]">
                      Company
                    </p>

                    <h3 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                      {experience.company}
                    </h3>
                  </div>

                  <p className="text-sm text-[var(--muted)]">
                    {experience.role}
                  </p>
                </div>

                {/* Description */}
                <div className="py-10">
                  <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
                    {experience.description}
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="grid gap-8 border-t border-[var(--border)] py-10 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--subtle)]">
                      Focus
                    </p>

                    <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                      <li className="flex gap-3">
                        <span className="text-[var(--accent)]">→</span>
                        Backend & API development
                      </li>

                      <li className="flex gap-3">
                        <span className="text-[var(--accent)]">→</span>
                        Frontend application development
                      </li>

                      <li className="flex gap-3">
                        <span className="text-[var(--accent)]">→</span>
                        System integration
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--subtle)]">
                      Engineering
                    </p>

                    <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                      <li className="flex gap-3">
                        <span className="text-[var(--accent)]">→</span>
                        Authentication & security
                      </li>

                      <li className="flex gap-3">
                        <span className="text-[var(--accent)]">→</span>
                        Database integration
                      </li>

                      <li className="flex gap-3">
                        <span className="text-[var(--accent)]">→</span>
                        Application maintainability
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="border-t border-[var(--border)] pt-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--subtle)]">
                      Technologies
                    </p>

                    <div className="flex max-w-xl flex-wrap gap-2 sm:justify-end">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-full
                            border
                            border-[var(--border)]
                            px-3
                            py-1.5
                            text-xs
                            text-[var(--muted)]
                            transition-colors
                            duration-300
                            hover:border-[var(--accent)]
                            hover:text-[var(--accent)]
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-1
                    -top-1
                    h-12
                    w-12
                    border-r
                    border-t
                    border-[var(--accent)]
                    opacity-20
                  "
                />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-24 flex flex-col gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--subtle)]">
            Career
          </span>

          <span className="text-sm text-[var(--muted)]">
            Building enterprise software since 2024
          </span>
        </div>
      </div>
    </section>
  );
}
