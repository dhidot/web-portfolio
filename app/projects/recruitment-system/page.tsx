export default function RecruitmentProjectPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-5xl px-6 py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
            Enterprise HR Platform
          </p>

          <h1 className="mt-6 text-6xl font-semibold tracking-[-0.04em] sm:text-8xl">
            Recruitment System
          </h1>

          <p className="mt-8 text-xl leading-8 text-[var(--muted)]">
            An enterprise recruitment platform designed to manage
            candidate recruitment workflows from application through
            interview and candidate lifecycle management.
          </p>
        </div>

        <div className="mt-24 grid gap-12 border-t border-[var(--border)] pt-12 md:grid-cols-3">
          <div>
            <p className="text-sm text-[var(--subtle)]">Role</p>
            <p className="mt-2 text-[var(--foreground)]">
              Full Stack Developer
            </p>
          </div>

          <div>
            <p className="text-sm text-[var(--subtle)]">Year</p>
            <p className="mt-2 text-[var(--foreground)]">
              2025 — Present
            </p>
          </div>

          <div>
            <p className="text-sm text-[var(--subtle)]">Stack</p>
            <p className="mt-2 text-[var(--foreground)]">
              Java · Spring Boot · Angular · SQL Server
            </p>
          </div>
        </div>

        <div className="mt-24 space-y-20">
          <section>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
              Overview
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              A recruitment platform built to support the end-to-end
              recruitment process, including candidate management,
              online assessment, interviews, and candidate status
              management.
            </p>
          </section>

          <section>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
              My Contribution
            </p>

            <ul className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-[var(--muted)]">
              <li>• Recruitment workflow implementation</li>
              <li>• Backend API development</li>
              <li>• Frontend implementation</li>
              <li>• Authentication and authorization</li>
              <li>• Database integration</li>
            </ul>
          </section>

          <section>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
              Technologies
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Java",
                "Spring Boot",
                "Angular",
                "SQL Server",
                "REST API",
                "JWT",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}