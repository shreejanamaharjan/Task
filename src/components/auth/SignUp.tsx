import { z } from "zod";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const signUpValidationSchema = z.object({
  username: z.string().min(3, { message: "Full name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type signUpValidationSchema = z.infer<typeof signUpValidationSchema>;

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<signUpValidationSchema>({
    resolver: zodResolver(signUpValidationSchema),
    mode: "onChange",
    defaultValues: { username: "", email: "", password: "" },
  });

  const onSubmit = async (data: signUpValidationSchema) => {
    console.log(data);
    try {
      setLoading(true);
      const requestedData = {
        username: data.username,
        email: data.email,
        password: data.password,
      };
      const response = await axiosInstance.post(
        "/auth/register",
        requestedData
      );
      console.log(response);
      toast.success("Account created successfully!");
      reset(); // Reset the form after successful submission
    } catch (error: unknown) {
      const typedError = error as Error;
      toast.error(typedError.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-3/4 flex flex-col items-center">
      <h2 className="text-gray-900 text-3xl mb-6">Create Account</h2>
      <form className="w-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Name"
          type="text"
          id="username"
          register={register}
          error={errors.username}
        />

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
          className="mt-4 px-6 py-2 rounded-full bg-gray-500 text-white text-lg uppercase self-center"
          disabled={loading}
        >
          {loading ? "signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
