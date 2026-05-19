import type { Line, Segment } from "../types";

import { blankLine } from "./blank-line";

interface Project {
  name: string;
  description: Segment[];
  technology: string;
  github: string;
  live?: string;
}

const projectsData: Project[] = [
  {
    name: "Naute",
    description: [
      {
        text: "Serverless markdown note-taking app — lightweight, browser-local, with Claude wired in for in-place edits.",
      },
    ],
    technology: "React, AWS Lambda, Claude API",
    github: "https://github.com/paccodes/naute",
  },
  {
    name: "WaniAnki",
    description: [
      { text: "Offline " },
      {
        text: "WaniKani",
        className: "tone-link",
        href: "https://wanikani.com",
      },
      {
        text: " study companion — sync radicals, kanji, and vocab, then review anywhere.",
      },
    ],
    technology: "Vue.js, TypeScript",
    github: "https://github.com/paccodes/wanianki",
    live: "https://wanianki.com",
  },
  {
    name: "2048",
    description: [
      {
        text: "From-scratch take on the sliding tile puzzle, with a deliberately small, readable codebase.",
      },
    ],
    technology: "TypeScript",
    github: "https://github.com/paccodes/2048",
    live: "https://pac.codes/projects/2048",
  },
  {
    name: "pipes.web",
    description: [
      { text: "Web port of the " },
      { text: "pipes.sh", className: "tone-em" },
      { text: " terminal screensaver, tweakable via URL parameters." },
    ],
    technology: "TypeScript, Canvas API",
    github: "https://github.com/paccodes/pipes.web",
    live: "https://pac.codes/projects/pipes.web",
  },
  {
    name: "PkgPeeker",
    description: [
      {
        text: "Installs npm packages in the browser to inspect their dependencies, sizes, and file types.",
      },
    ],
    technology: "React, Web Containers",
    github: "https://github.com/paccodes/pkgpeeker",
    live: "https://pkgpeeker.dev",
  },
  {
    name: "Minesweeper",
    description: [
      {
        text: "Classic Minesweeper in vanilla HTML/CSS/JS, with custom board sizes and mine counts.",
      },
    ],
    technology: "HTML, CSS, JavaScript",
    github: "https://github.com/paccodes/minesweeper",
    live: "https://pac.codes/projects/minesweeper",
  },
];

const formatProject = (project: Project): Line[] => [
  {
    type: "p",
    segments: [{ text: `▸ ${project.name}`, className: "tone-title" }],
  },
  {
    type: "p",
    segments: [{ text: "  " }, ...project.description],
  },
  {
    type: "p",
    segments: [{ text: `  ${project.technology}`, className: "tone-stack" }],
  },
  {
    type: "p",
    segments: [
      { text: "  " },
      { text: "github", className: "tone-link", href: project.github },
      ...(project.live
        ? [
            { text: "   " },
            { text: "open", className: "tone-link", href: project.live },
          ]
        : []),
    ],
  },
];

const intro: Line[] = [
  {
    type: "p",
    segments: [
      { text: "All projects live on " },
      {
        text: "GitHub",
        className: "tone-link",
        href: "https://github.com/paccodes?tab=repositories",
      },
      { text: "." },
    ],
  },
  blankLine,
];

export const projects = [
  ...intro,
  ...projectsData
    .map(formatProject)
    .flatMap((lines, index) => (index === 0 ? lines : [blankLine, ...lines])),
];
