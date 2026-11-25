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

export type ProjectCaseStudy = {
  overview: string;
  problem: string;
  responsibilities: string[];
  approach: {
    title: string;
    description: string;
  }[];
  outcome: string[];
  learned: string[];
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
  caseStudy: ProjectCaseStudy;
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
    caseStudy: {
      overview:
        "FINA is a customer-facing financial application that brings product discovery and financial service workflows into one digital experience. My work spans the interfaces and backend services that support those flows.",
      problem:
        "Customer-facing financial workflows need consistent behavior across frontend screens, APIs, databases, and external system integrations while keeping access controlled and the implementation maintainable.",
      responsibilities: [
        "Developed backend APIs and supporting application logic.",
        "Implemented customer-facing frontend workflows.",
        "Worked across database integration and system integrations.",
        "Contributed to authentication and security-related implementation.",
      ],
      approach: [
        {
          title: "API-led integration",
          description:
            "Kept frontend workflows connected to backend services through structured APIs, separating user-facing behavior from integration concerns.",
        },
        {
          title: "Consistent authentication",
          description:
            "Applied authentication and access considerations across relevant application modules instead of handling authorization independently per screen.",
        },
        {
          title: "End-to-end implementation",
          description:
            "Worked across frontend, backend, database, and integration layers so changes remain understandable as one complete product flow.",
        },
      ],
      outcome: [
        "Customer-facing financial service flows are supported through coordinated frontend and backend implementation.",
        "API, database, and system integration work is organized as part of the application rather than as isolated interface changes.",
        "The implementation reflects a shared full-stack approach across different application modules.",
      ],
      learned: [
        "Cross-layer work requires clear boundaries between interface state, API contracts, and system integration behavior.",
        "For enterprise applications, maintainability and predictable access control matter as much as the visible interface.",
      ],
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
    caseStudy: {
      overview:
        "The Recruitment System supports enterprise candidate workflows across application, online assessment, interview, and candidate status management.",
      problem:
        "Recruitment operations involve multiple stages and roles. Candidate information, assessment progress, interview activity, and access permissions need to remain consistent across connected frontend and backend modules.",
      responsibilities: [
        "Implemented recruitment workflow behavior across candidate and assessment modules.",
        "Developed backend APIs for candidate and workflow data.",
        "Built frontend screens and interactions for recruitment operations.",
        "Contributed to authentication and authorization implementation.",
      ],
      approach: [
        {
          title: "Workflow-oriented data model",
          description:
            "Organized recruitment features around candidate stages and related workflow state instead of treating each screen as a separate implementation.",
        },
        {
          title: "Secure role-based access",
          description:
            "Contributed authentication and authorization behavior so application actions are available to the appropriate application context.",
        },
        {
          title: "Connected frontend and API work",
          description:
            "Linked Angular interfaces with backend services and database integration to keep candidate and assessment workflows usable across the system.",
        },
      ],
      outcome: [
        "Candidate management, online assessment, and interview workflows are supported within a connected enterprise application.",
        "Recruitment operations can move across application modules with consistent API and frontend implementation.",
        "Authentication and authorization are part of the workflow implementation rather than a separate afterthought.",
      ],
      learned: [
        "Workflow systems need stable state and access boundaries before adding visual complexity.",
        "A good enterprise interface depends on clear API contracts and predictable stage transitions across the full system.",
      ],
    },
  },
];
