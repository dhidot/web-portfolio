import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-t
        border-[var(--border)]
      "
    >
      {/* Background Accent */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/2
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-[var(--accent)]
          opacity-[0.05]
          blur-[120px]
        "
      />

      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40">
        {/* Header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--accent)]">
            06
          </span>

          <span className="h-px w-10 bg-[var(--border)]" />

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
            Contact
          </span>
        </div>

        {/* Main */}
        <div className="relative grid gap-16 lg:grid-cols-[1fr_0.4fr] lg:items-end">
          {/* Left */}
          <div>
            <h2
              className="
                max-w-4xl
                text-5xl
                font-medium
                leading-[0.95]
                tracking-[-0.05em]
                sm:text-7xl
                lg:text-8xl
              "
            >
              Let&apos;s build
              <br />
              <span className="text-[var(--muted)]">
                something meaningful.
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-[var(--muted)]
                sm:text-lg
              "
            >
              Whether you want to discuss a project, an
              opportunity, or simply connect, feel free to
              reach out.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {/* Email */}
              <a
                href="mailto:chandranindhito@gmail.com"
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
                <Mail className="h-4 w-4" />

                Email Me

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[var(--border)]
                  px-5
                  py-3.5
                  text-sm
                  font-medium
                  text-[var(--muted)]
                  transition-all
                  duration-300
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                "
              >
                <FaGithub className="h-4 w-4" />

                GitHub

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dhitochan/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[var(--border)]
                  px-5
                  py-3.5
                  text-sm
                  font-medium
                  text-[var(--muted)]
                  transition-all
                  duration-300
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                "
              >
                <FaLinkedinIn className="h-4 w-4" />

                LinkedIn

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:block">
            <div
              className="
                relative
                border-l
                border-[var(--border)]
                pl-8
              "
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--subtle)]">
                Open to
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Interesting projects, engineering
                opportunities, and conversations around
                building better software.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-[var(--accent)]
                      opacity-60
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-[var(--accent)]
                    "
                  />
                </span>

                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
                  Available for conversation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-24 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--subtle)]">
            Get in touch
          </span>

          <span className="font-mono text-xs text-[var(--muted)]">
            chandranindhito@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
}