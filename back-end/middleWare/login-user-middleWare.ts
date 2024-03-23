import { Request, Response, NextFunction } from "express";
import { UserModel } from "../db";

// const getUserByEmail = async (email: string) => {
//   const user = await UserModel.findOne({ email: email });
//   return user;
// };

export const loginUserMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Please fill missing fiedls");
    }

    // const user = await getUserByEmail(email);
    // if (user) {
    //   throw new Error("User already existed");
    // }
    next();
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
