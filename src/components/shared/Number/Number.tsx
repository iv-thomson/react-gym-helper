import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { CropStyle } from "../models";

interface Props {
  value: number;
  onInput: (value: number) => void;
  step?: number;
}

export const NumberInput = ({ value, onInput, step }: Props) => {
  const inputStep = step || 1;
  const onChange = (newValue: string) => {
    if (Number.isNaN(Number(newValue))) {
      return;
    }

    onInput(Number(newValue));
  };

  return (
    <div className="row">
      <Input
        value={String(value)}
        onInput={onChange}
        inputStyle={CropStyle.CroppedRight}
      />
      <div className="row">
        <Button
          onClick={() => onInput(value - inputStep)}
          cropStyle={CropStyle.Square}
        >
          -
        </Button>
        <Button
          onClick={() => onInput(value + inputStep)}
          cropStyle={CropStyle.CroppedLeft}
        >
          +
        </Button>
      </div>
    </div>
  );
};
