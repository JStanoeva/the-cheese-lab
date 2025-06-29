import React from "react";
import { projects, cardGlow, underline } from "../data";
import SectionTitle from "./SectionTitle";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 md:px-8 py-16">
      <SectionTitle>// PROJECTS</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            onClick={(e) => e.preventDefault()}
            className={`relative group rounded-2xl p-6 flex flex-col bg-zinc-950/80 border border-zinc-800 hover:border-yellow-500 transform hover:-translate-y-1 transition-all duration-300 ease-out ${cardGlow}`}
          >
            <h4 className="text-xl font-bold mb-1 group-hover:text-yellow-300 transition-colors">
              {p.title}
            </h4>
            <p className="text-sm mb-2 text-zinc-400">{p.subtitle}</p>
            <p className="flex-grow text-zinc-300">{p.description}</p>
            <span
              className={`relative inline-block mt-4 text-sm font-semibold text-zinc-300 hover:text-yellow-300 transition-colors duration-300 ${underline}`}
            >
              Explore →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
