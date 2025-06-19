export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string[]
  technologies: string[]
}

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

export interface Skill {
  name: string
  level: SkillLevel
  category: "frontend" | "backend" | "tools" | "design"
}
