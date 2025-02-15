import { z } from "zod";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ButtonContext from "../../context/Context";

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(ButtonContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<signInValidationSchema>({
    resolver: zodResolver(signInValidationSchema),
    mode: "onChange",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: signInValidationSchema) => {
    console.log(data);
    try {
      setLoading(true);
      const requestedData = {
        email: data.email,
        password: data.password,
      };
      const response = await axiosInstance.post(`/auth/login`, requestedData);
      const { accessToken, refreshToken, userData } = response.data;
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          userId: userData._id,
          accesstoken: accessToken,
          refreshtoken: refreshToken,
        },
      });
      localStorage.setItem("access-token", accessToken);
      localStorage.setItem("refresh-token", refreshToken);
      console.log(response);
      navigate(`/?userId=${userData._id}`);
      toast.success("logged in successfully!");
      reset();
    } catch (error: unknown) {
      const typedError = error as Error;
      toast.error(typedError.message || "An error occurred");
    } finally {
      setLoading(false);
    }
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
          {loading ? "signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
