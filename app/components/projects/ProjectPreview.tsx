import Image from "next/image";
import type { Project } from "../../data/projects";

type ProjectPreviewProps = {
  project: Project;
  number: string;
  total: string;
};

export default function ProjectPreview({
  project,
  number,
  total,
}: ProjectPreviewProps) {
  const { accent, preview, secondaryPreview, flow } = project;

  return (
    <div
      className="relative flex min-h-80 overflow-hidden border-t border-[var(--border)] lg:min-h-full lg:border-l lg:border-t-0"
      style={{ backgroundColor: accent.background }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, ${accent.color} 1px, transparent 1px), linear-gradient(to bottom, ${accent.color} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {preview ? (
        <figure className="relative flex min-h-80 w-full items-center justify-center px-6 pb-16 pt-10 sm:px-8 sm:pb-18 sm:pt-12">
          {project.slug === "fina" ? (
            <div className="flex items-end justify-center gap-3 sm:gap-5">
              <div className="relative h-[300px] w-[138px] overflow-hidden rounded-[1.5rem] border-[5px] border-white/25 bg-[#F7F7F4] shadow-2xl transition-transform duration-700 group-hover:-translate-y-1 sm:h-[360px] sm:w-[166px]">
                <div className="absolute left-1/2 top-1.5 z-10 h-4 w-14 -translate-x-1/2 rounded-full bg-[#1f2327]" />
                <Image
                  src={preview.src}
                  alt={preview.alt}
                  fill
                  sizes="(max-width: 639px) 138px, 166px"
                  className="object-contain"
                />
              </div>
              {secondaryPreview && (
                <div className="relative h-[260px] w-[120px] translate-y-3 overflow-hidden rounded-[1.5rem] border-[5px] border-white/25 bg-[#F7F7F4] shadow-2xl transition-transform duration-700 group-hover:-translate-y-1 sm:h-[310px] sm:w-[143px]">
                  <div className="absolute left-1/2 top-1.5 z-10 h-4 w-12 -translate-x-1/2 rounded-full bg-[#1f2327]" />
                  <Image
                    src={secondaryPreview.src}
                    alt={secondaryPreview.alt}
                    fill
                    sizes="(max-width: 639px) 120px, 143px"
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="grid w-[92%] max-w-[520px] gap-3 sm:grid-cols-2">
              {[preview, secondaryPreview].filter(Boolean).map((frame, index) => (
                <div
                  key={frame?.src}
                  className="relative overflow-hidden rounded-lg border border-white/20 bg-[#f7f7f4] shadow-2xl transition-transform duration-700 group-hover:-translate-y-1"
                  style={{ transform: index === 1 ? "translateY(12px)" : undefined }}
                >
                  <div className="flex h-6 items-center gap-1 border-b border-black/10 px-2">
                    {[accent.color, "#C9C9C4", "#E6E6E2"].map((color) => (
                      <span
                        key={color}
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    <div className="ml-1 h-2 flex-1 rounded-full border border-black/10 bg-white/70" />
                  </div>
                  <div className="relative aspect-[1.21/1] w-full">
                    <Image
                      src={frame!.src}
                      alt={frame!.alt}
                      fill
                      sizes="(max-width: 639px) 43vw, (max-width: 1023px) 44vw, 18vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
              <div className="sr-only">
                {preview.caption}
              </div>
            </div>
          )}
          <figcaption className="absolute bottom-6 left-6 max-w-[calc(100%-3rem)] font-mono text-[9px] uppercase tracking-[0.16em] text-white/85 sm:bottom-8 sm:left-8">
            {preview.caption}
          </figcaption>
        </figure>
      ) : (
        <div className="relative flex w-full items-center justify-center p-8">
          <div className="w-full max-w-md rounded-xl border border-white/20 bg-black/15 p-6 text-white/90 shadow-2xl">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
              Illustrative product flow · Sample data
            </p>
            <ol className="mt-8 grid gap-4 sm:grid-cols-3">
              {flow.map((step, index) => (
                <li key={step} className="flex items-center gap-3 text-sm font-medium">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 font-mono text-[10px]">
                    0{index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      <span
        aria-hidden="true"
        className="absolute right-6 top-6 font-mono text-[9px] tracking-[0.2em]"
        style={{ color: accent.color }}
      >
        {number} / {total}
      </span>
    </div>
  );
}
