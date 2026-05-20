export const history: string[] = [];

let cursor = 0;

export const pushHistory = (entry: string): void => {
  if (history[history.length - 1] !== entry) {
    history.push(entry);
  }

  cursor = history.length;
};

export const getPrevious = (): string | null => {
  if (cursor === 0) {
    return null;
  }

  cursor -= 1;

  return history[cursor];
};

export const getNext = (): string | null => {
  if (cursor >= history.length) {
    return null;
  }

  cursor += 1;

  return cursor === history.length ? "" : history[cursor];
};
