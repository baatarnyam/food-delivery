import { Router } from "express";
import { createUserController, loginUserController } from "../../controllers";

export const userRouter = Router();

userRouter.post("/signUp", createUserController);
userRouter.post("/login", loginUserController);
