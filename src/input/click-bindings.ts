import { runCommand } from "../commands";
import { focusPromptInput, freezePromptInput, getPromptInput } from "../view";

import { pushHistory } from "./history";

export const bindClicks = (): void => {
  document.addEventListener("click", (event) => {
    const target = event.target;

    if (target instanceof HTMLButtonElement && target.dataset.command) {
      event.preventDefault();

      const command = target.dataset.command;
      const promptInput = getPromptInput();

      promptInput.value = command;

      freezePromptInput();
      pushHistory(command);
      runCommand(command);

      return;
    }

    if (
      target instanceof HTMLAnchorElement ||
      target instanceof HTMLInputElement
    ) {
      return;
    }

    if (window.getSelection()?.toString()) {
      return;
    }

    focusPromptInput();
  });
};
