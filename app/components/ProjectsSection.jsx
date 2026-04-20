import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  const selectedProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-white">Selected Projects</h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {selectedProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            <div className="relative mb-5 h-44 w-full overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <p className="text-sm text-cyan-200">{project.type}</p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {project.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {project.shortDescription}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-6 inline-flex text-sm font-medium text-cyan-200 transition group-hover:text-cyan-100">
              View Details →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/projects"
          className="rounded-2xl border border-white/20 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}