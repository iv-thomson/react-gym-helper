import { PropsWithChildren } from "react";
import { ValidationRule } from "../../../services";

export const WithValidation = <T,>({
  children,
  rule,
  className,
}: PropsWithChildren<{ rule: ValidationRule<T>; className?: string }>) => {
  return (
    <div className={className}>
      {children}
      {!rule.isValid() && (
        <div className="text-color-error">{rule.message}</div>
      )}
    </div>
  );
};
