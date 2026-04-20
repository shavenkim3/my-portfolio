const uxuiSkills = [
  "User Research",
  "Wireframing",
  "UI Design",
  "Prototyping",
  "User Flow",
  "Information Architecture",
  "Interaction Design",
  "Design Systems",
  "Responsive Design",
];

const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Responsive Web Design",
];

const tools = [
  "Figma",
  "VS Code",
  "Git",
  "GitHub",
  "Postman",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-white">Skills & Tools</h2>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {/* UX/UI */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-cyan-300">
            UX/UI Design
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {uxuiSkills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/20"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-indigo-300">
            Frontend Development
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {frontendSkills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-indigo-400/20 bg-indigo-400/10 p-4 text-sm text-indigo-100 transition duration-300 hover:-translate-y-1 hover:bg-indigo-400/20"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="mt-14">
        <h3 className="mb-4 text-xl font-semibold text-sky-300">
          Tools & Programs
        </h3>

        <div className="flex flex-wrap gap-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="rounded-full border border-sky-400/20 bg-sky-400/10 px-5 py-2 text-sm text-sky-100 transition duration-300 hover:-translate-y-1 hover:bg-sky-400/20"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}