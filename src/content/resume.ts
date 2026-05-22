import type { Line } from "../types";

export const resume: Line[] = [
  {
    type: "p",
    segments: [
      { text: "Latest resume: " },
      {
        text: "/files/resume.pdf",
        href: "/files/resume.pdf",
        className: "tone-link",
      },
    ],
  },
];
