import "./App.css";

import i18next from "i18next";
import { useState } from "react";

import { initReactI18next } from "react-i18next";
import { ExerciseForm } from "./components/exercise-from/ExerciseForm";
import { ExerciseState } from "./models";
import { Button } from "./components/shared/Button/Button";
import { ExerciseView } from "./components/exercise-view/ExerciseView";
import { Card } from "./components/shared/Card/Card";
import { CardList } from "./components/shared/CardList/CardList";
import { Side } from "./components/shared/Side/Side";
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

  const closeExercise = () => {
    setEditable(false);
    setCurrentEditableExercise(null);
  };

  return (
    <main className="row gap">
      <Side isOpen={Boolean(currentEditableExercise)} onClose={closeExercise}>
        {isEditable ? (
          <ExerciseForm
            data={currentEditableExercise || ExerciseState.empty()}
            setData={updateExercises}
          ></ExerciseForm>
        ) : (
          <ExerciseView
            state={currentEditableExercise || ExerciseState.empty()}
            setEditable={() => setEditable(true)}
          />
        )}
      </Side>

      <section className="column gap right">
        <CardList>
          {exerciseList.map((e) => (
            <Card
              hasHover
              onClick={() => setCurrentEditableExercise(e)}
              key={e.id}
            >
              <ExercisePreview state={e} />
            </Card>
          ))}
        </CardList>
        <Button onClick={openExercise}>New exercise +</Button>
      </section>
    </main>
  );
}

export default App;
