import { ExerciseState } from "../../models";

export const ExercisePreview = ({ state }: { state: ExerciseState }) => {
  return (
    <div className="column gap content">
      <h4>{state.name}</h4>
      <ul className="ul-no-style">
        {state.sets.slice(0, 3).map((set) => (
          <li key={set.id}>
            {set.reps} x {set.weight}kg
          </li>
        ))}
      </ul>
      {state.sets.length > 3 && <span>...</span>}
    </div>
  );
};
