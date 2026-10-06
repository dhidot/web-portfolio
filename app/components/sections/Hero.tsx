import Link from "next/link";
import HeroAnimation from "../animations/HeroAnimation";

const capabilities = [
  {
    number: "01",
    title: "Backend",
    description: "Java · Spring Boot",
  },
  {
    number: "02",
    title: "Frontend",
    description: "Angular · TypeScript",
  },
  {
    number: "03",
    title: "Architecture",
    description: "API · Security · Performance",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen overflow-hidden">
      {/* Technical Grid */}
      <div className="hero-grid pointer-events-none absolute inset-0 -z-20" />

      {/* Main Accent Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          -z-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[var(--accent)]
          opacity-[0.06]
          blur-[120px]
        "
      />

      {/* Top Decorative Line */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-32
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-[var(--accent)]
          to-transparent
          opacity-40
        "
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-6 py-32">
        <div className="grid items-center gap-20 lg:grid-cols-[1.25fr_0.75fr]">
          {/* ================================================= */}
          {/* LEFT */}
          {/* ================================================= */}

          <div>
            <HeroAnimation delay={0.1}>
              {/* Eyebrow */}
              <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                </span>

                Full Stack Developer
              </span>

              <span className="hidden h-4 w-px bg-[var(--border)] sm:block" />

              <span className="text-xs uppercase tracking-[0.2em] text-[var(--subtle)]">
                Indonesia
              </span>
            </div>
            </HeroAnimation>

            {/* Heading */}
            <HeroAnimation delay={0.2}>
            <h1
              className="
                max-w-5xl
                text-6xl
                font-semibold
                leading-[0.9]
                tracking-[-0.055em]
                sm:text-8xl
                lg:text-[8.5rem]
              "
            >
              Chandra
              <br />

              <span className="text-[var(--muted)]">
                Nindhito
              </span>

              <span className="text-[var(--accent)]">
                .
              </span>
            </h1>
            </HeroAnimation>

            <HeroAnimation delay={0.2}>
            {/* Description */}
            <p className="mt-10 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            Full Stack Developer focused on backend systems, APIs, and enterprise applications.
            </p>
            </HeroAnimation>

            <HeroAnimation delay={0.4}>
            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[var(--foreground)]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-[var(--background)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:opacity-85
                "
              >
                View Projects

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>

              <Link
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-[var(--muted)]
                  transition-colors
                  hover:text-[var(--foreground)]
                "
              >
                Get in touch

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </Link>
            </div>
            </HeroAnimation>

            {/* Bottom Meta */}
            <div className="mt-20 flex flex-wrap gap-x-8 gap-y-4 border-t border-[var(--border)] pt-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--subtle)]">
                  Currently
                </p>

                <p className="mt-2 text-sm text-[var(--muted)]">
                  Building digital products
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--subtle)]">
                  Experience
                </p>

                <p className="mt-2 text-sm text-[var(--muted)]">
                  Full Stack Engineering
                </p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT */}
          {/* ================================================= */}

          <div className="relative lg:pl-8">
            {/* Decorative Coordinates */}
            <div className="absolute -right-2 -top-10 hidden font-mono text-[10px] tracking-widest text-[var(--subtle)] lg:block">
              06°12&apos;S / 106°49&apos;E
            </div>

            {/* Profile Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[var(--border)]
                bg-[color-mix(in_srgb,var(--background)_88%,transparent)]
                p-6
                shadow-2xl
                backdrop-blur-xl
                sm:p-8
              "
            >
              {/* Card Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[var(--accent)]
                  opacity-[0.08]
                  blur-3xl
                "
              />

              {/* Header */}
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--subtle)]">
                    Developer Profile
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    CHANDRA.DEV
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

                  <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--muted)]">
                    Available
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-[var(--border)]" />

              {/* Capabilities */}
              <div>
                {capabilities.map((item, index) => (
                  <div
                    key={item.number}
                    className={`
                      group
                      flex
                      gap-5
                      py-5
                      ${
                        index !== capabilities.length - 1
                          ? "border-b border-[var(--border)]"
                          : ""
                      }
                    `}
                  >
                    <span className="font-mono text-[10px] text-[var(--subtle)]">
                      {item.number}
                    </span>

                    <div className="flex-1">
                      <p className="text-sm font-medium transition-colors group-hover:text-[var(--accent)]">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs text-[var(--muted)]">
                        {item.description}
                      </p>
                    </div>

                    <span className="text-xs text-[var(--subtle)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                      ↗
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 flex items-center justify-between">
                <span className="font-mono text-[10px] text-[var(--subtle)]">
                  STATUS
                </span>

                <span className="font-mono text-[10px] text-[var(--muted)]">
                  BUILDING / SHIPPING / LEARNING
                </span>
              </div>
            </div>

            {/* Decorative Frame */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-5
                -left-5
                -z-10
                h-24
                w-24
                rounded-xl
                border
                border-[var(--accent)]
                opacity-20
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-3
                -top-3
                -z-10
                h-16
                w-16
                border-r
                border-t
                border-[var(--accent)]
                opacity-40
              "
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--subtle)]">
            Scroll to explore
          </span>

          <span className="h-px w-10 bg-[var(--border)]" />
        </div>
      </div>
    </section>
  );
}