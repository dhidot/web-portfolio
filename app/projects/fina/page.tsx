import type { Metadata } from "next";
import CaseStudy from "../../components/projects/CaseStudy";
import ProjectHeader from "../../components/projects/ProjectHeader";
import Footer from "../../components/layout/Footer";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "FINA — Chandra Nindhito",
  description:
    "Case study for FINA, a customer-facing financial application.",
};

export default function FinaProjectPage() {
  const project = projects[0];
  const nextProject = projects[1];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <ProjectHeader project={project} />
      <CaseStudy project={project} nextProject={nextProject} />
      <Footer />
    </main>
  );
}