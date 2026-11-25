const hobbies = [
  {
    number: "01",
    title: "Guitar & Bass",
    description:
      "Playing guitar and bass as a creative outlet outside of software.",
    detail: "Strings · Melody · Groove",
    href: "https://www.instagram.com/rizaldipardede/reel/DXpSH-DD-G_/",
    embedUrl: "https://www.instagram.com/reel/DXpSH-DD-G_/embed/captioned/",
  },
];

export default function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="
        relative
        overflow-hidden
        border-t
        border-[var(--border)]
      "
    >
      {/* Background Detail */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          h-80
          w-80
          -translate-y-1/2
          rounded-full
          bg-[var(--accent)]
          opacity-[0.035]
          blur-[100px]
        "
      />

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-32 lg:py-40">
        {/* Header */}
        <div className="mb-20 grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--accent)]">
                05
              </span>

              <span className="h-px w-10 bg-[var(--border)]" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                Beyond Code
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
              When I&apos;m not
              <br />
              <span className="text-[var(--muted)]">
                building software.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-sm
              text-sm
              leading-7
              text-[var(--muted)]
              lg:justify-self-end
            "
          >
            Outside of software engineering, I spend some of my time playing guitar and bass, and simply enjoying music in a different way.
          </p>
        </div>

        {/* Hobbies */}
        <div className="grid border-t border-[var(--border)]">
          {hobbies.map((hobby) => (
            <article
              key={hobby.title}
              className="group relative grid gap-10 py-10 lg:grid-cols-[0.75fr_0.25fr] lg:items-center"
            >
              {/* Content */}
              <div className="lg:pr-10">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-secondary)]">
                    {hobby.number}
                  </span>
                  <span className="h-px w-8 bg-[var(--border)]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    Personal
                  </span>
                </div>

                <h3
                  className="
                    mt-10
                    text-4xl
                    font-medium
                    tracking-tight
                    transition-colors
                    duration-300
                    group-hover:text-[var(--accent)]
                    sm:text-5xl
                  "
                >
                  {hobby.title}
                </h3>

                <p className="mt-5 max-w-lg text-base leading-8 text-[var(--muted)]">
                  {hobby.description}
                </p>

                <p
                  className="
                    mt-8
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-[var(--text-secondary)]
                  "
                >
                  {hobby.detail}
                </p>

                <a
                  href={hobby.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex min-h-11 items-center gap-3 rounded-full border border-[var(--border)] px-5 text-sm font-medium text-[var(--muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Watch on Instagram
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Instagram Reel */}
              <div className="relative mx-auto w-full max-w-[390px] lg:justify-self-end">
                <div
                  aria-hidden="true"
                  className="absolute -inset-5 rounded-[2.25rem] border border-[var(--accent)] opacity-10 transition-opacity duration-500 group-hover:opacity-25"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 -left-3 h-20 w-20 rounded-full bg-[var(--accent)] opacity-[0.08] blur-2xl"
                />

                <div className="relative overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.16)] transition-transform duration-700 group-hover:-translate-y-1">
                  <div className="mb-2 flex h-9 items-center justify-between px-3">
                    <div className="flex items-center gap-2">
                      <span className="h-6 w-6 rounded-full border border-[var(--border)] bg-[var(--accent)]/15" />
                      <span className="text-xs font-medium text-[var(--foreground)]">
                        rizaldipardede
                      </span>
                    </div>
                    <span className="text-sm tracking-widest text-[var(--muted)]">
                      •••
                    </span>
                  </div>
                  <iframe
                    src={hobby.embedUrl}
                    title="Guitar and bass reel from Instagram"
                    loading="lazy"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="block h-[520px] w-full rounded-lg border-0 bg-black/5 sm:h-[620px]"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div
          className="
            mt-12
            border-t
            border-[var(--border)]
            pt-6
          "
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-secondary)]">
              Outside the terminal
            </span>

            <span className="text-sm text-[var(--muted)]">
              Guitar · Bass · Music
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}