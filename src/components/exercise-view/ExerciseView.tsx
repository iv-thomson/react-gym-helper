import { t } from "i18next";
import { ExerciseState } from "../../models";

import { Button } from "../shared/Button/Button";

export const ExerciseView = ({
  state,
  setEditable,
}: {
  state: ExerciseState;
  setEditable: () => void;
}) => {
  return (
    <section className="column gap content">
      <h2>{t("Set")}</h2>
      <h4>{state.name}</h4>

      <ul className="ul-no-style">
        {state.sets.map((set) => (
          <li key={set.id}>
            {set.reps} x {set.weight}kg
          </li>
        ))}
      </ul>

      <Button onClick={() => setEditable()}>Edit</Button>
    </section>
  );
};
