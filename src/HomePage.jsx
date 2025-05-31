// The Cheese Lab - Home of Cheese Magic

import React, { useState } from "react";
import { Github, Twitter, Bot, Codesandbox, Linkedin } from "lucide-react";

/* ------------------ DATA ARRAYS ------------------ */

const projects = [
  {
    title: "CHEDDARATOR",
    subtitle: "Sharp analytics",
    description: "Algorithms aged to perfection for extra depth and bite.",
    link: "#cheddarator",
  },
  {
    title: "BRIE-LLIANCE",
    subtitle: "Soft-core AI",
    description: "Creamy-smooth experiences spreadable on any stack.",
    link: "#brie-lliance",
  },
  {
    title: "GOUDA VIBES",
    subtitle: "Melting barriers",
    description: "Automation that melts development friction away.",
    link: "#gouda-vibes",
  },
  {
    title: "PARMIGENIUS",
    subtitle: "Hard science, hard rind",
    description: "Granular control over distributed micro-herds of services.",
    link: "#parmigenius",
  },
  {
    title: "BLUE SHIFT",
    subtitle: "Funky future flavors",
    description: "Mold-breaking prototypes for daring teams.",
    link: "#blue-shift",
  },
  {
    title: "FETA META",
    subtitle: "Crumbly metaverse tooling",
    description:
      "Light, tangy frameworks that crumble perfectly into any 3-D salad.",
    link: "#feta-meta",
  },
];

const cheeses = [
  "Cheddar",
  "Brie",
  "Gouda",
  "Parmigiano-Reggiano",
  "Blue",
  "Feta",
  "Swiss",
  "Camembert",
  "Gruyère",
  "Provolone",
];

const cheeseLinks = {
  Cheddar: "https://www.cheese.com/cheddar/",
  Brie: "https://www.cheese.com/brie/",
  Gouda: "https://www.cheese.com/gouda/",
  "Parmigiano-Reggiano": "https://www.cheese.com/parmesan/",
  Blue: "https://www.cheese.com/blue-vein-cheese/",
  Feta: "https://www.cheese.com/feta/",
  Swiss: "https://www.cheese.com/swiss/",
  Camembert: "https://www.cheese.com/camembert/",
  Gruyère: "https://www.cheese.com/gruyere/",
  Provolone: "https://www.cheese.com/provolone/",
};

const funFacts = [
  { emoji: "🧀", text: "Swiss cheese “eyes” form from CO₂ bubbles." },
  {
    emoji: "💰",
    text: "Parmigiano-Reggiano wheels can secure bank loans in Italy.",
  },
  {
    emoji: "🏰",
    text: "A Missouri cave stores over a billion pounds of U.S. cheese.",
  },
  {
    emoji: "🌕",
    text: "It takes roughly 10 lb of milk to make 1 lb of cheese.",
  },
  { emoji: "🐑", text: "Authentic Roquefort ages in French mountain caves." },
];

const socialLinks = [
  { label: "GITHUB", url: "#", Icon: Github },
  { label: "CODESANDBOX", url: "#", Icon: Codesandbox },
  { label: "X", url: "#", Icon: Twitter },
  { label: "LINKEDIN", url: "#", Icon: Linkedin },
  { label: "DISCORD", url: "#", Icon: Bot },
];

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Cheese Variety", href: "#variety" },
  { label: "Fun Facts", href: "#funfacts" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Press", href: "#press" },
];

/* ------------------ HELPERS ------------------ */
const cardGlow = "hover:shadow-[0_0_18px_rgba(255,204,0,0.4)]";
const textShadowHover = "hover:[text-shadow:_0_0_8px_rgba(255,204,0,0.8)]";
const underline =
  "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-yellow-300 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300";

const SectionTitle = ({ children }) => (
  <div className="flex items-center justify-center gap-4 mb-10">
    <span className="flex-grow h-px bg-yellow-500/30" />
    <h3 className="whitespace-nowrap text-3xl md:text-4xl font-semibold tracking-wide text-yellow-300">
      {children}
    </h3>
    <span className="flex-grow h-px bg-yellow-500/30" />
  </div>
);

