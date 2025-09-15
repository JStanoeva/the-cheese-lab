# Agent Guidelines for Stellarmelt

This document defines how AI agents should work in this repository. It keeps changes aligned with the project's conventions.

## Project Overview

The Cheese Lab is a static landing page built in React + Tailwind CSS.

## Directory Structure

```
.
|-- .gitignore
|-- AGENTS.md
|-- dist/
|   |-- assets/
|   |   |-- index-APgCHuak.css
|   |   `-- index-D4OJ6n4I.js
|   |-- cheese.svg
|   |-- index.html
|   `-- manifest.webmanifest
|-- eslint.config.js
|-- index.html
|-- package-lock.json
|-- package.json
|-- public/
|   |-- cheese.svg
|   `-- manifest.webmanifest
|-- README.md
|-- src/
|   |-- app/
|   |   |-- App.jsx
|   |   `-- components/
|   |       |-- BackgroundLayers.jsx
|   |       |-- HeroSection.jsx
|   |       |-- SiteFooter.jsx
|   |       `-- SiteHeader.jsx
|   |-- components/
|   |   `-- SectionTitle.jsx
|   |-- content/
|   |   |-- cheeses.js
|   |   |-- funFacts.js
|   |   |-- index.js
|   |   |-- navigation.js
|   |   |-- press.js
|   |   |-- projects.js
|   |   |-- social.js
|   |   |-- styles.js
|   |   `-- testimonials.js
|   |-- index.css
|   |-- main.jsx
|   `-- sections/
|       |-- FunFactsSection.jsx
|       |-- PressSection.jsx
|       |-- ProjectsSection.jsx
|       |-- TestimonialsSection.jsx
|       `-- VarietySection.jsx
`-- vite.config.js
```

`node_modules/` is omitted from the tree for brevity.

## Scripts

- `npm run dev` - start the Vite development server with hot reload.
- `npm run build` - create a production build in `dist/`.
- `npm run preview` - serve the production build locally for testing.
- `npm run lint` - run ESLint on the project.
