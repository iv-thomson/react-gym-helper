import { t } from "i18next";
import { ExerciseState } from "../../models";

import { Button } from "../shared/Button/Button";

export const ExercisePreview = ({
  state,
  setEditable,
}: {
  state: ExerciseState;
  setEditable: () => void;
}) => {
  return (
    <section className="column gap">
      <h3>{t("Set")}</h3>
      <h6>{state.name}</h6>

      {state.sets.map((set) => (
        <p>
          {set.reps} x ${set.weight}
        </p>
      ))}

      <Button onClick={() => setEditable()}>Edit</Button>
    </section>
  );
};
