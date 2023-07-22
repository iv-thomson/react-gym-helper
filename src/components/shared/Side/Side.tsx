import { PropsWithChildren } from "react";
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
