import "./style.css";

import { intro } from "./content";
import { bindClicks, bindKeys } from "./input";
import { initializeTheme } from "./theme";
import { mountPromptLine, showBanner, typeLines } from "./view";

initializeTheme();
bindClicks();
bindKeys();

document.addEventListener("DOMContentLoaded", async () => {
  await showBanner();
  await typeLines(intro);
  mountPromptLine();
});
