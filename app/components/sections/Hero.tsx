import { existsSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import HeroAnimation from "../animations/HeroAnimation";
import { profile } from "../../data/profile";

const capabilities = [
  {
    number: "01",
    title: "Backend systems",
    description: "I build backend services and APIs for enterprise applications.",
  },
  {
    number: "02",
    title: "Authentication",
    description: "I work on authentication and secure application access.",
  },
  {
    number: "03",
    title: "Product integration",
    description: "I connect application workflows through APIs and system integrations.",
  },
];

export default function Hero() {
  const [givenName, ...familyNames] = profile.name.split(" ");
  const cvUrl =
    profile.cvUrl && existsSync(join(process.cwd(), "public", profile.cvUrl))
      ? profile.cvUrl
      : null;

  return (
    <section className="relative isolate flex min-h-[calc(100svh-var(--navbar-height))] overflow-hidden">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 z-0 opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-32 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-40"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-6 py-20 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-20">
          <div className="min-w-0">
            <HeroAnimation delay={0.1}>
              <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="flex items-start gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                  <span aria-hidden="true" className="relative mt-1 flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                  </span>
                  <span>{profile.role} · {profile.specialization}</span>
                </span>
                <span aria-hidden="true" className="hidden h-4 w-px bg-[var(--border)] sm:block" />
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  {profile.location}
                </span>
              </div>
            </HeroAnimation>

            <HeroAnimation delay={0.2}>
              <h1
                aria-label={profile.name}
                className="max-w-5xl text-[clamp(3.25rem,15vw,6rem)] font-semibold leading-[0.9] tracking-[-0.055em] sm:text-8xl lg:text-[clamp(5rem,8.5vw,8.5rem)]"
              >
                {givenName}
                <br />
                <span className="text-[var(--muted)]">{familyNames.join(" ")}</span>
                <span className="text-[var(--accent)]">.</span>
              </h1>
            </HeroAnimation>

            <HeroAnimation delay={0.3}>
              <p className="mt-10 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                {profile.description}
              </p>
            </HeroAnimation>

            <HeroAnimation delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="#projects"
                  className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-[var(--foreground)] px-6 py-3.5 text-sm font-medium text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-85 motion-reduce:transform-none"
                >
                  View Projects
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                </Link>
                {cvUrl && (
                  <a
                    href={cvUrl}
                    download
                    className="inline-flex min-h-11 items-center rounded-full border border-[var(--border)] px-6 py-3.5 text-sm font-medium text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                  >
                    Download CV
                  </a>
                )}
                <Link
                  href="#contact"
                  className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  Get in touch
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">↗</span>
                </Link>
              </div>
            </HeroAnimation>

            <dl className="mt-16 flex flex-wrap gap-x-8 gap-y-5 border-t border-[var(--border)] pt-6 md:mt-20">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">Currently</dt>
                <dd className="mt-2 text-sm leading-6 text-[var(--muted)]">{profile.currentWork}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">Focus</dt>
                <dd className="mt-2 text-sm leading-6 text-[var(--muted)]">{profile.focus}</dd>
              </div>
            </dl>
          </div>

          <div className="relative isolate min-w-0 lg:pl-8">
            <div aria-hidden="true" className="absolute -right-2 -top-10 hidden font-mono text-[10px] tracking-widest text-[var(--text-secondary)] lg:block">
              06°12&apos;S / 106°49&apos;E
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--accent)] opacity-[0.08] blur-3xl" />
              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-secondary)]">Developer Profile</p>
                  <p className="mt-2 text-sm font-medium">{profile.name}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">{profile.role}</p>
                </div>
                {profile.availability && (
                  <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span className="text-[10px] font-medium tracking-wide text-[var(--muted)]">{profile.availability.label}</span>
                  </div>
                )}
              </div>

              <ol className="relative mt-6 border-t border-[var(--border)]">
                {capabilities.map((item, index) => (
                  <li
                    key={item.number}
                    className={`flex gap-4 py-4 ${index !== capabilities.length - 1 ? "border-b border-[var(--border)]" : ""}`}
                  >
                    <span aria-hidden="true" className="pt-1 font-mono text-[10px] text-[var(--text-secondary)]">{item.number}</span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-sm font-medium">{item.title}</h2>
                      <p className="mt-1 text-xs leading-6 text-[var(--muted)]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="relative mt-4 border-t border-[var(--border)] pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">Get in touch</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex min-h-11 max-w-full items-center break-all font-mono text-[11px] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {profile.email}
                </a>
              </div>
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-5 -left-5 -z-10 h-24 w-24 rounded-xl border border-[var(--accent)] opacity-20" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-3 -top-3 -z-10 h-16 w-16 border-r border-t border-[var(--accent)] opacity-40" />
          </div>
        </div>

        <div aria-hidden="true" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--text-secondary)]">Scroll to explore</span>
          <span className="h-px w-10 bg-[var(--border)]" />
        </div>
      </div>
    </section>
  );
}
