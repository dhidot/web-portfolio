import type { Metadata } from "next";
import CaseStudy from "../../components/projects/CaseStudy";
import ProjectHeader from "../../components/projects/ProjectHeader";
import Footer from "../../components/layout/Footer";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Recruitment System — Chandra Nindhito",
  description:
    "Case study for an enterprise recruitment and candidate assessment platform.",
};

export default function RecruitmentProjectPage() {
  const project = projects[1];
  const nextProject = projects[0];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <ProjectHeader project={project} />
      <CaseStudy project={project} nextProject={nextProject} />
      <Footer />
    </main>
  );
}