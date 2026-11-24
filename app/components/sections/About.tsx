import FadeIn from "../animations/FadeIn";
import { profile } from "../../data/profile";

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

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-32 lg:py-40">
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
                I&apos;m a {profile.role} at BCA Finance, working across backend
                services, web interfaces, and system integrations for
                enterprise applications.
              </p>

              <p>
                I enjoy tracing how a feature works end to end—from API design
                and authentication to data flow and the user experience. My
                focus is building software that is understandable, reliable,
                and practical to maintain.
              </p>
            </div>
          </div>
          </FadeIn>

          {/* Right */}
          <div className="lg:pt-4">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                Engineering Principles
              </span>

              <span className="font-mono text-[10px] text-[var(--text-secondary)]">
                03
              </span>
            </div>

            <div className="border-t border-[var(--border)]">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="
                    grid
                    grid-cols-[36px_1fr]
                    gap-5
                    border-b
                    border-[var(--border)]
                    py-6
                  "
                >
                  <span className="font-mono text-[10px] text-[var(--text-secondary)]">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="text-sm font-medium">
                      {principle.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-[var(--muted)]">
                      {principle.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Small identity block */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] font-mono text-xs text-[var(--accent)]">
                CN
              </div>

              <div>
                <p className="text-sm font-medium">
                  {profile.name}
                </p>

                <p className="mt-1 text-xs text-[var(--muted)]">
                  {profile.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-t border-[var(--border)] pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
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
