import React from "react";

export default function SiteFooter() {
  return (
    <footer className="py-8 text-center text-sm text-zinc-500">
      © {new Date().getFullYear()} The Cheese Lab. Crafted with 🧀 by Tora the Cheesesmith.
    </footer>
  );
}
