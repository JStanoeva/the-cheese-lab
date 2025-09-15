import React, { useState } from "react";
import { navLinks, textShadowHover, underline } from "../../content";

function MenuLink({ label, href, onNavigate, extraClassName = "" }) {
  return (
    <a
      href={href}
      onClick={(event) => onNavigate(event, href)}
      className={`relative uppercase text-sm tracking-widest text-zinc-300 hover:text-yellow-300 transition-colors duration-300 ${underline} ${textShadowHover} ${extraClassName}`}
    >
      {label}
    </a>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (event, href) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="w-full py-6 px-4 md:px-8 flex items-center justify-between relative">
      <h1 className="font-bold text-xl md:text-2xl tracking-tight opacity-90 md:opacity-60 transition-all md:hover:scale-110 md:hover:opacity-100">
        THE CHEESE LAB
      </h1>

      <nav className="nav-desktop gap-6">
        {navLinks.map(({ label, href }) => (
          <MenuLink key={label} label={label} href={href} onNavigate={handleNavigate} />
        ))}
      </nav>

      <button
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        className="hamburger-btn relative w-6 h-5 focus:outline-none"
        onClick={() => setMobileOpen((open) => !open)}
      >
        {["top", "middle", "bottom"].map((position) => (
          <span
            key={position}
            className={`
              absolute left-0 w-full h-0.5 bg-yellow-300
              transition-transform transition-opacity duration-300
              ${position === "top" ? "top-1" : ""}
              ${position === "middle" ? "top-1/2 -translate-y-1/2" : ""}
              ${position === "bottom" ? "bottom-1" : ""}
              ${
                mobileOpen && position === "top"
                  ? "top-1/2 -translate-y-1/2 rotate-45"
                  : ""
              }
              ${mobileOpen && position === "middle" ? "opacity-0" : ""}
              ${
                mobileOpen && position === "bottom"
                  ? "top-1/2 -translate-y-1/2 -rotate-45"
                  : ""
              }
            `}
          />
        ))}
      </button>

      {mobileOpen && (
        <nav className="nav-mobile absolute left-0 top-full w-full bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-800 z-20">
          <div className="flex flex-col items-center py-6 gap-6">
            {navLinks.map(({ label, href }) => (
              <MenuLink
                key={label}
                label={label}
                href={href}
                extraClassName="text-lg"
                onNavigate={handleNavigate}
              />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
