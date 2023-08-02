import "./ExercisePage.css";

import { t } from "i18next";
import { useState } from "react";

import { ExerciseForm } from "@/components/exercise-from/ExerciseForm";
import { ExerciseState } from "@/models";
import { Button } from "@/components/shared/Button/Button";
import { ExerciseView } from "@/components/exercise-view/ExerciseView";
import { Card } from "@/components/shared/Card/Card";
import { CardList } from "@/components/shared/CardList/CardList";
import { Side } from "@/components/shared/Side/Side";
import { ExercisePreview } from "@/components/exercise-preview/ExercisePreview";

export const ExercisePage = () => {
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
    <main className="column gap">
      <h1>{t("Workout")}</h1>
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

      <section className="column gap right exercise-list">
        {exerciseList.length > 0 ? (
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
        ) : (
          <h3>{t("Start your workout by adding exercises!")}</h3>
        )}
        <Button onClick={openExercise}>New exercise +</Button>
      </section>
    </main>
  );
};
