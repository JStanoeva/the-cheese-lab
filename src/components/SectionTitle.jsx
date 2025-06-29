import React from "react";

export default function SectionTitle({ children }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <span className="flex-grow h-px bg-yellow-500/30" />
      <h3 className="whitespace-nowrap text-3xl md:text-4xl font-semibold tracking-wide text-yellow-300">
        {children}
      </h3>
      <span className="flex-grow h-px bg-yellow-500/30" />
    </div>
  );
}
