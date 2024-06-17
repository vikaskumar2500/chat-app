import { cn } from "@/lib/utils";
import { Input, InputProps } from "../ui/input";
import { Label } from "../ui/label";

interface FormInputProps extends InputProps {
  label?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const FormInput = ({
  label,
  className,
  inputClassName,
  labelClassName,
  ...props
}: FormInputProps) => {
  return (
    <div className={cn("flex flex-col gap-1 items-start w-full", className)}>
      {label && <Label className={cn("", labelClassName)}>{label}</Label>}
      <Input className={cn("", inputClassName)} {...props} />
    </div>
  );
};

FormInput.displayName = "formInput";

export { FormInput };
