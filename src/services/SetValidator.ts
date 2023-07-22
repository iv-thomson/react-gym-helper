import { ValidationRule } from ".";

export class SetValidator<T> {
  constructor(
    public repsValidator: ValidationRule<T>,
    public weightValidator: ValidationRule<T>
  ) {}

  public updateReps(reps: T) {
    return new SetValidator(
      this.repsValidator?.update(reps),
      this.weightValidator
    );
  }

  public updateWeight(weight: T) {
    return new SetValidator(
      this.repsValidator,
      this.weightValidator?.update(weight)
    );
  }
  public isValidForm(): boolean {
    return (
      (this.weightValidator?.isValid() && this.repsValidator?.isValid()) ?? true
    );
  }

  public static empty<T>(value: T) {
    return new SetValidator<T>(
      ValidationRule.emptyRule(value),
      ValidationRule.emptyRule(value)
    );
  }
}
