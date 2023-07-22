import { ExerciseState } from "../models";

const exerciseKey = "exercise-state";

export const saveExercise = (exercise: ExerciseState): void => {
  localStorage.setItem(exerciseKey, JSON.stringify(exercise));
};

export const loadExercise = (): ExerciseState | null => {
  const raw = localStorage.getItem(exerciseKey);

  return raw ? JSON.parse(raw) : null;
};
