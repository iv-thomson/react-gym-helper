import { KeyboardEvent, PropsWithChildren } from "react";
import "./Card.css";

import { pipeClasses, withCondition } from "../utils";
import { CardColor } from "../models";

export const Card = ({
  children,
  className,
  color,
  onClick,
  hasHover,
  onKeyDown,
}: PropsWithChildren<{
  color?: CardColor;
  hasHover?: boolean;
  className?: string;
  onClick?: () => void;
  onKeyDown?: (event: KeyboardEvent) => void;
}>) => {
  return (
    <div
      className={pipeClasses(
        withCondition(className)(Boolean(className)),
        "Card p",
        withCondition(`Card--${color}`)(Boolean(color)),
        withCondition(`Card--with-hover`)(hasHover)
      )}
      onKeyDown={(e) => onKeyDown?.(e)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
