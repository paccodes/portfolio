import { app } from "./app";
import { scrollToBottom } from "./scroll";

export const getPromptInput = (): HTMLInputElement =>
  document.querySelector<HTMLInputElement>("#prompt")!;

export const focusPromptInput = (): void => {
  getPromptInput().focus();
};

export const mountPromptLine = (): void => {
  const promptLine = document.createElement("div");

  promptLine.classList.add("prompt-line");
  promptLine.innerHTML = `
    <span class="ps1">
      <span class="ps1-bracket">[</span>
      <span class="ps1-user">pac@codes</span>
      <span class="ps1-path">~</span>
      <span class="ps1-bracket">]</span>
      <span class="ps1-sigil">$</span>
    </span>
    <input id="prompt" />
  `;

  app.appendChild(promptLine);

  focusPromptInput();
  scrollToBottom();
};

export const freezePromptInput = (): string => {
  const promptInput = getPromptInput();
  const value = promptInput.value;
  const frozenPromptInput = document.createElement("span");

  frozenPromptInput.innerText = value;
  frozenPromptInput.className = promptInput.className;

  promptInput.replaceWith(frozenPromptInput);

  return value;
};
