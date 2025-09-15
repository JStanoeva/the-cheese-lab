import React from "react";

export default function BackgroundLayers() {
  return (
    <>
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
    </>
  );
}
