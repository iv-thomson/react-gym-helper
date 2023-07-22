import { SetForm } from ".";
import { ValidationRule } from "../services";

import { uid } from "../utils";

export class ExerciseState {
  constructor(
    public name: string,
    public sets: SetForm[],
    public id: string,
    public validator: ValidationRule<string>
  ) {}

  public updateName(name: string) {
    return new ExerciseState(
      name,
      this.sets,
      this.id,
      this.validator.update(name)
    );
  }

  public updateSet(set: SetForm) {
    return new ExerciseState(
      this.name,
      this.sets.map((s) => (s.id === set.id ? set : s)),
      this.id,
      this.validator
    );
  }

  public addSet() {
    return new ExerciseState(
      this.name,
      this.sets.concat(SetForm.empty()),
      this.id,
      this.validator
    );
  }

  public deleteSet(set: SetForm) {
    return new ExerciseState(
      this.name,
      this.sets.filter((s) => s.id !== set.id),
      this.id,
      this.validator
    );
  }
  public static empty(): ExerciseState {
    return new ExerciseState(
      "",
      [SetForm.empty()],
      uid(),
      ValidationRule.nonEmpty("")
    );
  }
}
