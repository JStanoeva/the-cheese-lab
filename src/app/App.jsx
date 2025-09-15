import React from "react";
import BackgroundLayers from "./components/BackgroundLayers";
import HeroSection from "./components/HeroSection";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import FunFactsSection from "../sections/FunFactsSection";
import PressSection from "../sections/PressSection";
import ProjectsSection from "../sections/ProjectsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import VarietySection from "../sections/VarietySection";

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden">
      <BackgroundLayers />

      <div className="relative z-10">
        <SiteHeader />
        <HeroSection />
        <ProjectsSection />
        <VarietySection />
        <FunFactsSection />
        <TestimonialsSection />
        <PressSection />
        <SiteFooter />
      </div>
    </main>
  );
}
