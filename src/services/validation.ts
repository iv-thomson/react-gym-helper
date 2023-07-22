export class ValidationRule<T> {
  constructor(
    public value: T,
    private validator: (v: T) => boolean,
    public message: string,
    public isTouched: boolean = false
  ) {}

  public update(value: T) {
    return new ValidationRule(value, this.validator, this.message, true);
  }

  public isValid(): boolean {
    if (!this.isTouched) {
      return true;
    }
    return this.validator(this.value);
  }

  public static langerThanZero = (value: number, isTouched: boolean = false) =>
    new ValidationRule(
      value,
      (v) => v >= 0,
      "Should be bigger than 0",
      isTouched
    );

  public static nonEmpty = (value: string, isTouched: boolean = false) =>
    new ValidationRule(
      value,
      (v) => Boolean(v.trim().length),
      "Should not be empty",
      isTouched
    );

  public static emptyRule = <T>(value: T) =>
    new ValidationRule(value, () => true, "");
}
