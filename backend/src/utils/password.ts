import { compare, genSalt, hash } from "bcrypt-ts";
export const hashpassword = async (password: string) => {
  const saltRounds = await genSalt(10);
  try {
    const hashedPassword = await hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error hashing password", error.message);
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred.");
  }
};

export const confirmPassword = async (password: string, hash: string) => {
  try {
    const comparedData = await compare(password, hash);
    return comparedData;
  } catch (error) {
    if (error instanceof Error) {
      console.error("password doesn't match", error.message);
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred.");
  }
};
