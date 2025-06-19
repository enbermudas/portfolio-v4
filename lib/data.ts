import type { Project, Experience, Skill } from "./types"

export const projects: Project[] = [
  {
    id: "1",
    title: "HoistLoop Website",
    description:
      "A comprehensive landing page to introduce my web development company.",
    image: "/hoistloop-screenshot.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveUrl: "https://hoistloop.dev/",
    featured: true,
  },
  {
    id: "2",
    title: "Portfolio",
    description:
      "This portfolio! I wanted to share my expertise in web design with all of you in a single place.",
    image: "/portfolio-screenshot.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    liveUrl: "http://localhost:3000/#projects",
    githubUrl: "https://github.com/enbermudas/portfolio-v4",
    featured: true,
  },
  {
    id: "3",
    title: "Poems Finder App",
    description:
      "A simple yet functional app that allows the user to search for poems by it's author or title.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "TypeScript"],
    liveUrl: "https://enbermudas.github.io/poetry/",
    githubUrl: "https://github.com/enbermudas/poetry",
    featured: false,
  },
  {
    id: "4",
    title: "Supasut",
    description:
      "Is a lightweight utility library designed to streamline your code and make it more elegant.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["TypeScript", "Rollup", "NPM", "Circle CI"],
    githubUrl: "https://github.com/enbermudas/supasut",
    featured: false,
  },
]

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Globant",
    position: "Senior Frontend Developer",
    duration: "Aug 2023 - Present",
    description: [
      "Participated in the development of new features across multiple micro-frontends.",
      "Collaborated closely with cross-functional teams to design and deploy shared, reusable components that enhance development velocity and ensure consistency.",
      "Focused on rapidly prototyping functional products.",
      "Implemented and developed features using test-driven development (TDD) practices.",
    ],
    technologies: ["React", "TypeScript", "Jest", "Styled Componentes", "Storybook", "React Query"],
  },
  {
    id: "2",
    company: "Kenility",
    position: "Semi Senior Fullstack Developer",
    duration: "Nov 2021 - Aug 2023",
    description: [
      "Enhancine application quality and maintainability by establishing robust unit testing practices.",
      "Engineered and executed comprehensive end-to-end tests, significantly increasing reliability.",
      "Designed and implemented RESTful APIs to manage critical data transfers and ensure seamless front-to-back-end communication.",
    ],
    technologies: ["React", "TypeScript", "Jest", "Cypress", "Node"],
  },
  {
    id: "3",
    company: "MercadoLibre",
    position: "Semi Senior Frontend Developer",
    duration: "Aug 2020 - Nov 2021",
    description: [
      "Developed and maintained critical modules for internal logistics applications that support core business operations.",
      "Build data-driven reporting tools for metrics and route planning to enhance operational efficiency.",
      "Shipped key features for vehicle and driver management systems, directly impacting logistics workflows and data integrity.",
    ],
    technologies: ["React", "TypeScript", "Jest", "Styled Components", "Redux"],
  },
  {
    id: "4",
    company: "Crombie",
    position: "Semi Senior Fullstack Developer",
    duration: "Nov 2019 - Jun 2020",
    description: [
      "Delivered end-to-end full-stack applications for enterprise clients, integrating with headless CMS systems for flexible content management.",
      "Architected and build automated web crawlers in Python to aggregate business intelligence data.",
      "Maintained and troubleshooting production software to ensure high availability.",
    ],
    technologies: ["React", "TypeScript", "Jest", "Python", "Laravel", "Vue.js"],
  },
  {
    id: "5",
    company: "Innova 4J",
    position: "Semi Senior Fullstack Developer",
    duration: "Mar 2018 - Sep 2018",
    description: [
      "Build and deployed custom web applications to streamline internal business processes.",
      "Integrated of core ERP systems with these applications."
    ],
    technologies: ["React", "TypeScript", "Jest", "Python", "Laravel", "Vue.js"],
  },
]

export const skills: Skill[] = [
  { name: "React", level: "Expert", category: "frontend" },
  { name: "TypeScript", level: "Advanced", category: "frontend" },
  { name: "Next.js", level: "Advanced", category: "frontend" },
  { name: "Vite", level: "Advanced", category: "frontend" },
  { name: "Vue.js", level: "Beginner", category: "frontend" },
  { name: "Tailwind CSS", level: "Expert", category: "frontend" },
  { name: "JavaScript", level: "Expert", category: "frontend" },
  { name: "HTML5", level: "Expert", category: "frontend" },
  { name: "CSS3", level: "Expert", category: "frontend" },
  { name: "Node.js", level: "Intermediate", category: "backend" },
  { name: "Express", level: "Intermediate", category: "backend" },
  { name: "MongoDB", level: "Intermediate", category: "backend" },
  { name: "PostgreSQL", level: "Intermediate", category: "backend" },
  { name: "Python", level: "Intermediate", category: "backend" },
  { name: "Git", level: "Advanced", category: "tools" },
  { name: "Docker", level: "Beginner", category: "tools" },
  { name: "AWS", level: "Beginner", category: "tools" },
  { name: "Webpack", level: "Advanced", category: "tools" },
  { name: "Jest", level: "Expert", category: "tools" },
  { name: "Figma", level: "Advanced", category: "design" },
]
