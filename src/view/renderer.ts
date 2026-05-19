import type { Line } from "../types";

import { app } from "./app";
import { scrollToBottom } from "./scroll";

const CHAR_GAP_MS = 2;
const CHARS_PER_TICK = 3;

const sleep = (ms: number): Promise<void> =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

const renderLine = async (line: Line): Promise<void> => {
  const lineElement = document.createElement(line.type);

  lineElement.classList.add("line", "typing");

  app.appendChild(lineElement);

  const segmentNodes = line.segments.map((segment) => {
    const node = segment.command
      ? document.createElement("button")
      : segment.href
        ? document.createElement("a")
        : document.createElement("span");

    if (segment.className) {
      node.className = segment.className;
    }

    if (segment.command && node instanceof HTMLButtonElement) {
      node.type = "button";
      node.dataset.command = segment.command;
      node.classList.add("tone-command");
    }

    if (segment.href && node instanceof HTMLAnchorElement) {
      node.href = segment.href;
      node.target = "_blank";
      node.rel = "noopener noreferrer";
    }

    lineElement.appendChild(node);

    return node;
  });

  for (let i = 0; i < line.segments.length; i++) {
    const node = segmentNodes[i];
    const text = line.segments[i].text;

    for (let j = 0; j < text.length; j += CHARS_PER_TICK) {
      node.textContent += text.slice(j, j + CHARS_PER_TICK);

      scrollToBottom();

      await sleep(CHAR_GAP_MS);
    }
  }

  lineElement.classList.remove("typing");
};

export const typeLines = async (lines: Line[]): Promise<void> => {
  for (const line of lines) {
    await renderLine(line);
  }
};

export const clearOutput = (): void => {
  app.replaceChildren();
};
