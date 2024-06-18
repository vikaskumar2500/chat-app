import { FormButton } from "@/components/form/form-button";
import { FormInput } from "@/components/form/form-input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const SignupSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.string().email({ message: "Invalid email address!" }),
  phone: z
    .string()
    .regex(/^(\+91|0)?\d{10}$/, "Invalid phone number, must be 10 digits"),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%*#?&])[A-Za-z\d@$#*].{7,}$/,
      "Invalid password, please enter the standard password!"
    ),
});

type FieldValues = z.infer<typeof SignupSchema>;

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    resolver: zodResolver(SignupSchema),
    mode: "all",
    shouldFocusError: true,
  });

  const onSubmit = async (data: FieldValues) => {
    const { phone } = data;
    const modifiedPhone =
      phone[0] === "0" ? phone.slice(1) : phone.replace("+91", "");

    try {
      const res = await axios.post("http://localhost:3000/u/signup", {
        ...data,
        phone: modifiedPhone,
      });
      const resData = res.data.body;
      if (res.status === 500) throw new Error(resData.message);

      console.log(res.data.body);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen gap-10 border border-black">
      <div className="flex flex-col gap-16 items-center justify-center w-full max-w-lg">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-4xl font-bold text-gray-700">Signup Form</h2>
          <span className="text-sm text-muted-foreground">
            Create Your Account
          </span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full justify-center gap-5 px-10"
        >
          <FormInput
            {...register("name", { required: true })}
            id="name"
            label="Name"
            placeholder="Enter your name"
            errors={errors}
          />
          <FormInput
            {...register("email", { required: true })}
            id="email"
            label="Email"
            placeholder="Enter email address"
            errors={errors}
          />
          <FormInput
            {...register("phone", { required: true })}
            id="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
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
            // disabled={Object.keys(errors).length > 0 ? true : false}
            type="submit"
            className="mt-3"
          >
            Submit
          </FormButton>
        </form>
      </div>
    </section>
  );
};

export default Signup;
