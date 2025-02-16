import perprojectMockup from "../../assets/img/perprojectMockup.png";

export interface ProjectType {
    id: number
  name: string;
  description: string;
  images: string[];
  github?: string;
  stack: string[];
}

export const projects: ProjectType[] = [
  {
    id: 1,
    name: "PerProject",
    description:
      "A self-hosted project management app with AI features like task generation and sprint retros. Designed for Docker deployment with daily database backups. Integrates with OpenAI using the user's account. The app allows users to create and manage projects, tasks, and sprints, as well as oversee their accounts and organization.",
    images: [perprojectMockup],
    github: "https://github.com/JacekGaw/PerProject",
    stack: ["Typescript", "React JS", "Express JS", "Drizzle ORM", "Docker", "Tailwind CSS", "PostgreSQL", "Open AI API", "Jest", "Supertest"]
    },
    {
        id: 2,
        name: "PerProject 2",
        description:
          "A self-hosted project management app with AI features like task generation and sprint retros. Designed for Docker deployment with daily database backups. Integrates with OpenAI using the user's account. The app allows users to create and manage projects, tasks, and sprints, as well as oversee their accounts and organization.",
        images: [perprojectMockup],
        github: "https://github.com/JacekGaw/PerProject",
        stack: ["Typescript", "React JS", "Express JS", "Drizzle ORM", "Docker", "Tailwind CSS", "PostgreSQL", "Open AI API", "Jest", "Supertest"]
        },
];