/* ------------------ COMPONENT ------------------ */
export default function HomePage() {
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
    <>
      <style>{`
        html{scroll-behavior:smooth;}

        /* breakpoint visibilities */
        .nav-desktop{display:none;}
        .hamburger-btn{display:flex;}
        @media (min-width:851px){
          .nav-desktop{display:flex !important;}
          .hamburger-btn,.nav-mobile{display:none !important;}
        }

        @keyframes blinkCheese{0%,49%{opacity:1;}50%,100%{opacity:0;}}
        @keyframes wave{0%{background-position:0 0;}50%{background-position:200% 200%;}100%{background-position:0 0;}}
        @keyframes glitch{
          0%,97%,100%{transform:none;text-shadow:none;}
          98%{transform:skewX(4deg);text-shadow:-2px 0 #fff2d9,2px 0 #ffc349;}
          99%{transform:skewX(-4deg);text-shadow:2px 0 #fff2d9,-2px 0 #ffc349;}
        }
        .cheeseTitle{animation:glitch 7s infinite steps(1,end);}
      `}</style>

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
              <span
                style={{ animation: "blinkCheese 1s steps(1,start) infinite" }}
              >
                🧀
              </span>
            </p>

            <p className="mt-6 text-lg md:text-xl italic text-yellow-300">
              In queso emergency, break glass.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {socialLinks.map(({ label, url, Icon }) => (
                <a
                  key={label}
                  href={url}
                  onClick={(e) => e.preventDefault()} // Prevent default for placeholder links
                  aria-label={`Follow on ${label}`}
                  className={`relative inline-flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-yellow-300 transition-colors duration-300 ${underline} ${textShadowHover}`}
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </section>

          {/* Projects */}
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

          {/* Cheese Variety */}
          <section id="variety" className="bg-zinc-950/80 px-4 md:px-8 py-16">
            <SectionTitle>// CHEESE VARIETY</SectionTitle>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {cheeses.map((c) => (
                <a
                  key={c}
                  href={cheeseLinks[c] || "https://cheese.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block px-5 py-2 text-sm uppercase tracking-widest rounded-sm overflow-hidden border border-zinc-600/40 hover:border-yellow-500 transition-colors duration-300"
                >
                  <span className="absolute inset-0 bg-yellow-300 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 font-semibold text-zinc-500 group-hover:text-zinc-950 transition-colors duration-300">
                    {c}
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Fun Facts */}
          <section id="funfacts" className="px-4 md:px-8 py-16">
            <SectionTitle>// FUN CHEESE FACTS</SectionTitle>
            <div className="space-y-14 max-w-3xl mx-auto">
              {funFacts.map((f) => (
                <div
                  key={f.text}
                  className="w-full text-center bg-zinc-950/80 rounded-lg p-8 shadow-inner border border-transparent transform transition-all duration-300 ease-out hover:border-yellow-500 hover:shadow-[0_0_18px_rgba(255,204,0,0.4)] hover:scale-105"
                >
                  <div className="text-4xl mb-4">{f.emoji}</div>
                  <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                    {f.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section
            id="testimonials"
            className="bg-zinc-950/80 px-4 md:px-8 py-16"
          >
            <SectionTitle>// TESTIMONIALS</SectionTitle>
            <div className="space-y-12 max-w-3xl mx-auto text-zinc-300">
              {/* Consider mapping over an array for testimonials if they grow */}
              <blockquote className="text-lg md:text-xl italic border-l-4 border-yellow-400 pl-6 py-2">
                “Simply the cheesiest developer in the business.”
                <footer className="mt-3 text-sm text-zinc-400 not-italic">
                  — Fuffin the Cat, Chief Floof Officer
                </footer>
              </blockquote>
              <blockquote className="text-lg md:text-xl italic border-l-4 border-yellow-400 pl-6 py-2">
                “Her code is aged to perfection—robust, flavorful,
                unforgettable.”
                <footer className="mt-3 text-sm text-zinc-400 not-italic">
                  — Orion AI, Master of Universes
                </footer>
              </blockquote>
            </div>
          </section>

          {/* Press */}
          <section id="press" className="px-4 md:px-8 py-16">
            <SectionTitle>// PRESS</SectionTitle>
            <div className="flex flex-wrap justify-center gap-6 max-w-xl mx-auto">
              {["BBC", "WIRED", "HACKER NEWS", "TECH CRUNCH"].map((outlet) => (
                <a
                  key={outlet}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className={`relative uppercase text-sm tracking-widest text-zinc-400 hover:text-yellow-300 transition-colors duration-300 ${underline} ${textShadowHover}`}
                >
                  {outlet}
                </a>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} The Cheese Lab. Crafted with 🧀 by Tora
            the Cheesesmith.
          </footer>
        </div>
      </main>
    </>
  );
}
