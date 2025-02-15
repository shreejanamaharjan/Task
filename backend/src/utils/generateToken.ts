import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config(); // Properly configure dotenv

// Function to generate access and refresh tokens
export const generateToken = (payload: string) => {
  try {
    const secretKey = process.env.SECRET_KEY;
    const refreshSecretKey = process.env.REFRESH_SECRET_KEY;

    if (!secretKey || !refreshSecretKey) {
      throw new Error("SECRET_KEY or REFRESH_SECRET_KEY is not defined.");
    }

    const accessToken = jwt.sign({ payload }, secretKey, { expiresIn: "5m" });
    const refreshToken = jwt.sign({ payload }, refreshSecretKey, {
      expiresIn: "1d",
    });

    return { accessToken, refreshToken };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error generating token:", error.message);
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred.");
  }
};

// Function to decode access token
export const decodeAccessToken = (token: string) => {
  try {
    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
      throw new Error("SECRET_KEY is not defined.");
    }
    return jwt.verify(token, secretKey);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error decoding access token:", error.message);
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred.");
  }
};

// Function to decode refresh token
export const decodeRefreshToken = (token: string) => {
  try {
    const refreshSecretKey = process.env.REFRESH_SECRET_KEY;
    if (!refreshSecretKey) {
      throw new Error("REFRESH_SECRET_KEY is not defined.");
    }
    return jwt.verify(token, refreshSecretKey);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error decoding refresh token:", error.message);
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred.");
  }
};

// Function to generate a new access token
export const generateAccessToken = (payload: string) => {
  try {
    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
      throw new Error("SECRET_KEY is not defined.");
    }
    return jwt.sign({ payload }, secretKey, { expiresIn: "5m" });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error generating access token:", error.message);
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred.");
  }
};
