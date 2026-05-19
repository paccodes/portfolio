import type { Line } from "./types";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

const applyTheme = (theme: Theme): void => {
  document.documentElement.classList.toggle("theme-light", theme === "light");
};

const getCurrentTheme = (): Theme =>
  document.documentElement.classList.contains("theme-light") ? "light" : "dark";

const getPreferredTheme = (): Theme => {
  const storedTheme = localStorage.getItem(STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

export const initializeTheme = (): void => {
  applyTheme(getPreferredTheme());

  window.addEventListener("storage", ({ key, newValue }) => {
    if (key !== STORAGE_KEY) {
      return;
    }

    if (newValue === "light" || newValue === "dark") {
      applyTheme(newValue);
    }
  });
};

export const toggleTheme = (): Line[] => {
  const nextTheme: Theme = getCurrentTheme() === "dark" ? "light" : "dark";

  applyTheme(nextTheme);

  localStorage.setItem(STORAGE_KEY, nextTheme);

  return [
    {
      type: "p",
      segments: [
        { text: "theme → " },
        { text: nextTheme, className: "tone-em" },
      ],
    },
  ];
};
