import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { UserModel } from "../../db";

const getUserById = async (id: string) => {
  const user = await UserModel.findOne({ _id: id });
  return user;
};

export const checkToken = async (req: Request, res: Response) => {
  const token: any = req.headers.authorization?.split(" ")[1];
  //   console.log(token, "query token");

  try {
    if (!token) {
      throw new Error("token not found");
    }

    const data: any = jwt.decode(token);
    // console.log(data, "decode token");

    const user = await getUserById(data.userId);

    const tokenVerify = jwt.verify(
      token,
      process.env.JWT_SECRET || "defaultSecret"
    );
    if (!tokenVerify) {
      throw new Error("Token is invalid");
    } else {
      return { tokenVerify, user };
    }
  } catch (err: any) {
    throw new Error(err.message);
  }
};
