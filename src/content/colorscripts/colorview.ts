import type { Line, Segment } from "../../types";

const COLORS = [
  "  black  ",
  "   red   ",
  "  green  ",
  "  yellow ",
  "   blue  ",
  " magenta ",
  "   cyan  ",
  "  white  ",
];

const ROWS: { label: string; bg: number | null }[] = [
  { label: "DFT", bg: null },
  { label: "BLK", bg: 0 },
  { label: "RED", bg: 1 },
  { label: "GRN", bg: 2 },
  { label: "YEL", bg: 3 },
  { label: "BLU", bg: 4 },
  { label: "MAG", bg: 5 },
  { label: "CYN", bg: 6 },
  { label: "WHT", bg: 7 },
];

const BAR =
  "──────────────────────────────────────────────────────────────────────────";

const border = (left: string, right: string): Line => ({
  type: "p",
  segments: [{ text: `     ${left}${BAR}${right}` }],
});

const swatchRow = (
  prefix: string,
  fgOffset: 0 | 8,
  bg: number | null,
): Line => {
  const segments: Segment[] = [{ text: ` ${prefix} │ ` }];

  for (let i = 0; i < 8; i++) {
    const parts = [`ansi-fg-${i + fgOffset}`];

    if (bg !== null) {
      parts.push(`ansi-bg-${bg}`);
    }

    if (fgOffset === 8) {
      parts.push("ansi-bold");
    }

    segments.push({ text: COLORS[i], className: parts.join(" ") });
  }

  segments.push({ text: " │" });

  return { type: "p", segments };
};

export const colorview: Line[] = [
  border("┌", "┐"),
  ...ROWS.flatMap((row, index) => {
    const last = index === ROWS.length - 1;

    return [
      swatchRow(row.label, 0, row.bg),
      swatchRow("   ", 8, row.bg),
      border(last ? "└" : "├", last ? "┘" : "┤"),
    ];
  }),
];
