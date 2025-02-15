import { Request, Response } from "express";
import userModel from "../models/userModel";

export const getSingleUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const userData = await userModel.findById(id).select("-password");
    if (!userData) {
      res.status(404).json({ success: false, message: "user not found" });
      return;
    }
    res.status(200).json({ success: true, userData });
    return;
  } catch (error) {
    const typedError = error as Error;
    res.status(500).json({ success: false, message: typedError.message });
    return;
  }
};
