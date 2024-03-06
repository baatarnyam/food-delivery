import { Request, Response } from "express";
import { createUserQuery } from "../../queries/user/create-user-query";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserQuery(req);
    res.send({ message: "Success", user });
  } catch (error: any) {
    res.send(error.message);
  }
};
