import { Request, Response } from "express";
import { UserModel } from "../../db";
import { compareHash, tokenGenerate } from "../../utils";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const loginUserQuery = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordTrue = compareHash(password, user.password);
  // console.log(isPasswordTrue);
  if (!isPasswordTrue) {
    throw new Error("Email or password is wrong");
  }

  const token = await tokenGenerate(user._id.toString());
  //   console.log(token);
  return { user, token };
};
