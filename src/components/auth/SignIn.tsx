import { z } from "zod";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const signInValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: "email is required" })
    .email("invalid email"),
  password: z
    .string()
    .min(6, { message: "password must be atleast 6 character" }),
});

type signInValidationSchema = z.infer<typeof signInValidationSchema>;

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInValidationSchema>({
    resolver: zodResolver(signInValidationSchema),
    mode: "onChange",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: signInValidationSchema) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2 className="text-gray-900 text-3xl mb-6">Login</h2>
      <form className="w-3/4 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Email"
          type="email"
          id="email"
          register={register}
          error={errors.email}
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          register={register}
          error={errors.password}
        />

        <button
          type="submit"
          className="self-center text-white text-lg uppercase px-6 py-2 bg-gray-500 rounded-full"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
