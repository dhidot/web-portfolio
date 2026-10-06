export default function FinaProjectPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-5xl px-6 py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
            Financial Application
          </p>

          <h1 className="mt-6 text-6xl font-semibold tracking-[-0.04em] sm:text-8xl">
            FINA
          </h1>

          <p className="mt-8 text-xl leading-8 text-[var(--muted)]">
            A digital financial application built to support
            customer-facing financial services and transaction
            workflows.
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
              FINA is a digital platform where I contribute across
              frontend, backend, API integration, and system
              implementation.
            </p>
          </section>

          <section>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
              My Contribution
            </p>

            <ul className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-[var(--muted)]">
              <li>• Backend API development</li>
              <li>• Frontend implementation</li>
              <li>• Database integration</li>
              <li>• System integration</li>
              <li>• Security and authentication implementation</li>
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