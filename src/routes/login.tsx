import { FormButton } from "@/components/form/form-button";
import { FormInput } from "@/components/form/form-input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%*#?&])[A-Za-z\d@$#*].{7,}$/,
      "Invalid password"
    ),
});

type FieldValues = z.infer<typeof LoginSchema>;

const Login = () => {
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    resolver: zodResolver(LoginSchema),
    mode: "all",
    shouldFocusError: true,
  });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:3000/u/login", {
        ...data,
      });

      const user = res.data.body.user;
      console.log(user);
      form.current?.reset();
      alert("Successfuly signed up");
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen gap-10 border border-black">
      <div className="flex flex-col gap-16 items-center justify-center w-full max-w-lg">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-4xl font-bold text-gray-700">Login Form</h2>
          <span className="text-sm text-muted-foreground">
            Login Your Account
          </span>
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full justify-center gap-5 px-10"
        >
          <FormInput
            {...register("email", { required: true })}
            id="email"
            label="Email"
            placeholder="Enter email address"
            errors={errors}
          />

          <FormInput
            {...register("password", { required: true })}
            id="password"
            label="Password"
            placeholder="Enter your password"
            errors={errors}
          />
          <FormButton
            disabled={Object.keys(errors).length > 0 ? true : false}
            type="submit"
            className="mt-3"
          >
            Submit
          </FormButton>
        </form>
        <Link to="/signup" className="text-blue-600 hover:underline">
          Create Your account
        </Link>
      </div>
    </section>
  );
};

export default Login;
