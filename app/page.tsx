"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem("homeVisitorCount");

    if (savedCount) {
      const newCount = Number(savedCount) + 1;
      localStorage.setItem("homeVisitorCount", String(newCount));
      setVisitors(newCount);
    } else {
      localStorage.setItem("homeVisitorCount", "1");
      setVisitors(1);
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      <div className="px-6 pb-8 text-center">
        <p className="text-xs text-slate-500">Visitors: {visitors}</p>
      </div>
    </main>
  );
}