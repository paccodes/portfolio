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
  getHelpItem("about", "Once upon a dev."),
  getHelpItem("certs", "I paid money for these."),
  getHelpItem("clear", "Wipe the prompt clean."),
  getHelpItem("contact", "Slide into my packets."),
  getHelpItem("echo", "Yell into the void."),
  getHelpItem("history", "Your command rap sheet."),
  getHelpItem("projects", "My greatest commits."),
  getHelpItem("theme", "Light mode is a cry for help."),
  getHelpItem("help", "SOS, fully spelled out."),
];
