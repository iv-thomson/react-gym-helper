import { MouseEvent, PropsWithChildren } from "react";
import "./Button.css";
import { CropStyle } from "../models";
import { withDisabled, withModifier } from "../utils";

export const Button = ({
  children,
  onClick,
  cropStyle,
  disabled,
}: PropsWithChildren<{
  onClick: () => void;
  cropStyle?: CropStyle;
  disabled?: boolean;
}>) => {
  const clickHanlder = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (disabled) return;
    onClick();
  };
  return (
    <button
      tabIndex={disabled ? -1 : 0}
      className={withDisabled(
        withModifier("Button", cropStyle),
        disabled ?? false
      )}
      onClick={clickHanlder}
    >
      {children}
    </button>
  );
};
