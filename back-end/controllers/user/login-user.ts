import { Request, Response } from "express";
import { loginUserQuery } from "../../queries";

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const result = await loginUserQuery(req, res);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
