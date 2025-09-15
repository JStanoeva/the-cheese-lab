import React from "react";
import SectionTitle from "../components/SectionTitle";
import { testimonials } from "../content";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-zinc-950/80 px-4 md:px-8 py-16">
      <SectionTitle>// TESTIMONIALS</SectionTitle>
      <div className="space-y-12 max-w-3xl mx-auto text-zinc-300">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.quote}
            className="text-lg md:text-xl italic border-l-4 border-yellow-400 pl-6 py-2"
          >
            {testimonial.quote}
            <footer className="mt-3 text-sm text-zinc-400 not-italic">
              {testimonial.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
