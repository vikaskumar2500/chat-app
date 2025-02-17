import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../ui/button";
import { forwardRef, ReactNode } from "react";

interface FormButtonProps extends ButtonProps {
  children: ReactNode;
  className?: string;
}

const FormButton = forwardRef<HTMLButtonElement, FormButtonProps>(
  ({ className, children, type = "submit", ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1 items-start w-full", className)}>
        <Button
          ref={ref}
          type={type}
          variant={"submit"}
          className={cn("w-full")}
          {...props}
        >
          {children}
        </Button>
      </div>
    );
  }
);

FormButton.displayName = "formButton";

export { FormButton };
