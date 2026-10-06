import {
  FaJava,
  FaLaravel,
  FaAngular,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiSwagger,
} from "react-icons/si";

import {
  Database,
  Network,
  Boxes,
} from "lucide-react";

export const skillGroups = [
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        icon: FaJava,
        color: "#ED8B00",
        },
        {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#6DB33F",
        },
        {
        name: "Laravel",
        icon: FaLaravel,
        color: "#FF2D20",
        },
        {
        name: "REST API",
        icon: Network,
        color: "#78B9D8",
        },
        {
        name: "Microservices",
        icon: Boxes,
        color: "#78B9D8",
        },
    ],
  },

  {
    title: "Frontend",
    skills: [
        {
        name: "Angular",
        icon: FaAngular,
        color: "#DD0031",
        },
        {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        },
        {
        name: "JavaScript",
        icon: FaJs,
        color: "#F7DF1E",
        },
        {
        name: "HTML",
        icon: FaHtml5,
        color: "#E34F26",
        },
        {
        name: "CSS",
        icon: FaCss3Alt,
        color: "#1572B6",
        },
        {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        },
    ],
  },

  {
    title: "Database",
    skills: [
        {
        name: "SQL Server",
        icon: Database,
        color: "#CC2927",
        },
        {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
        },
        {
        name: "Redis",
        icon: SiRedis,
        color: "#DC382D",
        },
    ],
  },

  {
    title: "Tools & Infrastructure",
    skills: [
        {
        name: "Docker",
        icon: FaDocker,
        color: "#2496ED",
        },
        {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
        },
        {
        name: "RabbitMQ",
        icon: SiRabbitmq,
        color: "#FF6600",
        },
        {
        name: "Swagger",
        icon: SiSwagger,
        color: "#85EA2D",
        }
    ],
  },
];