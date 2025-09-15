import React from "react";
import { socialLinks, textShadowHover, underline } from "../../content";

export default function HeroSection() {
  return (
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
            onClick={(event) => event.preventDefault()} // Placeholder interaction
            aria-label={`Follow on ${label}`}
            className={`relative inline-flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-yellow-300 transition-colors duration-300 ${underline} ${textShadowHover}`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
