import { withCols } from "../content/with-cols";
import type { Line } from "../types";

import { typeLines } from "./renderer";

export const showBanner = async (): Promise<void> => {
  const response = await fetch("/pac.codes.txt");
  const text = await response.text();
  const lines: Line[] = text.split("\n").map((line) => ({
    type: "p",
    segments: [{ text: line }],
  }));

  await typeLines(withCols(lines, { banner: true }));
};
