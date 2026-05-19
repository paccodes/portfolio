import { commandNames, runCommand } from "../commands";
import { app, freezePromptInput, mountPromptLine } from "../view";

import { autocomplete } from "./autocomplete";
import { getNext, getPrevious, pushHistory } from "./history";

const setInputValue = (input: HTMLInputElement, value: string) => {
  input.value = value;
  input.setSelectionRange(value.length, value.length);
};

export const bindKeys = (): void => {
  app.addEventListener("keydown", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLInputElement && target.id === "prompt")) {
      return;
    }

    switch (event.code) {
      case "KeyL": {
        if (!event.ctrlKey) {
          return;
        }

        event.preventDefault();

        const promptLine = target.closest(".prompt-line");

        if (promptLine) {
          app.replaceChildren(promptLine);
        }

        return;
      }

      case "KeyC": {
        if (!event.ctrlKey) {
          return;
        }

        if (window.getSelection()?.toString()) {
          return;
        }

        event.preventDefault();

        freezePromptInput();
        mountPromptLine();

        return;
      }

      case "Enter": {
        const input = freezePromptInput().trim();

        if (input !== "") {
          pushHistory(input);
        }

        runCommand(input);

        return;
      }

      case "Tab": {
        event.preventDefault();

        const command = autocomplete(target.value, commandNames);

        if (command !== null) {
          setInputValue(target, command);
        }

        return;
      }

      case "ArrowUp": {
        event.preventDefault();

        const previous = getPrevious();

        if (previous !== null) {
          setInputValue(target, previous);
        }

        return;
      }

      case "ArrowDown": {
        event.preventDefault();

        const next = getNext();

        if (next !== null) {
          setInputValue(target, next);
        }

        return;
      }
    }
  });
};
