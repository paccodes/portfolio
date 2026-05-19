import type { Line } from "../types";

import { blankLine } from "./blank-line";

const getCertificateItem = (label: string, href: string): Line => ({
  type: "p",
  segments: [{ text: "    - " }, { text: label, className: "tone-link", href }],
});

export const certs: Line[] = [
  {
    type: "p",
    segments: [
      { text: "• " },
      { text: "University of Helsinki", className: "tone-em" },
    ],
  },
  getCertificateItem(
    "Haskell Functional Programming I",
    "https://pac.codes/files/Suoritusote_021384048_Castella_01092025_171618_en.pdf",
  ),
  getCertificateItem(
    "Python Programming II",
    "https://certificates.mooc.fi/validate/25zd2km86z4",
  ),
  getCertificateItem(
    "Python Programming I",
    "https://certificates.mooc.fi/validate/1vg5y1uk98ch",
  ),
  getCertificateItem(
    "Java Programming II",
    "https://certificates.mooc.fi/validate/aovja8x7tai",
  ),
  getCertificateItem(
    "Java Programming I",
    "https://certificates.mooc.fi/validate/yur6pxkllp",
  ),
  blankLine,
  {
    type: "p",
    segments: [
      { text: "• " },
      { text: "Coursera", className: "tone-em" },
      { text: " — Specializations" },
    ],
  },
  getCertificateItem(
    "Java as a Second Language",
    "https://www.coursera.org/account/accomplishments/specialization/4FMDQP4TZTDU",
  ),
  getCertificateItem(
    "Software Product Management",
    "https://www.coursera.org/account/accomplishments/specialization/7YM6TN6CZZ3N",
  ),
  getCertificateItem(
    "Full-Stack Web Development with React",
    "https://www.coursera.org/account/accomplishments/specialization/3CZKAGUVFKTM",
  ),
  blankLine,
  {
    type: "p",
    segments: [
      { text: "• " },
      { text: "Coursera", className: "tone-em" },
      { text: " — Courses" },
    ],
  },
  getCertificateItem(
    "Data Analysis with Python",
    "https://www.coursera.org/account/accomplishments/verify/5FRJEMKKUV8G",
  ),
  getCertificateItem(
    "Databases and SQL for Data Science with Python",
    "https://www.coursera.org/account/accomplishments/verify/9VX8AQMZKG99",
  ),
  getCertificateItem(
    "Python Project for Data Science",
    "https://www.coursera.org/account/accomplishments/verify/KBSQH5XB9QY4",
  ),
  getCertificateItem(
    "Python for Data Science, AI & Development",
    "https://www.coursera.org/account/accomplishments/verify/ERA3HFTYZTSJ",
  ),
  getCertificateItem(
    "Data Science Methodology",
    "https://www.coursera.org/account/accomplishments/verify/THY95HD4MKXJ",
  ),
  getCertificateItem(
    "Tools for Data Science",
    "https://www.coursera.org/account/accomplishments/verify/ZJYBVGTYHNVT",
  ),
  getCertificateItem(
    "What is Data Science?",
    "https://www.coursera.org/account/accomplishments/verify/HN69FMZ56RBN",
  ),
  getCertificateItem(
    "MongoDB Aggregation Framework",
    "https://www.coursera.org/account/accomplishments/verify/SBWX4LG6TBBP",
  ),
  getCertificateItem(
    "Introduction to MongoDB",
    "https://www.coursera.org/account/accomplishments/verify/GB2NTVY82J3G",
  ),
  getCertificateItem(
    "AWS Fundamentals: Building Serverless Applications",
    "https://www.coursera.org/account/accomplishments/verify/J94S4XJ8GYRJ",
  ),
  getCertificateItem(
    "AWS Fundamentals: Going Cloud-Native",
    "https://www.coursera.org/account/accomplishments/verify/J2882W7FVN3Z",
  ),
  blankLine,
  {
    type: "p",
    segments: [
      { text: "• " },
      { text: "freeCodeCamp", className: "tone-em" },
      { text: " & " },
      { text: "Microsoft", className: "tone-em" },
    ],
  },
  getCertificateItem(
    "Foundational C# with Microsoft",
    "https://www.freecodecamp.org/certification/fcc4190dc0e-cd69-4532-a5d7-b8102ffb621d/foundational-c-sharp-with-microsoft",
  ),
];
