import { Router } from "express";
import { getSingleUser } from "../controllers/userController";

export const userRouter = Router();
userRouter.get("/:id", getSingleUser);
