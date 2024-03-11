import { Router } from "express";
import {
  createUserController,
  loginUserController,
  forgotController,
} from "../../controllers";

export const userRouter = Router();

userRouter.post("/signUp", createUserController);
userRouter.post("/login", loginUserController);
userRouter.post("/forgot", forgotController);
