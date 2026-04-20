import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "SnackGo – Online Food Ordering Application",
    type: "UX/UI Designer",
    description:
      "ออกแบบแอปสั่งอาหารบนมือถือ โดยเน้นการใช้งานที่เข้าใจง่าย โฟลว์การสั่งอาหารที่ลื่นไหล และอินเทอร์เฟซที่ดูสวยงามและน่าใช้งาน",
    tools: ["Figma", "UI Design", "Wireframe", "Prototype", "Components"],
    image: "/projects/projects1.jpg",
  },
  {
    title: "HypeStepStore E-commerce Website",
    type: "UX/UI Designer",
    description:
      "HypeStepStore เป็นเว็บไซต์ร้านขายรองเท้าที่พัฒนาขึ้นเพื่อให้ผู้ใช้งานสามารถเลือกดูสินค้า ค้นหาสินค้าที่สนใจ และดูรายละเอียดสินค้าได้อย่างสะดวก โดยเน้นการออกแบบหน้าเว็บให้ดูทันสมัย ใช้งานง่าย และรองรับการแสดงผลในหลายขนาดหน้าจอ ภายในโปรเจกต์มีทั้งหน้ารวมสินค้า ระบบกรองสินค้า หน้ารายละเอียดสินค้า และการจัดโครงสร้างคอมโพเนนต์ให้สามารถนำกลับมาใช้ซ้ำได้ เพื่อให้โค้ดดูเป็นระเบียบและดูแลต่อได้ง่าย",
    tools: ["Next.js", "Tailwind CSS", "Responsive UI"],
    image: "/projects/projects3.jpg",
  },
  {
    title: "Special Project & Cooperative Education Management System",
    type: "Frontend Development",
    description:
      "พัฒนา Frontend สำหรับระบบลงทะเบียนปัญหาพิเศษและสหกิจศึกษา โดยออกแบบและพัฒนาอินเทอร์เฟซให้ใช้งานง่าย รองรับการกรอกข้อมูล การเลือกหัวข้อ และการติดตามสถานะของนิสิต ช่วยลดการใช้เอกสารและทำให้การจัดการข้อมูลเป็นระบบมากขึ้น",
    tools: ["React", "Next.js", "Tailwind CSS"],
    image: "/projects/projects4.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-white">Selected Projects</h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
          >
            {/* รูปโปรเจ็ค */}
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
              {project.description}
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
          </div>
        ))}
      </div>

      {/* ปุ่ม */}
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