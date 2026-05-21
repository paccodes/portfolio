import type { Line } from "../types";

import { colorscripts } from "./colorscripts";

const names = Object.keys(colorscripts);

const getNotFoundMessage = (name: string): Line[] => [
  {
    type: "p",
    segments: [
      {
        text: `pacsh: colorscript not found: ${name}`,
        className: "tone-error",
      },
    ],
  },
  {
    type: "p",
    segments: [{ text: `available colorscripts: ${names.join(", ")}` }],
  },
];

const getLineWidth = (line: Line): number =>
  line.segments.reduce((sum, segment) => sum + segment.text.length, 0);

const withCols = (lines: Line[]): Line[] => {
  const widths = lines.map(getLineWidth);
  const cols = String(Math.max(...widths));

  return lines.map((line, index) =>
    widths[index] === 0
      ? line
      : { ...line, style: { ...line.style, "--cols": cols } },
  );
};

export const colorscript = (args: string): Line[] => {
  const name = args.trim();

  if (name === "") {
    const randomName = names[Math.floor(Math.random() * names.length)];

    return withCols(colorscripts[randomName]);
  }

  const script = colorscripts[name];

  return script ? withCols(script) : getNotFoundMessage(name);
};
