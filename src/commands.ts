import {
  about,
  blankLine,
  certs,
  contact,
  echo,
  help,
  projects,
} from "./content";
import { toggleTheme } from "./theme";
import type { Line } from "./types";
import { clearOutput, mountPromptLine, typeLines } from "./view";

type Command = Line[] | ((args: string) => Line[] | void);

const commands: Record<string, Command> = {
  about,
  certs,
  clear: clearOutput,
  contact,
  echo,
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

  const [command, ...rest] = input.split(" ");
  const args = rest.join(" ");

  const action = commands[command];

  const output = Array.isArray(action)
    ? action
    : action
      ? action(args)
      : getCommandNotFoundMessage(command);

  if (output) {
    await typeLines(wrapWithBlankLines(output));
  }

  mountPromptLine();
};
