import { CropStyle } from "../models";
import { withModifier } from "../utils";
import "./Input.css";

interface Props {
  value: string;
  onInput: (value: string) => void;
  inputStyle?: CropStyle;
}

export const Input = ({ value, onInput, inputStyle }: Props) => {
  return (
    <input
      value={value}
      className={withModifier("Input", inputStyle || CropStyle.Default)}
      onInput={(event) => onInput(event.currentTarget.value)}
    />
  );
};
