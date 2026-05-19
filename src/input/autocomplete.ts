export const autocomplete = (input: string, names: string[]): string | null => {
  if (input === "") {
    return null;
  }

  const matches = names.filter((name) => name.startsWith(input));

  return matches.length === 1 ? matches[0] : null;
};
