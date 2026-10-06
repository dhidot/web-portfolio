const hobbies = [
  {
    number: "01",
    title: "Guitar",
    description:
      "Playing guitar as a creative outlet outside of software.",
    detail: "Strings · Melody · Expression",
  },
  {
    number: "02",
    title: "Bass",
    description:
      "Exploring grooves, rhythm, and the low end.",
    detail: "Groove · Rhythm · Feel",
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

      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40">
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
        <div className="grid border-t border-[var(--border)] sm:grid-cols-2">
          {hobbies.map((hobby, index) => (
            <article
              key={hobby.title}
              className={`
                group
                relative
                py-10
                transition-colors
                duration-300
                ${
                  index === 0
                    ? "sm:border-r sm:border-[var(--border)] sm:pr-12"
                    : "sm:pl-12"
                }
              `}
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--subtle)]">
                  {hobby.number}
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-[var(--subtle)]
                    transition-colors
                    duration-300
                    group-hover:text-[var(--accent)]
                  "
                >
                  Personal
                </span>
              </div>

              {/* Instrument Visual */}
              <div className="relative mt-12 h-32 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                {/* Strings */}
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 space-y-3 opacity-30">
                  <span className="block h-px bg-[var(--muted)]" />
                  <span className="block h-px bg-[var(--muted)]" />
                  <span className="block h-px bg-[var(--muted)]" />
                  <span className="block h-px bg-[var(--muted)]" />
                </div>

                {/* Instrument Shape */}
                <div
                  className="
                    absolute
                    left-8
                    top-1/2
                    h-14
                    w-14
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[var(--border)]
                    transition-all
                    duration-500
                    group-hover:border-[var(--accent)]
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    left-16
                    top-1/2
                    h-1
                    w-32
                    -translate-y-1/2
                    bg-[var(--border)]
                    transition-colors
                    duration-300
                    group-hover:bg-[var(--accent)]
                  "
                />

                {/* Technical Label */}
                <span
                  className="
                    absolute
                    bottom-4
                    right-5
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-[var(--subtle)]
                  "
                >
                  {hobby.title}
                </span>
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3
                  className="
                    text-3xl
                    font-medium
                    tracking-tight
                    transition-colors
                    duration-300
                    group-hover:text-[var(--accent)]
                  "
                >
                  {hobby.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
                  {hobby.description}
                </p>

                <p
                  className="
                    mt-6
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-[var(--subtle)]
                  "
                >
                  {hobby.detail}
                </p>
              </div>

              {/* Hover Indicator */}
              <span
                className="
                  absolute
                  bottom-10
                  right-0
                  text-sm
                  text-[var(--accent)]
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:opacity-100
                "
              >
                ↗
              </span>
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
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--subtle)]">
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