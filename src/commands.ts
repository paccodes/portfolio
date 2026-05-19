import { about, blankLine, certs, contact, help, projects } from "./content";
import { toggleTheme } from "./theme";
import type { Line } from "./types";
import { clearOutput, mountPromptLine, typeLines } from "./view";

type Command = Line[] | (() => Line[] | void);

const commands: Record<string, Command> = {
  about,
  certs,
  clear: clearOutput,
  contact,
  help,
  projects,
  theme: toggleTheme,
};

export const commandNames = Object.keys(commands);

const getCommandNotFoundMessage = (input: string): Line[] => [
  {
    type: "p",
    segments: [
      { text: `pacsh: command not found: ${input}`, className: "tone-error" },
    ],
  },
];

const wrapWithBlankLines = (lines: Line[]): Line[] => [
  blankLine,
  ...lines,
  blankLine,
];

export const runCommand = async (input: string): Promise<void> => {
  if (input === "") {
    mountPromptLine();
    return;
  }

  const action = commands[input];

  const output = Array.isArray(action)
    ? action
    : action
      ? action()
      : getCommandNotFoundMessage(input);

  if (output) {
    await typeLines(wrapWithBlankLines(output));
  }

  mountPromptLine();
};
