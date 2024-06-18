import { cn } from "@/lib/utils";
import { Input, InputProps } from "../ui/input";
import { Label } from "../ui/label";
import { forwardRef } from "react";
import { FieldErrors } from "react-hook-form";
import { FormError } from "./form-error";

interface FormInputProps extends InputProps {
  label?: string;
  className?: string;
  labelClassName?: string;
  errors?: FieldErrors;
  inputClassName?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      label,
      className,
      inputClassName,
      errors,
      labelClassName,
      id,
      name,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("flex flex-col gap-1 items-start w-full", className)}>
        <div
          className={cn("flex flex-col gap-1 items-start w-full", className)}
        >
          {label && <Label className={cn("", labelClassName)}>{label}</Label>}
          <Input
            ref={ref}
            id={id}
            name={name ? name : id}
            {...ref}
            className={cn("", inputClassName)}
            {...props}
          />
        </div>
        <FormError errors={errors} id={id!} />
      </div>
    );
  }
);

FormInput.displayName = "formInput";

export { FormInput };
