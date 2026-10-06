import FadeIn from "../animations/FadeIn";

const principles = [
  {
    number: "01",
    title: "Build with purpose",
    description:
      "I focus on solving the actual problem before choosing the technology.",
  },
  {
    number: "02",
    title: "Keep systems maintainable",
    description:
      "Clean structure, clear APIs, and predictable code matter as systems grow.",
  },
  {
    number: "03",
    title: "Think beyond the feature",
    description:
      "Performance, security, integration, and long-term reliability are part of the work.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[var(--border)]"
    >
      {/* Subtle background accent */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/4
          h-80
          w-80
          rounded-full
          bg-[var(--accent)]
          opacity-[0.025]
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40">
        {/* Section Header */}
        <div className="mb-20 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--accent)]">
            01
          </span>

          <span className="h-px w-10 bg-[var(--border)]" />

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
            About Me
          </span>
        </div>

        {/* Main Content */}
        <div className="grid gap-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-28">
          {/* Left */}
          <FadeIn>
          <div>
            <h2
              className="
                max-w-4xl
                text-4xl
                font-medium
                leading-[1.05]
                tracking-[-0.04em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              I enjoy turning complex problems into{" "}
              <span className="text-[var(--muted)]">
                simple, reliable software.
              </span>
            </h2>

            <div className="mt-10 max-w-2xl space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
              <p>
                I&apos;m a Full Stack Developer with experience
                building web applications and digital products
                across frontend, backend, and database layers.
              </p>

              <p>
                My main focus is backend development with Java
                and Spring Boot, while also working with Angular,
                Laravel, SQL Server, and PostgreSQL.
              </p>

              <p>
                I&apos;m particularly interested in software
                architecture, API design, system integration,
                security, and building applications that remain
                maintainable as they grow.
              </p>
            </div>
          </div>
          </FadeIn>

          {/* Right */}
          <div className="lg:pt-4">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--subtle)]">
                Engineering Principles
              </span>

              <span className="font-mono text-[10px] text-[var(--subtle)]">
                03
              </span>
            </div>

            <div className="border-t border-[var(--border)]">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="
                    group
                    grid
                    grid-cols-[36px_1fr]
                    gap-5
                    border-b
                    border-[var(--border)]
                    py-6
                  "
                >
                  <span className="font-mono text-[10px] text-[var(--subtle)]">
                    {principle.number}
                  </span>

                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-sm font-medium transition-colors duration-300 group-hover:text-[var(--accent)]">
                        {principle.title}
                      </h3>

                      <span className="text-xs text-[var(--subtle)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                        ↗
                      </span>
                    </div>

                    <p className="mt-2 max-w-md text-sm leading-6 text-[var(--muted)]">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Small identity block */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] font-mono text-xs text-[var(--accent)]">
                CN
              </div>

              <div>
                <p className="text-sm font-medium">
                  Chandra Nindhito
                </p>

                <p className="mt-1 text-xs text-[var(--muted)]">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-t border-[var(--border)] pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--subtle)]">
              Based in Indonesia
            </p>

            <p className="max-w-md text-sm leading-6 text-[var(--muted)] sm:text-right">
              Building software with a balance between
              engineering quality and real-world usability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
