import { skillGroups } from "../../data/skills";
import type { CSSProperties } from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40">
        {/* Header */}
        <div className="mb-20 grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--accent)]">
                04
              </span>

              <span className="h-px w-10 bg-[var(--border)]" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                Technical Skills
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
              Tools I use to
              <br />
              <span className="text-[var(--muted)]">
                build reliable software.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[var(--muted)] lg:justify-self-end">
            Technologies and tools I use across application
            development, system integration, infrastructure,
            and database engineering.
          </p>
        </div>

        {/* Skill Matrix */}
        <div className="grid border-t border-[var(--border)] sm:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className={`
                py-10
                ${
                  groupIndex % 2 === 0
                    ? "sm:border-r sm:border-[var(--border)] sm:pr-10"
                    : "sm:pl-10"
                }
                ${
                  groupIndex < 2
                    ? "sm:border-b sm:border-[var(--border)]"
                    : ""
                }
              `}
            >
              {/* Group Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">
                  {group.title}
                </h3>

                <span className="font-mono text-[10px] text-[var(--subtle)]">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>

              {/* Skills */}
              <div className="mt-6 divide-y divide-[var(--border)]">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        py-4
                        transition-colors
                        duration-300
                      "
                    >
                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-[var(--border)]
                          text-[var(--subtle)]
                          transition-all
                          duration-300
                          group-hover:border-[var(--accent)]
                          group-hover:text-[var(--accent)]
                        "
                      >
                      <Icon
                        className="
                          h-4
                          w-4
                          text-[var(--subtle)]
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:text-[var(--skill-color)]
                        "
                        style={{
                          "--skill-color": skill.color,
                        } as React.CSSProperties}
                        aria-hidden="true"
                      />
                      </div>

                      {/* Name */}
                      <span
                        className="
                          text-sm
                          text-[var(--muted)]
                          transition-colors
                          duration-300
                          group-hover:text-[var(--foreground)]
                        "
                      >
                        {skill.name}
                      </span>

                      {/* Arrow */}
                      <span
                        className="
                          ml-auto
                          text-xs
                          text-[var(--subtle)]
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-[var(--accent)]
                          group-hover:opacity-100
                        "
                      >
                        ↗
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--subtle)]">
            Stack
          </span>

          <span className="text-sm text-[var(--muted)]">
            Full Stack · APIs · Databases · Infrastructure
          </span>
        </div>
      </div>
    </section>
  );
}