import { FormInput } from "@/components/form/form-input";
import { FormButton } from "@/components/form/form-button";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";

const LoginSchema = z.object({
  message: z.string().min(1, "Empty text input"),
});

type FieldValues = z.infer<typeof LoginSchema>;
const Chat = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { register, handleSubmit, watch } = useForm<FieldValues>({
    resolver: zodResolver(LoginSchema),
    mode: "all",
    shouldFocusError: true,
  });

  const onSubmit = (data: FieldValues) => {
    console.log("message", data.message);
    formRef.current?.reset();
  };

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <h1 className="text-3xl font-bold text-neutral-700">Chats</h1>
        <ul className="flex flex-col items-start max-w-xl w-full">
          {["viasjdflajsdkfjs", "vljdlksjdf", "this is my chat app"].map(
            (data, key) => (
              <li key={key} className=" w-full p-5 py-2 even:border  even:bg-gray-100">
                {data}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="absolute flex items-center justify-center w-full py-2 bottom-0 left-0 bg-sky-700">
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center justify-center gap-1 max-w-xl w-full bg-sky-700"
        >
          <FormInput
            {...register("message")}
            id="message"
            className="h-[60px] flex items-center justify-center"
          />
          <FormButton
            disabled={
              watch("message") === undefined
                ? true
                : watch("message").length === 0
                ? true
                : false
            }
            className="w-20"
          >
            send
          </FormButton>
        </form>
      </div>
    </section>
  );
};

export default Chat;
