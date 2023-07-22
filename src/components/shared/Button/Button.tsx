import { MouseEvent, PropsWithChildren } from "react";
import "./Button.css";
import { ButtonStyle, CropStyle } from "../models";
import { optional, pipeClasses, withCondition } from "../utils";

export const Button = ({
  children,
  onClick,
  className,
  cropStyle,
  disabled,
  buttonStyle,
}: PropsWithChildren<{
  onClick: () => void;
  cropStyle?: CropStyle;
  disabled?: boolean;
  className?: string;
  buttonStyle?: ButtonStyle;
}>) => {
  const clickHanlder = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (disabled) return;
    onClick();
  };
  return (
    <button
      tabIndex={disabled ? -1 : 0}
      className={pipeClasses(
        "Button",
        optional(`Button--${buttonStyle}`),
        withCondition("disabled")(disabled),
        withCondition(`Button--${cropStyle}`)(Boolean(cropStyle)),
        optional(className)
      )}
      onClick={clickHanlder}
    >
      {children}
    </button>
  );
};
