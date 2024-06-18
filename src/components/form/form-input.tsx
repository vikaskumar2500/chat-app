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
  parentClassName?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      label,
      className,
      inputClassName,
      errors,
      labelClassName,
      parentClassName,
      id,
      name,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "flex flex-col gap-1 items-start w-full",
          parentClassName
        )}
      >
        <div
          className={cn("flex flex-col gap-1 justify-center w-full", className)}
        >
          {label && (
            <Label className={cn("font-semibold", labelClassName)}>
              {label}
            </Label>
          )}
          <Input
            ref={ref}
            id={id}
            name={name ? name : id}
            {...ref}
            className={cn("", inputClassName)}
            {...props}
          />
        </div>
        {errors ? <FormError errors={errors} id={id!} /> : null}
      </div>
    );
  }
);

FormInput.displayName = "formInput";

export { FormInput };
