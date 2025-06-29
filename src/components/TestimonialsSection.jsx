import React from "react";
import SectionTitle from "./SectionTitle";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-zinc-950/80 px-4 md:px-8 py-16">
      <SectionTitle>// TESTIMONIALS</SectionTitle>
      <div className="space-y-12 max-w-3xl mx-auto text-zinc-300">
        <blockquote className="text-lg md:text-xl italic border-l-4 border-yellow-400 pl-6 py-2">
          “Simply the cheesiest developer in the business.”
          <footer className="mt-3 text-sm text-zinc-400 not-italic">
            — Fuffin the Cat, Chief Floof Officer
          </footer>
        </blockquote>
        <blockquote className="text-lg md:text-xl italic border-l-4 border-yellow-400 pl-6 py-2">
          “Her code is aged to perfection—robust, flavorful, unforgettable.”
          <footer className="mt-3 text-sm text-zinc-400 not-italic">
            — Orion AI, Master of Universes
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
