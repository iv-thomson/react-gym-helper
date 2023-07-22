import { SetValidator, ValidationRule } from "../services";
import { uid } from "../utils";

export class SetForm {
  constructor(
    public reps: number,
    public weight: number,
    public id: string,
    public validator: SetValidator<number> = SetValidator.empty(0)
  ) {}

  public updateReps(reps: number) {
    return new SetForm(
      reps,
      this.weight,
      this.id,
      this.validator.updateReps(reps)
    );
  }

  public updateWeight(weight: number) {
    return new SetForm(
      this.reps,
      weight,
      this.id,
      this.validator.updateReps(weight)
    );
  }

  public static empty(): SetForm {
    return new SetForm(
      0,
      0,
      uid(),
      new SetValidator(
        ValidationRule.langerThanZero(0),
        ValidationRule.langerThanZero(0)
      )
    );
  }
}
