import type { Line } from "../types";

import { fortunes, type Fortune } from "./fortunes";

const BUBBLE_WIDTH = 40;

const COW = [
  "        \\   ^__^",
  "         \\  (oo)\\_______",
  "            (__)\\       )\\/\\",
  "                ||----w |",
  "                ||     ||",
];

const formatFortune = ({ text, by }: Fortune): string =>
  by ? `${text}\n\n    -- ${by}` : text;

const wrapFortune = (text: string, width: number): string[] => {
  const output: string[] = [];

  for (const rawLine of text.split("\n")) {
    if (rawLine.trim() === "") {
      output.push("");

      continue;
    }

    const indent = rawLine.match(/^\s*/)![0];
    const words = rawLine.slice(indent.length).split(/\s+/);

    let line = indent;

    for (const word of words) {
      if (line === indent) {
        line += word;
      } else if (line.length + 1 + word.length <= width) {
        line += ` ${word}`;
      } else {
        output.push(line);
        line = indent + word;
      }

      while (line.length > width) {
        output.push(line.slice(0, width));
        line = indent + line.slice(width);
      }
    }

    if (line !== indent) {
      output.push(line);
    }
  }

  return output;
};

const bubble = (lines: string[]): string[] => {
  const width = Math.max(...lines.map((line) => line.length));
  const top = ` ${"_".repeat(width + 2)}`;
  const bottom = ` ${"-".repeat(width + 2)}`;

  if (lines.length === 1) {
    return [top, `< ${lines[0].padEnd(width)} >`, bottom];
  }

  const body = lines.map((line, index) => {
    const paddedLine = line.padEnd(width);

    if (index === 0) {
      return `/ ${paddedLine} \\`;
    }

    if (index === lines.length - 1) {
      return `\\ ${paddedLine} /`;
    }

    return `| ${paddedLine} |`;
  });

  return [top, ...body, bottom];
};

const getLineFromText = (text: string): Line => ({
  type: "p",
  segments: [{ text }],
  style: { "white-space": "pre" },
});

export const moo = (): Line[] => {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  const wrappedFortune = wrapFortune(formatFortune(fortune), BUBBLE_WIDTH);

  return [...bubble(wrappedFortune), ...COW].map(getLineFromText);
};
