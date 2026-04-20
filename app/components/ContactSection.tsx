import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-400/10 p-8 backdrop-blur-md">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="mt-4 max-w-2xl text-slate-300">
          สามารถติดต่อได้ผ่านช่องทางด้านล่างนี้
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <a
            href="mailto:Shavenkim3@gmail.com"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-1 hover:bg-white/10"
          >
            <p className="text-sm text-cyan-300">Email</p>
            <p className="mt-2 text-sm text-slate-300">Shavenkim3@gmail.com</p>
          </a>

          <a
            href="tel:0649283294"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-1 hover:bg-white/10"
          >
            <p className="text-sm text-indigo-300">Phone</p>
            <p className="mt-2 text-sm text-slate-300">064-9283294</p>
          </a>

          <a
            href="https://line.me/ti/p/F79A4lRTmZ"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-1 hover:bg-white/10"
          >
            <p className="text-sm text-green-300">Line</p>
            <p className="mt-2 text-sm text-slate-300">0969512085</p>
          </a>

          <a
            href="https://github.com/shavenkim3"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-1 hover:bg-white/10"
          >
            <p className="text-sm text-white">GitHub</p>
            <p className="mt-2 text-sm text-slate-300">github.com/shavenkim3</p>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="https://github.com/shavenkim3"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            View GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}