export type Segment = {
  text: string;
  className?: string;
  command?: string;
  href?: string;
};

export type Line = {
  type: keyof HTMLElementTagNameMap;
  segments: Segment[];
  style?: Record<string, string>;
};
