import Link from "next/link";
import { projects } from "../../data/projects";

const projectAccents = [
  {
    accent: "#78B9D8",
    background: "#243B53",
  },
  {
    accent: "#A8754F",
    background: "#1F2327",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40">
        {/* Header */}
        <div className="mb-20 grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--accent)]">
                03
              </span>

              <span className="h-px w-10 bg-[var(--border)]" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                Selected Projects
              </span>
            </div>

            <h2
              className="
                max-w-3xl
                text-4xl
                font-medium
                leading-[1]
                tracking-[-0.04em]
                sm:text-6xl
              "
            >
              Work that turns
              <br />
              <span className="text-[var(--muted)]">
                ideas into systems.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[var(--muted)] lg:justify-self-end">
            A closer look at the products and enterprise
            systems I have worked on across frontend,
            backend, and integration layers.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const visual = projectAccents[index % projectAccents.length];

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <article
                  className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[var(--border)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[var(--accent)]
                  "
                >
                  <div className="grid lg:grid-cols-[1fr_0.8fr]">
                    {/* ============================= */}
                    {/* PROJECT INFO */}
                    {/* ============================= */}

                    <div className="relative p-7 sm:p-10 lg:p-12">
                      {/* Number + Category */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] tracking-[0.25em] text-[var(--subtle)]">
                          0{index + 1}
                        </span>

                        <span className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="mt-16">
                        <h3
                          className="
                            max-w-xl
                            text-4xl
                            font-medium
                            tracking-[-0.04em]
                            transition-colors
                            duration-300
                            group-hover:text-[var(--accent)]
                            sm:text-5xl
                          "
                        >
                          {project.title}
                        </h3>

                        <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="mt-10 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
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
                              group-hover:border-[var(--metallic)]
                            "
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="mt-12 flex items-center justify-between border-t border-[var(--border)] pt-5">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--subtle)]">
                          {project.year}
                        </span>

                        <span
                          className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            font-medium
                            text-[var(--muted)]
                            transition-all
                            duration-300
                            group-hover:gap-3
                            group-hover:text-[var(--foreground)]
                          "
                        >
                          View case study
                          <span>↗</span>
                        </span>
                      </div>
                    </div>

                    {/* ============================= */}
                    {/* VISUAL */}
                    {/* ============================= */}

                    <div
                      className="
                        relative
                        min-h-[320px]
                        overflow-hidden
                        border-t
                        border-[var(--border)]
                        lg:min-h-full
                        lg:border-l
                        lg:border-t-0
                      "
                      style={{
                        backgroundColor: visual.background,
                      }}
                    >
                      {/* Grid */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          opacity-20
                        "
                        style={{
                          backgroundImage: `
                            linear-gradient(
                              to right,
                              ${visual.accent} 1px,
                              transparent 1px
                            ),
                            linear-gradient(
                              to bottom,
                              ${visual.accent} 1px,
                              transparent 1px
                            )
                          `,
                          backgroundSize: "40px 40px",
                        }}
                      />

                      {/* Glow */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          left-1/2
                          top-1/2
                          h-64
                          w-64
                          -translate-x-1/2
                          -translate-y-1/2
                          rounded-full
                          blur-3xl
                          transition-all
                          duration-700
                          group-hover:h-80
                          group-hover:w-80
                        "
                        style={{
                          backgroundColor: visual.accent,
                          opacity: 0.16,
                        }}
                      />

                      {/* Fake Interface */}
                      <div
                        className="
                          absolute
                          left-1/2
                          top-1/2
                          w-[78%]
                          max-w-md
                          -translate-x-1/2
                          -translate-y-1/2
                          rounded-xl
                          border
                          p-5
                          shadow-2xl
                          transition-transform
                          duration-700
                          group-hover:-translate-y-[54%]
                          group-hover:rotate-1
                        "
                        style={{
                          borderColor: `${visual.accent}55`,
                          backgroundColor: `${visual.background}dd`,
                        }}
                      >
                        {/* Interface Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex gap-1.5">
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{
                                backgroundColor: visual.accent,
                              }}
                            />

                            <span
                              className="h-2 w-2 rounded-full opacity-50"
                              style={{
                                backgroundColor: visual.accent,
                              }}
                            />

                            <span
                              className="h-2 w-2 rounded-full opacity-30"
                              style={{
                                backgroundColor: visual.accent,
                              }}
                            />
                          </div>

                          <span
                            className="font-mono text-[8px] tracking-widest"
                            style={{
                              color: `${visual.accent}`,
                            }}
                          >
                            SYSTEM / 0{index + 1}
                          </span>
                        </div>

                        {/* Interface Content */}
                        <div className="mt-8 space-y-3">
                          <div
                            className="h-2 w-1/3 rounded-full"
                            style={{
                              backgroundColor: visual.accent,
                              opacity: 0.7,
                            }}
                          />

                          <div
                            className="h-2 w-2/3 rounded-full"
                            style={{
                              backgroundColor: visual.accent,
                              opacity: 0.25,
                            }}
                          />

                          <div className="grid grid-cols-3 gap-2 pt-4">
                            <div
                              className="h-16 rounded-md"
                              style={{
                                backgroundColor: `${visual.accent}18`,
                                border: `1px solid ${visual.accent}25`,
                              }}
                            />

                            <div
                              className="h-16 rounded-md"
                              style={{
                                backgroundColor: `${visual.accent}18`,
                                border: `1px solid ${visual.accent}25`,
                              }}
                            />

                            <div
                              className="h-16 rounded-md"
                              style={{
                                backgroundColor: `${visual.accent}18`,
                                border: `1px solid ${visual.accent}25`,
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Corner Label */}
                      <div
                        className="
                          absolute
                          bottom-6
                          left-6
                          font-mono
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                        "
                        style={{
                          color: `${visual.accent}`,
                        }}
                      >
                        Selected work
                      </div>

                      <div
                        className="
                          absolute
                          right-6
                          top-6
                          font-mono
                          text-[9px]
                        "
                        style={{
                          color: `${visual.accent}`,
                        }}
                      >
                        0{index + 1} / 02
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--subtle)]">
            Selected work
          </span>

          <span className="text-xs text-[var(--muted)]">
            02 projects
          </span>
        </div>
      </div>
    </section>
  );
}
