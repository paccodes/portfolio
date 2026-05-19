import type { Line } from "../types";

import { blankLine } from "./blank-line";

export const about: Line[] = [
  {
    type: "p",
    segments: [
      {
        text: "I'm Pierre-Alain Castella, a software engineer located in Geneva metropolitan area.",
        className: "tone-title",
      },
    ],
  },
  blankLine,
  {
    type: "p",
    segments: [
      { text: "• " },
      {
        text: "Six years of delivering to industrial users — through greenfield launches, mid-flight API redesigns, and patient legacy rescues, on schedule.",
      },
    ],
  },
  {
    type: "p",
    segments: [
      { text: "• " },
      {
        text: "Most at home in React and TypeScript, where the UI has to absorb a steady stream of updates — live grids, charts, maps, and the synchronization headaches that come with them.",
      },
    ],
  },
  {
    type: "p",
    segments: [
      { text: "• " },
      {
        text: "Comfortable straying from the web platform — Haskell, Zig, and Web Containers all show up in recent side projects.",
      },
    ],
  },
  {
    type: "p",
    segments: [
      { text: "• " },
      {
        text: "Treats readability as a feature — small surfaces, clear structure, code worth coming back to.",
      },
    ],
  },
  {
    type: "p",
    segments: [
      { text: "• " },
      {
        text: "At ease in international, cross-functional teams — equally happy pairing with product, design, or the trading desk.",
      },
    ],
  },
  {
    type: "p",
    segments: [
      { text: "• " },
      {
        text: "Learns by building — new languages and domains enter the toolkit through projects, not just tutorials.",
      },
    ],
  },
];
