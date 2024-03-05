import express from "express";
import { loginUserByService } from "../controllers/usersController";
import { signUpUserByService } from "../controllers/usersController";

const userRouter = express.Router();

userRouter.post("/login", loginUserByService);
userRouter.post("/signUp", signUpUserByService);

export default userRouter;
