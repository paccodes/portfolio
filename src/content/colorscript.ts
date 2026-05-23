import type { Line } from "../types";

import { colorscripts } from "./colorscripts";
import { withCols } from "./with-cols";

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

export const colorscript = (args: string): Line[] => {
  const name = args.trim();

  if (name === "") {
    const randomName = names[Math.floor(Math.random() * names.length)];

    return withCols(colorscripts[randomName], { art: true });
  }

  const script = colorscripts[name];

  return script ? withCols(script, { art: true }) : getNotFoundMessage(name);
};
