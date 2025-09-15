# 🧀 THE CHEESE LAB

A playful one-page portfolio that serves up projects, fun facts, and social links with more flair than a five-year-aged Gruyère.
Built to showcase how far you can push **React + Vite + Tailwind CSS** while still keeping the bundle as light and airy as whipped ricotta.

---

## 🧀 About

**The Cheese Lab** is a demo portfolio site stuffed with:

- **Projects** — each with a tongue-in-cheek cheese-themed name
- **Cheese Variety gallery** — buttons that link to real-world cheese facts
- **Fun Facts & Testimonials** — animated cards for fancy UI micro-interactions
- **Responsive navigation** — desktop nav and mobile hamburger with smooth scrolling

It’s opinionated, over-the-top, and (mostly) production-ready—perfect for studying animated Tailwind patterns, React component organization, and small-site performance tuning.

---

## 🛠 Tech Stack

| Purpose         | Library / Tool    | Notes                                       |
| --------------- | ----------------- | ------------------------------------------- |
| UI / Components | **React 19**      | Function components + hooks only            |
| Build & HMR     | **Vite 6**        | Instant dev server, lightning-fast bundling |
| Styling         | **Tailwind CSS**  | Utility-first CSS + some custom animations  |
| Icons           | **lucide-react**  | Lightweight, tree-shakable SVG icons        |
| Animations      | **CSS keyframes** | Glitch, wave, blinkCheese                   |

---

## ✨ Features

- Fully responsive design (mobile to 4K)
- Hand-crafted Tailwind classes + a dash of inline CSS
- Smooth section scrolling and anchor navigation
- CSS-only glitch & wave animations
- Componentized and scalable layout

---

## 🧪 Local Setup

> Recommended: Node 18+ / npm 10+
> (Supports `yarn` or `pnpm` too)

```bash
# 1 · Clone the repo
git clone https://github.com/JStanoeva/the-cheese-lab.git
cd the-cheese-lab

# 2 · Install dependencies
npm install

# 3 · Start the dev server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see the magic unfold!

### 🏗 Production build

```bash
npm run build     # Compiles for production
npm run preview   # Local preview of the dist folder
```

---

## 📜 Available Scripts

| Script     | Description                           |
| ---------- | ------------------------------------- |
| `dev`      | Starts the Vite dev server            |
| `build`    | Bundles the project for production    |
| `preview`  | Serves the build output locally       |
| `lint`\*   | Lints the code with ESLint (optional) |

_\*You can enable additional tooling (e.g., prettier) if you add the configs and scripts._

---

## 📁 Project Structure

```
.
├── public/                     # Static files served as-is
├── src/
│   ├── app/
│   │   ├── App.jsx             # Root layout shell
│   │   └── components/         # Layout-specific building blocks
│   │       ├── BackgroundLayers.jsx
│   │       ├── HeroSection.jsx
│   │       ├── SiteFooter.jsx
│   │       └── SiteHeader.jsx
│   ├── components/
│   │   └── SectionTitle.jsx    # Shared UI element
│   ├── content/                # Structured data + constants
│   │   ├── cheeses.js
│   │   ├── funFacts.js
│   │   ├── index.js
│   │   ├── navigation.js
│   │   ├── press.js
│   │   ├── projects.js
│   │   ├── social.js
│   │   ├── styles.js
│   │   └── testimonials.js
│   ├── index.css               # Tailwind directives + custom CSS
│   ├── main.jsx                # React entry point
│   └── sections/               # Feature sections rendered on the page
│       ├── FunFactsSection.jsx
│       ├── PressSection.jsx
│       ├── ProjectsSection.jsx
│       ├── TestimonialsSection.jsx
│       └── VarietySection.jsx
├── AGENTS.md                   # Repository guidance for AI contributors
└── vite.config.js              # Vite configuration
```

---

## 💛 Contributing

Cheesemongers and frontend fans welcome!

1. Fork 🍴
2. Branch 🪄
3. Commit 📦
4. Pull request 🤝

Just keep your cheese puns sharp and your PRs clean. 🧼

---

## 🪪 License

MIT — because good cheese should be shared freely. See [`LICENSE`](./LICENSE).

---

> Made with 🧀 by **Tora the Cheesesmith**
> Because cheddar-driven development > test-driven development
