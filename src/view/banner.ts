import type { Line } from "../types";

import { typeLines } from "./renderer";

export const showBanner = async (): Promise<void> => {
  const response = await fetch("/pac.codes.txt");
  const text = await response.text();
  const lines: Line[] = text.split("\n").map((line) => ({
    type: "p",
    segments: [{ text: line, className: "banner" }],
  }));

  await typeLines(lines);
};
