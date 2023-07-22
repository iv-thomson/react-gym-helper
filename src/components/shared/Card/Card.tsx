import { PropsWithChildren } from "react";
import "./Card.css";

import { pipeClasses, withCondition } from "../utils";
import { CardColor } from "../models";

export const Card = ({
  children,
  className,
  color,
  onClick,
  hasHover,
}: PropsWithChildren<{
  color?: CardColor;
  hasHover?: boolean;
  className?: string;
  onClick?: () => void;
}>) => {
  return (
    <div
      className={pipeClasses(
        withCondition(className)(Boolean(className)),
        "Card p",
        withCondition(`Card--${color}`)(Boolean(color)),
        withCondition(`Card--with-hover`)(hasHover)
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
