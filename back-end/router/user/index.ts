import { Router } from "express";
import { createUserController } from "../../controllers";

export const userRouter = Router();

userRouter.post("/signUp", createUserController);
