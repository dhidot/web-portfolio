type Profile = {
  name: string;
  role: string;
  specialization: string;
  location: string;
  description: string;
  currentWork: string;
  focus: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string | null;
  cvUrl: `/cv/${string}.pdf` | null;
  availability: {
    label: string;
    description: string;
  } | null;
};

export const profile: Profile = {
  name: "Chandra Nindhito",
  role: "Full Stack Developer",
  specialization: "Backend Focus",
  location: "Indonesia",
  description:
    "I build enterprise applications for financial services and recruitment, with a focus on backend systems, authentication, and API integrations.",
  currentWork: "Building enterprise applications at BCA Finance",
  focus: "Backend · Authentication · Integration",
  email: "chandranindhito@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/dhitochan/",
  // Fill these only when the profile URL is confirmed and the PDF exists in public/cv.
  githubUrl: null,
  cvUrl: null,
  availability: {
    label: "Open to conversations",
    description:
      "Interesting projects, engineering opportunities, and conversations around building better software.",
  },
};
