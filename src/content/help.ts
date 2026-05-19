import type { Line } from "../types";

import { blankLine } from "./blank-line";

const getHelpItem = (name: string, description: string): Line => ({
  type: "p",
  segments: [
    { text: "  " },
    { text: name, command: name },
    { text: " ".repeat(Math.max(1, 12 - name.length)) },
    { text: description },
  ],
});

export const help: Line[] = [
  {
    type: "p",
    segments: [{ text: "Available commands:", className: "tone-title" }],
  },
  blankLine,
  getHelpItem("about", "Short biography."),
  getHelpItem("certs", "Certifications and coursework."),
  getHelpItem("clear", "Terminal reset."),
  getHelpItem("contact", "Email and social profiles."),
  getHelpItem("projects", "Showcase of recent projects."),
  getHelpItem("theme", "Dark/light toggle."),
  getHelpItem("help", "List of available commands."),
];
