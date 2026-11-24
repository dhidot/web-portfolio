import Link from "next/link";
import { projects } from "../../data/projects";
import ProjectPreview from "../projects/ProjectPreview";

const displayedProjects = projects;

export default function Projects() {
  const projectCount = String(displayedProjects.length).padStart(2, "0");

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-32 lg:py-40">
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

            <h2 className="max-w-3xl text-4xl font-medium leading-[1] tracking-[-0.04em] sm:text-6xl">
              Work that turns
              <br />
              <span className="text-[var(--muted)]">ideas into systems.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[var(--muted)] lg:justify-self-end">
            A closer look at the products and enterprise systems I have
            contributed to across frontend, backend, and integration layers.
          </p>
        </div>

        <div className="space-y-8">
          {displayedProjects.map((project, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block rounded-2xl"
                aria-label={`View ${project.title} case study`}
              >
                <article className="relative overflow-hidden rounded-2xl border border-[var(--border)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[var(--accent)] group-focus-visible:-translate-y-1 group-focus-visible:border-[var(--accent)] motion-reduce:transform-none">
                  <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
                    <div className="relative p-7 sm:p-10 lg:p-12">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-[10px] tracking-[0.25em] text-[var(--text-secondary)]">
                          {number}
                        </span>
                        <span className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                          {project.category}
                        </span>
                      </div>

                      <div className="mt-12 sm:mt-16">
                        <h3 className="max-w-xl text-4xl font-medium tracking-[-0.04em] transition-colors duration-300 group-hover:text-[var(--accent)] group-focus-visible:text-[var(--accent)] sm:text-5xl">
                          {project.title}
                        </h3>
                        <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
                          {project.description}
                        </p>
                        <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
                          {project.contribution}
                        </p>
                      </div>

                      <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${project.title} highlights`}>
                        {project.highlights.slice(0, 3).map((highlight) => (
                          <li
                            key={highlight}
                            className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)]"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)] transition-colors duration-300 group-hover:border-[var(--metallic)] group-focus-visible:border-[var(--metallic)]"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div className="mt-10 flex items-center justify-between border-t border-[var(--border)] pt-5">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                          {project.year}
                        </span>
                        <span className="flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-all duration-300 group-hover:gap-3 group-hover:text-[var(--foreground)] group-focus-visible:gap-3 group-focus-visible:text-[var(--foreground)]">
                          View case study
                          <span aria-hidden="true">↗</span>
                        </span>
                      </div>
                    </div>

                    <ProjectPreview
                      project={project}
                      number={number}
                      total={projectCount}
                    />
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            Selected work
          </span>
          <span className="text-xs text-[var(--muted)]">
            {projectCount} projects
          </span>
        </div>
      </div>
    </section>
  );
}
