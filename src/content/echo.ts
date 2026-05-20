import type { Line } from "../types";

export const echo = (args: string): Line[] => [
  { type: "p", segments: [{ text: args }] },
];
