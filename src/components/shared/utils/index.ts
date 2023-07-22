export const withModifier = (original: string, modifier?: string): string =>
  modifier ? `${original} ${original}--${modifier}` : original;

export const withClass =
  (original: string, newClass?: string) => (condition: boolean) =>
    condition ? original + " " + newClass : original;

export const withDisabled = (original: string, isDisabled: boolean) =>
  withClass(original, "disabled")(isDisabled);

export const pipeModifiers = (
  className: string,
  ...modifiers: (string | undefined)[]
) =>
  modifiers.reduce<string>(
    (result, modifier) => result + " " + withModifier(className, modifier),
    className
  );

export const withCondition =
  (className?: string, fallBack: string = "") =>
  (condition: boolean = false): string =>
    (condition ? className : fallBack) ?? "";

export const optional = (className?: string) => className || "";

export const pipeClasses = (...classes: string[]): string => {
  return classes.reduce(
    (acc, className) => (className ? acc + " " + className : acc),
    ""
  );
};
