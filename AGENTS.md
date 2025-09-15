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
|   |   |-- index-BROhNVu8.css
|   |   `-- index-RdQx56dV.js
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
|   |-- App.jsx
|   |-- components/
|   |   |-- FunFactsSection.jsx
|   |   |-- PressSection.jsx
|   |   |-- ProjectsSection.jsx
|   |   |-- SectionTitle.jsx
|   |   |-- TestimonialsSection.jsx
|   |   `-- VarietySection.jsx
|   |-- data.js
|   |-- index.css
|   `-- main.jsx
`-- vite.config.js
```

`node_modules/` is omitted from the tree for brevity.

## Scripts

- `npm run dev` - start the Vite development server with hot reload.
- `npm run build` - create a production build in `dist/`.
- `npm run preview` - serve the production build locally for testing.
- `npm run lint` - run ESLint on the project.
