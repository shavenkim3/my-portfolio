import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.14),_transparent_30%)]" />

      <div className="relative z-10">
        <Navbar />

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                My Projects
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                All Projects
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                A collection of projects that reflect my interest in UX/UI
                Design, Frontend Development, responsive interfaces, and
                creating user-friendly digital experiences.
              </p>

              <div className="mt-6 md:hidden">
                <Link
                  href="/"
                  className="inline-flex w-full justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <Link
                href="/"
                className="inline-flex rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10"
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

                <h2 className="mt-2 text-xl font-semibold text-white">
                  {project.title}
                </h2>

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
        </section>
      </div>
    </main>
  );
}