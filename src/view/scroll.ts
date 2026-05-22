let pending = false;

export const scrollToBottom = (): void => {
  if (pending) {
    return;
  }

  pending = true;

  requestAnimationFrame(() => {
    pending = false;
    window.scrollTo({ top: document.documentElement.scrollHeight });
  });
};
