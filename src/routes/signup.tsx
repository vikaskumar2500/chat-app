import { FormButton } from "@/components/form/form-button";
import { FormInput } from "@/components/form/form-input";

const Signup = () => {
  return (
    <section className="flex items-center justify-center min-h-screen gap-10 border border-black">
      <div className="flex flex-col gap-16 items-center justify-center w-full max-w-lg">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-4xl font-bold text-gray-700">Signup Form</h2>
          <span className="text-sm text-muted-foreground">Create Your Account</span>
        </div>
        <form
          onSubmit={() => {}}
          className="flex flex-col items-center w-full justify-center gap-5 px-10"
        >
          <FormInput label="Name" placeholder="Enter your name" />
          <FormInput label="Email" placeholder="Enter email address" />
          <FormInput
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <FormInput label="Password" placeholder="Enter your password" />
          <FormButton className="mt-3">Submit</FormButton>
        </form>
      </div>
    </section>
  );
};

export default Signup;
