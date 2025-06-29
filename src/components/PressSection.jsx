import React from "react";
import { underline, textShadowHover } from "../data";
import SectionTitle from "./SectionTitle";

export default function PressSection() {
  return (
    <section id="press" className="px-4 md:px-8 py-16">
      <SectionTitle>// PRESS</SectionTitle>
      <div className="flex flex-wrap justify-center gap-6 max-w-xl mx-auto">
          {["BBC", "WIRED", "HACKER NEWS", "TECH CRUNCH"].map((outlet) => (
          <button
            key={outlet}
            type="button"
            onClick={(e) => e.preventDefault()}
            className={`relative uppercase text-sm tracking-widest text-zinc-400 hover:text-yellow-300 transition-colors duration-300 ${underline} ${textShadowHover}`}
          >
            {outlet}
          </button>
        ))}
      </div>
    </section>
  );
}
