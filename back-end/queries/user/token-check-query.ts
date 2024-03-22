import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { UserModel } from "../../db";

const getUserById = async (id: string) => {
  const user = await UserModel.findOne({ _id: id });
  return user;
};

export const checkToken = async (req: Request, res: Response) => {
  const token: any = req.headers.authorization?.split(" ")[1];

  try {
    if (!token) {
      throw new Error("token not found");
    }

    const data: any = jwt.decode(token);

    const user = await getUserById(data?.userId);

    const tokenVerify = jwt.verify(
      token,
      process.env.JWT_SECRET || "defaultSecret"
    );
    return { tokenVerify, user };
  } catch (err: any) {
    throw new Error(err.message);
  }
};
