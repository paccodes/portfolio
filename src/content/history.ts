import type { Line } from "../types";

export const history = (commands: string[]): Line[] => {
  const indexWidth = String(commands.length).length;

  return commands.map((command, index) => ({
    type: "p",
    segments: [
      { text: `${String(index + 1).padStart(indexWidth)}  ${command}` },
    ],
  }));
};
