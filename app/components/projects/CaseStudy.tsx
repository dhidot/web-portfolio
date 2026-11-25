import Image from "next/image";
import Link from "next/link";
import type { Project } from "../../data/projects";

type CaseStudyProps = {
  project: Project;
  nextProject: Project;
};

export default function CaseStudy({ project, nextProject }: CaseStudyProps) {
  const { caseStudy, preview } = project;

  return (
    <article>
      {preview && (
        <section
          aria-label={`${project.title} product preview`}
          className="mx-auto max-w-5xl px-6"
        >
          <div
            className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)] shadow-2xl"
            style={{ backgroundColor: project.accent.background }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage: `linear-gradient(to right, ${project.accent.color} 1px, transparent 1px), linear-gradient(to bottom, ${project.accent.color} 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
            {project.slug === "fina" ? (
              <div className="relative z-10 flex items-end justify-center gap-4 sm:gap-8">
                <div className="relative h-[220px] w-[102px] overflow-hidden rounded-[1.25rem] border-4 border-white/25 bg-[#f7f7f4] shadow-2xl sm:h-[390px] sm:w-[180px] sm:rounded-[2rem]">
                  <Image
                    src={preview.src}
                    alt={preview.alt}
                    fill
                    sizes="(max-width: 639px) 102px, 180px"
                    className="object-contain"
                  />
                </div>
                {project.secondaryPreview && (
                  <div className="relative h-[190px] w-[88px] translate-y-3 overflow-hidden rounded-[1.25rem] border-4 border-white/25 bg-[#f7f7f4] shadow-2xl sm:h-[330px] sm:w-[152px] sm:rounded-[2rem]">
                    <Image
                      src={project.secondaryPreview.src}
                      alt={project.secondaryPreview.alt}
                      fill
                      sizes="(max-width: 639px) 88px, 152px"
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="relative z-10 grid w-[86%] max-w-4xl gap-4 sm:grid-cols-2">
                {[preview, project.secondaryPreview].filter(Boolean).map((frame, index) => (
                  <div
                    key={frame!.src}
                    className="overflow-hidden rounded-lg border border-white/20 bg-[#f7f7f4] shadow-2xl"
                    style={{ transform: index === 1 ? "translateY(12px)" : undefined }}
                  >
                    <div className="flex h-7 items-center gap-1.5 border-b border-black/10 px-3">
                      {[project.accent.color, "#C9C9C4", "#E6E6E2"].map((color) => (
                        <span
                          key={color}
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      <div className="ml-1 h-2.5 flex-1 rounded-full border border-black/10 bg-white/70" />
                    </div>
                    <div className="relative aspect-[1.21/1] w-full">
                      <Image
                        src={frame!.src}
                        alt={frame!.alt}
                        fill
                        sizes="(max-width: 639px) 40vw, (max-width: 1023px) 42vw, 420px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
            {preview.caption}
          </p>
        </section>
      )}

      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <section className="grid gap-8 border-t border-[var(--border)] pt-10 md:grid-cols-[0.35fr_1fr]">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            Overview
          </h2>
          <p className="max-w-3xl text-xl leading-9 text-[var(--foreground)]">
            {caseStudy.overview}
          </p>
        </section>

        <section className="mt-20 grid gap-8 border-t border-[var(--border)] pt-10 md:grid-cols-[0.35fr_1fr]">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            The problem
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
            {caseStudy.problem}
          </p>
        </section>

        <section className="mt-20 grid gap-8 border-t border-[var(--border)] pt-10 md:grid-cols-[0.35fr_1fr]">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            My role
          </h2>
          <ul className="grid max-w-3xl gap-4 sm:grid-cols-2">
            {caseStudy.responsibilities.map((responsibility, index) => (
              <li
                key={responsibility}
                className="border-l border-[var(--border)] pl-5 text-base leading-7 text-[var(--muted)]"
              >
                <span className="mr-2 font-mono text-[9px] text-[var(--accent)]">
                  0{index + 1}
                </span>
                {responsibility}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20 border-t border-[var(--border)] pt-10">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            Approach & decisions
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-3">
            {caseStudy.approach.map((item, index) => (
              <section
                key={item.title}
                className="min-h-64 bg-[var(--background)] p-7 sm:p-8"
              >
                <span className="font-mono text-[9px] text-[var(--accent)]">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-xl font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 border-t border-[var(--border)] pt-10 md:grid-cols-[0.35fr_1fr]">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            Outcome
          </h2>
          <ul className="grid max-w-3xl gap-4">
            {caseStudy.outcome.map((outcome) => (
              <li
                key={outcome}
                className="border-b border-[var(--border)] pb-4 text-base leading-7 text-[var(--foreground)]"
              >
                {outcome}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20 grid gap-8 border-t border-[var(--border)] pt-10 md:grid-cols-[0.35fr_1fr]">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            What I learned
          </h2>
          <ul className="max-w-3xl space-y-4 text-base leading-7 text-[var(--muted)]">
            {caseStudy.learned.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </section>
      </div>

      <nav
        aria-label="More projects"
        className="border-t border-[var(--border)]"
      >
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <Link
            href="/#projects"
            className="group flex min-h-44 flex-col justify-between border-b border-[var(--border)] p-8 transition-colors hover:bg-[var(--surface)] md:border-b-0 md:border-r md:p-12"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Previous
            </span>
            <span className="mt-8 text-2xl font-medium tracking-tight transition-colors group-hover:text-[var(--accent)]">
              Back to selected projects
            </span>
          </Link>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex min-h-44 flex-col justify-between p-8 transition-colors hover:bg-[var(--surface)] md:p-12"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Next project
            </span>
            <span className="mt-8 flex items-end justify-between gap-4 text-2xl font-medium tracking-tight transition-colors group-hover:text-[var(--accent)]">
              {nextProject.title}
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
      </nav>
    </article>
  );
}
