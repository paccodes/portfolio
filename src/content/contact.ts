import type { Line } from "../types";

const getContactItem = (label: string, value: string, href: string): Line => ({
  type: "p",
  segments: [
    { text: `${label.padEnd(10)} ` },
    { text: value, className: "tone-link", href },
  ],
});

export const contact: Line[] = [
  getContactItem("email", "hello@pac.codes", "mailto:hello@pac.codes"),
  getContactItem(
    "github",
    "github.com/paccodes",
    "https://github.com/paccodes",
  ),
  getContactItem(
    "linkedin",
    "linkedin.com/in/pierrealaincastella",
    "https://www.linkedin.com/in/pierrealaincastella",
  ),
];
