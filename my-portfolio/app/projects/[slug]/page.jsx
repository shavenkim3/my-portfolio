import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import { projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const hasLinks =
    project.links?.live || project.links?.github || project.links?.figma;

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.14),_transparent_30%)]" />

      <div className="relative z-10">
        <Navbar />

        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm text-cyan-200">{project.type}</p>

              <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                {project.title}
              </h1>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-start">
              <Link
                href="/projects"
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
              >
                ← Back to Projects
              </Link>

              <Link
                href="/"
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
              >
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="relative mt-10 h-[220px] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 md:h-[420px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h2 className="text-2xl font-semibold text-white">
                Project Overview
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                {project.description}
              </p>

              <h3 className="mt-8 text-xl font-semibold text-white">
                Key Features
              </h3>

              <ul className="mt-4 space-y-3 text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span className="leading-7">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h2 className="text-2xl font-semibold text-white">
                Project Info
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-sm text-slate-400">Role</p>
                  <p className="mt-2 text-white">{project.role}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Year</p>
                  <p className="mt-2 text-white">{project.year}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Tools</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {hasLinks && (
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm text-slate-400">
                    Project Links
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-1">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                      >
                        <span>🌐 Live Demo</span>
                        <span className="text-slate-400">↗</span>
                      </a>
                    )}

                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                      >
                        <span>💻 GitHub</span>
                        <span className="text-slate-400">↗</span>
                      </a>
                    )}

                    {project.links?.figma && (
                      <a
                        href={project.links.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                      >
                        <span>🎨 Figma</span>
                        <span className="text-slate-400">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {project.demoAccount && (
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm text-slate-400">
                    Demo Account
                  </p>

                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                      <p className="text-sm font-semibold text-cyan-300">
                        User Account
                      </p>

                      <div className="mt-2 space-y-1 text-sm text-slate-300">
                        <p>
                          Email: {project.demoAccount.user.email}
                        </p>

                        <p>
                          Password: {project.demoAccount.user.password}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                      <p className="text-sm font-semibold text-pink-300">
                        Admin Account
                      </p>

                      <div className="mt-2 space-y-1 text-sm text-slate-300">
                        <p>
                          Email: {project.demoAccount.admin.email}
                        </p>

                        <p>
                          Password: {project.demoAccount.admin.password}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

