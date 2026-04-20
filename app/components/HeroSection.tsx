import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.16),_transparent_30%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Frontend Developer & UX/UI Designer
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Creating modern
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              digital experiences
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            I’m Chaiyaporn, a Frontend Developer and UX/UI Designer passionate
            about building clean, intuitive, and responsive interfaces that
            combine visual design with real usability.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />

            <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
              <div className="rounded-[28px] border border-cyan-400/20 bg-slate-900/80 p-6">
                <div className="mb-6 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-cyan-300/30 shadow-xl">
                    <Image
                      src="/profile.jpg"
                      alt="Chaiyaporn Maenmalai"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    Chaiyaporn Maenmalai
                  </h3>

                  <p className="mt-2 text-sm font-medium text-cyan-200">
                    UX/UI Designer & Frontend Developer
                  </p>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
                    Passionate about crafting intuitive interfaces, responsive
                    websites, and modern digital experiences that balance beauty
                    and functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}