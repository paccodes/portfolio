import type { Line } from "./types";

type CrtState = "on" | "off";

const STORAGE_KEY = "crt";

const applyCrt = (state: CrtState): void => {
  document.documentElement.classList.toggle("crt", state === "on");
};

const getCurrentCrt = (): CrtState =>
  document.documentElement.classList.contains("crt") ? "on" : "off";

const getPreferredCrt = (): CrtState => {
  const storedState = localStorage.getItem(STORAGE_KEY);

  if (storedState === "on" || storedState === "off") {
    return storedState;
  }

  return "off";
};

export const initializeCrt = (): void => {
  applyCrt(getPreferredCrt());

  window.addEventListener("storage", ({ key, newValue }) => {
    if (key !== STORAGE_KEY) {
      return;
    }

    if (newValue === "on" || newValue === "off") {
      applyCrt(newValue);
    }
  });
};

export const toggleCrt = (): Line[] => {
  const nextState: CrtState = getCurrentCrt() === "on" ? "off" : "on";

  applyCrt(nextState);

  localStorage.setItem(STORAGE_KEY, nextState);

  return [
    {
      type: "p",
      segments: [{ text: "crt → " }, { text: nextState, className: "tone-em" }],
    },
  ];
};
