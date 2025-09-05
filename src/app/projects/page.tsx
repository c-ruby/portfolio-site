import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsListPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-5xl mx-auto p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="border rounded-xl p-4 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="mt-1 text-gray-600">{project.summary}</p>
        </Link>
      ))}
    </div>
  );
}
