import { Request, Response } from "express";
import { confirmPassword, hashpassword } from "../utils/password";
import userModel from "../models/userModel";
import { generateToken } from "../utils/generateToken";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { password } = req.body;

    // Hash the password
    const hashedPassword = await hashpassword(password);

    req.body.password = hashedPassword;
    // Create the user object
    const user = await userModel.create({
      ...req.body,
    });

    // Convert the user to JSON and remove the password field
    const userResponse = user.toJSON();
    delete (userResponse as { password?: string }).password;

    // Send success response
    res.status(200).json({
      success: true,
      message: "User created successfully. ",
      userResponse,
    });
    return;
  } catch (error: unknown) {
    const typedError = error as Error;
    res.status(500).json({ success: false, message: typedError.message });
    return;
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "invalid user" });
      return;
    }
    const userData = await userModel.findOne({ email });
    if (!userData) {
      res.status(404).json({ message: "user not found" });
      return;
    }
    const userResponse = userData.toJSON();
    const checkPassword = await confirmPassword(
      password,
      userResponse.password
    );
    if (!checkPassword) {
      res.status(400).json({ success: false, message: "invalid credential" });
      return;
    }
    const { accessToken, refreshToken } = await generateToken(userData.id);
    res.status(200).json({
      success: true,
      message: "logged in succesfully",
      accessToken,
      refreshToken,
      userData,
    });
    return;
  } catch (error: unknown) {
    const typedError = error as Error;
    res.status(500).json({ success: false, message: typedError.message });
    return;
  }
};
