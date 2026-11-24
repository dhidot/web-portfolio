export type ProjectPreview = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  objectFit: "contain" | "cover";
};

export type ProjectPreviewFrame = {
  src: string;
  alt: string;
};

export type Project = {
  slug: "fina" | "recruitment-system";
  title: string;
  category: string;
  description: string;
  role: string;
  year: string;
  technologies: string[];
  contribution: string;
  highlights: string[];
  flow: [string, string, string];
  accent: {
    color: string;
    background: string;
  };
  preview?: ProjectPreview;
  secondaryPreview?: ProjectPreviewFrame;
};

export const projects: Project[] = [
  {
    slug: "fina",
    title: "FINA",
    category: "Financial Application",
    description:
      "A digital financial application built to support customer-facing financial services and transaction workflows.",
    role: "Full Stack Developer",
    contribution:
      "Contributed across API development, system integrations, and customer-facing workflows.",
    highlights: [
      "Customer-facing workflows",
      "API development",
      "System integrations",
    ],
    flow: ["Customer", "Application", "Service integration"],
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "SQL Server",
    ],
    year: "2025 — Present",
    accent: {
      color: "#78B9D8",
      background: "#243B53",
    },
    preview: {
      src: "/projects/fina-home.png",
      alt: "FINA mobile home screen with financial service shortcuts.",
      caption: "Public product preview · FINA mobile screens",
      width: 750,
      height: 1624,
      objectFit: "contain",
    },
    secondaryPreview: {
      src: "/projects/fina-login.png",
      alt: "FINA mobile login screen.",
    },
  },
  {
    slug: "recruitment-system",
    title: "Recruitment System",
    category: "Enterprise HR Platform",
    description:
      "An enterprise recruitment platform designed to manage candidate recruitment workflows from application and assessment through interview and candidate lifecycle management.",
    role: "Full Stack Developer",
    contribution:
      "Developed recruitment workflows, including candidate management and online assessments.",
    highlights: [
      "Candidate management",
      "Online assessments",
      "Interview workflows",
    ],
    flow: ["Application", "Assessment", "Interview"],
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "SQL Server",
    ],
    year: "2025 — Present",
    accent: {
      color: "#A8754F",
      background: "#1F2327",
    },
    preview: {
      src: "/projects/recruitment-online-assessment.png",
      alt: "Recruitment system screen showing the online assessment stage.",
      caption: "Public product preview · Recruitment desktop screens",
      width: 895,
      height: 768,
      objectFit: "cover",
    },
    secondaryPreview: {
      src: "/projects/recruitment-login.png",
      alt: "Recruitment system login screen.",
    },
  },
];
