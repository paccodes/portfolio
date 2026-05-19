const entries: string[] = [];

let cursor = 0;

export const pushHistory = (entry: string): void => {
  if (entries[entries.length - 1] !== entry) {
    entries.push(entry);
  }

  cursor = entries.length;
};

export const getPrevious = (): string | null => {
  if (cursor === 0) {
    return null;
  }

  cursor -= 1;

  return entries[cursor];
};

export const getNext = (): string | null => {
  if (cursor >= entries.length) {
    return null;
  }

  cursor += 1;

  return cursor === entries.length ? "" : entries[cursor];
};
