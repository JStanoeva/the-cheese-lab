// The Cheese Lab - App
import React, { useState } from "react";
import { socialLinks, navLinks, textShadowHover, underline } from "./data";

import ProjectsSection from "./components/ProjectsSection";
import VarietySection from "./components/VarietySection";
import FunFactsSection from "./components/FunFactsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PressSection from "./components/PressSection";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const MenuLink = ({ label, href, extra = "" }) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
      }}
      className={`relative uppercase text-sm tracking-widest text-zinc-300 hover:text-yellow-300 transition-colors duration-300 ${underline} ${textShadowHover} ${extra}`}
    >
      {label}
    </a>
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden">
      {/* Background layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
        style={{
          background:
            "linear-gradient(135deg,#1a2333 0%,#22304a 20%,#263b55 40%,#2a4561 60%,#2f4f6d 80%,#1a2333 100%)",
          backgroundSize: "400% 400%",
          animation: "wave 30s linear infinite",
          WebkitMaskImage:
            "repeating-linear-gradient(0deg,transparent 0 1px,#000 1px 3px)",
          maskImage:
            "repeating-linear-gradient(0deg,transparent 0 1px,#000 1px 3px)",
          filter: "brightness(0.8) saturate(75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg,rgba(255,255,255,0.04) 0 2px,transparent 2px 4px)",
        }}
      />

      {/* ---------------- CONTENT ---------------- */}
      <div className="relative z-10">
        {/* Header */}
        <header className="w-full py-6 px-4 md:px-8 flex items-center justify-between relative">
          <h1 className="font-bold text-xl md:text-2xl tracking-tight opacity-90 md:opacity-60 transition-all md:hover:scale-110 md:hover:opacity-100">
            THE CHEESE LAB
          </h1>

          {/* Desktop nav */}
          <nav className="nav-desktop gap-6">
            {navLinks.map(({ label, href }) => (
              <MenuLink key={label} label={label} href={href} />
            ))}
          </nav>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="hamburger-btn relative w-6 h-5 focus:outline-none"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {["top", "middle", "bottom"].map((pos) => (
              <span
                key={pos}
                className={`
                  absolute left-0 w-full h-0.5 bg-yellow-300
                  transition-transform transition-opacity duration-300
                  ${pos === "top" ? "top-1" : ""}
                  ${pos === "middle" ? "top-1/2 -translate-y-1/2" : ""}
                  ${pos === "bottom" ? "bottom-1" : ""}
                  ${
                    mobileOpen && pos === "top"
                      ? "top-1/2 -translate-y-1/2 rotate-45"
                      : ""
                  }
                  ${mobileOpen && pos === "middle" ? "opacity-0" : ""}
                  ${
                    mobileOpen && pos === "bottom"
                      ? "top-1/2 -translate-y-1/2 -rotate-45"
                      : ""
                  }
                `}
              />
            ))}
          </button>

          {/* Mobile nav panel */}
          {mobileOpen && (
            <nav className="nav-mobile absolute left-0 top-full w-full bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-800 z-20">
              <div className="flex flex-col items-center py-6 gap-6">
                {navLinks.map(({ label, href }) => (
                  <MenuLink
                    key={label}
                    label={label}
                    href={href}
                    extra="text-lg"
                  />
                ))}
              </div>
            </nav>
          )}
        </header>

        {/* Hero */}
        <section className="flex flex-col items-center text-center pt-12 pb-24 px-4">
          <h2 className="cheeseTitle text-5xl md:text-7xl font-extrabold bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 text-transparent bg-clip-text">
            THE CHEESE LAB
          </h2>

          <p className="mt-8 text-sm md:text-base tracking-[0.3em] uppercase text-zinc-400 flex items-center gap-1">
            Hand-crafting code as rich and complex as cave-aged Gruyère.
            <span style={{ animation: "blinkCheese 1s steps(1,start) infinite" }}>
              🧀
            </span>
          </p>

          <p className="mt-6 text-lg md:text-xl italic text-yellow-300">
            In queso emergency, break glass.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {socialLinks.map(({ label, url, Icon }) => (
              <button
                key={label}
                type="button"
                onClick={(e) => e.preventDefault()} // Placeholder interaction
                aria-label={`Follow on ${label}`}
                className={`relative inline-flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-yellow-300 transition-colors duration-300 ${underline} ${textShadowHover}`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
        </section>

        <ProjectsSection />
        <VarietySection />
        <FunFactsSection />
        <TestimonialsSection />
        <PressSection />

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} The Cheese Lab. Crafted with 🧀 by Tora
          the Cheesesmith.
        </footer>
      </div>
    </main>
  );
}
