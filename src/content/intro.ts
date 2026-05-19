import type { Line } from "../types";

import { blankLine } from "./blank-line";

export const intro: Line[] = [
  blankLine,
  {
    type: "p",
    segments: [
      { text: "Type " },
      { text: "help", command: "help" },
      { text: " to see commands." },
    ],
  },
  blankLine,
];
