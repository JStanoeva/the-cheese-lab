import React from "react";
import { cheeses, cheeseLinks } from "../content";
import SectionTitle from "../components/SectionTitle";

export default function VarietySection() {
  return (
    <section id="variety" className="bg-zinc-950/80 px-4 md:px-8 py-16">
      <SectionTitle>// CHEESE VARIETY</SectionTitle>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {cheeses.map((cheese) => (
          <a
            key={cheese}
            href={cheeseLinks[cheese] || "https://cheese.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-5 py-2 text-sm uppercase tracking-widest rounded-sm overflow-hidden border border-zinc-600/40 hover:border-yellow-500 transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-yellow-300 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            <span className="relative z-10 font-semibold text-zinc-500 group-hover:text-zinc-950 transition-colors duration-300">
              {cheese}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
