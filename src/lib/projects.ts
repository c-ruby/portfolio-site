import projectsRaw from "../data/projects.json";
import { ProjectSchema, ProjectDTO } from "../types/projects";

// Parse and validate
const projects: ProjectDTO[] = ProjectSchema.array().parse(projectsRaw)
  .sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Functions to access data
export function getAllProjects(): ProjectDTO[] {
  return projects;
}

export function getProjectBySlug(slug: string): ProjectDTO | null {
  return projects.find(p => p.slug === slug) || null;
}

export function getAllTags(): string[] {
  return Array.from(new Set(projects.flatMap(p => p.tags))).sort();
}
