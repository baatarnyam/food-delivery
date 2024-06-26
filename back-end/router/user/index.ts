import { Router } from "express";
import {
  createUserController,
  loginUserController,
  forgotController,
  tokenCheckController,
  codeCheckController,
} from "../../controllers";
import { createUserMiddleWare, loginUserMiddleWare } from "../../middleWare";

export const userRouter = Router();

userRouter.post("/signUp", createUserMiddleWare, createUserController);
userRouter.post("/login", loginUserMiddleWare, loginUserController);

userRouter.post("/forgot", forgotController);
userRouter.post("/otpCheck", codeCheckController);

userRouter.post("/tokenCheck", tokenCheckController);
