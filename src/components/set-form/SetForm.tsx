import { NumberInput } from "../shared/Number/Number";
import { t } from "i18next";
import { SetForm } from "../../models";

import { WithValidation } from "../shared/WithValidation/WithValidation";

import { Button } from "../shared/Button/Button";

interface Props {
  state: SetForm;
  setState: (value: SetForm) => void;
  onDelete: (value: SetForm) => void;
}

export const SetInput = ({ state, setState, onDelete }: Props) => {
  return (
    <form className="row gap">
      <WithValidation
        className="column gap-s"
        rule={state.validator.repsValidator}
      >
        <label>{t("Reps")}</label>
        <NumberInput
          value={state.reps}
          onInput={(value) => setState(state.updateReps(value))}
        />
      </WithValidation>

      <WithValidation
        className="column gap-s"
        rule={state.validator.weightValidator}
      >
        <label>{t("Weight")}</label>
        <NumberInput
          value={state.weight}
          onInput={(value) => setState(state.updateWeight(value))}
        />
      </WithValidation>
      <Button onClick={() => onDelete(state)}>{t("Delete")}</Button>
    </form>
  );
};
