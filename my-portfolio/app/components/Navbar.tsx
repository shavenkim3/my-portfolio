"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const navLinks = [
    {
      name: "About",
      href: isHomePage ? "#about" : "/#about",
    },
    {
      name: "Skills",
      href: isHomePage ? "#skills" : "/#skills",
    },
    {
      name: "Projects",
      href: isHomePage ? "#projects" : "/#projects",
    },
    {
      name: "Contact",
      href: isHomePage ? "#contact" : "/#contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.2em] text-white transition hover:text-cyan-300"
          >
            PORTFOLIO
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-1 h-0.5 w-5 bg-white transition ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-5 bg-white transition ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 bg-white transition ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <nav className="flex flex-col gap-2 text-sm text-slate-300">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-3 transition hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}