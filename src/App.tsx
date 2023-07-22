import "./App.css";

import i18next, { t } from "i18next";
import { useState } from "react";

import { initReactI18next } from "react-i18next";
import { ExerciseForm } from "./components/exercise-from/ExerciseForm";
import { ExerciseState } from "./models";
import { Button } from "./components/shared/Button/Button";
import { ExercisePreview } from "./components/exercise-preview/ExercisePreview";

i18next.use(initReactI18next).init({});

function App() {
  const [exerciseList, updateExercices] = useState<ExerciseState[]>([]);
  const [currentEditableExercise, setCurrentEditableExercise] =
    useState<ExerciseState | null>(null);

  const [isEditable, setEditable] = useState(false);

  const updateExercises = (exercise: ExerciseState) => {
    setCurrentEditableExercise(null);
    setEditable(false);

    exerciseList.some(({ id }) => exercise.id === id)
      ? updateExercices(
          exerciseList.map((e) => (e.id === exercise.id ? exercise : e))
        )
      : updateExercices(exerciseList.concat(exercise));
  };

  const openExercise = () => {
    setEditable(true);
    setCurrentEditableExercise(ExerciseState.empty());
  };

  return (
    <main className="row gap">
      {currentEditableExercise && (
        <aside>
          {isEditable ? (
            <ExerciseForm
              data={currentEditableExercise}
              setData={updateExercises}
            ></ExerciseForm>
          ) : (
            <ExercisePreview
              state={currentEditableExercise}
              setEditable={() => setEditable(true)}
            />
          )}
        </aside>
      )}
      <section className="column gap">
        {exerciseList.map((e) => (
          <div onClick={() => setCurrentEditableExercise(e)}>{e.name}</div>
        ))}
        <Button onClick={openExercise}>New exercise +</Button>
      </section>
    </main>
  );
}

export default App;
