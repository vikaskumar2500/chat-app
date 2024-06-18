import { cn } from "@/lib/utils";
import { IoCloseCircleOutline } from "react-icons/io5";

interface FormErrorProps {
  errors?: any;
  id: string;
}

const FormError = ({ errors, id }: FormErrorProps) => {
  return (
    <div className={cn("flex flex-col gap-1 items-start w-full")}>
      {errors[id] ? (
        <div className="flex items-start gap-1">
          <IoCloseCircleOutline size={16} color="red" />
          <span className="text-xs text-red-600">
            {errors[id]?.message as string}
          </span>
        </div>
      ) : null}
    </div>
  );
};

FormError.displayName = "formError";

export { FormError };
