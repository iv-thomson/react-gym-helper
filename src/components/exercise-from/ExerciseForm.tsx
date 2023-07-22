import { useEffect, useState } from "react";

import { t } from "i18next";
import { ExerciseState } from "../../models";

import { SetInput } from "../set-form/SetForm";
import { Button } from "../shared/Button/Button";
import { Input } from "../shared/Input/Input";
import { WithValidation } from "../shared/WithValidation/WithValidation";
import { loadExercise, saveExercise } from "../../services/LocalStorage";

export const ExerciseForm = ({
  data,
  setData,
}: {
  data?: ExerciseState;
  setData: (data: ExerciseState) => void;
}) => {
  const [state, setState] = useState(
    data || loadExercise() || ExerciseState.empty()
  );

  useEffect(() => saveExercise(state), [state]);

  return (
    <section className="column gap">
      <h3>{t("Set")}</h3>
      <WithValidation rule={state.validator}>
        <Input
          value={state.name}
          onInput={(name) => setState(state.updateName(name))}
        />
      </WithValidation>
      {state.sets.map((set) => (
        <SetInput
          state={set}
          onDelete={(set) => setState(state.deleteSet(set))}
          setState={(set) => setState(state.updateSet(set))}
        />
      ))}

      <Button
        onClick={() => setState(state.addSet())}
        disabled={state.sets.length > 10}
      >
        {t("Add set")} +
      </Button>

      <Button onClick={() => setData(state)} disabled={state.sets.length > 10}>
        {t("Save")}
      </Button>
    </section>
  );
};
