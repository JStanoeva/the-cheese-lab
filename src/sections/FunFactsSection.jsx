import React from "react";
import { funFacts } from "../content";
import SectionTitle from "../components/SectionTitle";

export default function FunFactsSection() {
  return (
    <section id="funfacts" className="px-4 md:px-8 py-16">
      <SectionTitle>// FUN CHEESE FACTS</SectionTitle>
      <div className="space-y-14 max-w-3xl mx-auto">
        {funFacts.map((fact) => (
          <div
            key={fact.text}
            className="w-full text-center bg-zinc-950/80 rounded-lg p-8 shadow-inner border border-transparent transform transition-all duration-300 ease-out hover:border-yellow-500 hover:shadow-[0_0_18px_rgba(255,204,0,0.4)] hover:scale-105"
          >
            <div className="text-4xl mb-4">{fact.emoji}</div>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              {fact.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
