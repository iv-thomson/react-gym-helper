export const withModifier = (original: string, modifier?: string): string =>
  modifier ? `${original} ${original}--${modifier}` : original;

export const withClass =
  (original: string, newClass?: string) => (condition: boolean) =>
    condition ? original + " " + newClass : original;

export const withDisabled = (original: string, isDisabled: boolean) =>
  withClass(original, "disabled")(isDisabled);
