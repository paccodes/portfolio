import type { Line } from "../types";

interface WithColsOptions {
  banner?: boolean;
  art?: boolean;
}

const getLineWidth = (line: Line): number =>
  line.segments.reduce((sum, segment) => sum + segment.text.length, 0);

export const withCols = (
  lines: Line[],
  { banner = false, art = false }: WithColsOptions = {},
): Line[] => {
  const widths = lines.map(getLineWidth);
  const cols = String(Math.max(...widths));
  const extraStyle: Record<string, string> = { "--cols": cols };

  if (banner) {
    extraStyle["--banner"] = "1";
  }

  if (art) {
    extraStyle["--art"] = "1";
  }

  return lines.map((line, index) =>
    widths[index] === 0
      ? line
      : { ...line, style: { ...line.style, ...extraStyle } },
  );
};
