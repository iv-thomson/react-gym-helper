import { PropsWithChildren, useEffect } from "react";
import "./Side.css";
import { Card } from "../Card/Card";
import { pipeClasses, withCondition } from "../utils";
import { Button } from "../Button/Button";
import { ButtonStyle } from "../models";

export const Side = ({
  children,
  isOpen,
  onClose,
}: PropsWithChildren<{ isOpen: boolean; onClose: () => void }>) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Card
      className={pipeClasses(
        "side",
        withCondition("side--opened", "side--closed")(isOpen)
      )}
    >
      <Button
        onClick={onClose}
        className="close-button"
        buttonStyle={ButtonStyle.TextOnly}
      >
        x
      </Button>
      {children}
    </Card>
  );
};
