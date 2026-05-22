import type { Line, Segment } from "../types";

const COLUMNS = 3;
const COLUMN_WIDTH = 14;

export const ls = (commands: string[]): Line[] => {
  const names = [...commands].sort();
  const rows = Math.ceil(names.length / COLUMNS);

  return Array.from({ length: rows }, (_, row): Line => {
    const segments: Segment[] = [];

    for (let col = 0; col < COLUMNS; col++) {
      const index = col * rows + row;

      if (index >= names.length) {
        break;
      }

      const name = names[index];

      segments.push({ text: name, command: name });

      if (col < COLUMNS - 1) {
        const padding = COLUMN_WIDTH - name.length;

        if (padding > 0) {
          segments.push({ text: " ".repeat(padding) });
        }
      }
    }

    return {
      type: "p",
      segments,
      style: { "white-space": "pre" },
    };
  });
};
