import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";
import type { Project } from "../../data/projects";

type ProjectHeaderProps = {
  project: Project;
};

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-md">
        <nav
          aria-label="Project navigation"
          className="mx-auto flex h-[var(--navbar-height)] max-w-7xl items-center justify-between px-6"
        >
          <Link
            href="/"
            className="flex min-h-11 min-w-11 items-center rounded-sm text-sm font-semibold tracking-wide"
            aria-label="Go to homepage"
          >
            CN.
          </Link>

          <Link
            href="/#projects"
            className="min-h-11 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <span className="flex h-11 items-center gap-2">
              <span aria-hidden="true">←</span>
              Back to projects
            </span>
          </Link>

          <ThemeToggle />
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
            {project.category}
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            {project.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            {project.description}
          </p>
        </div>

        <dl className="mt-14 grid gap-8 border-t border-[var(--border)] pt-8 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Role
            </dt>
            <dd className="mt-2 text-sm text-[var(--foreground)]">
              {project.role}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Period
            </dt>
            <dd className="mt-2 text-sm text-[var(--foreground)]">
              {project.year}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Stack
            </dt>
            <dd className="mt-2 text-sm leading-6 text-[var(--foreground)]">
              {project.technologies.join(" · ")}
            </dd>
          </div>
        </dl>
      </section>
    </>
  );
}
