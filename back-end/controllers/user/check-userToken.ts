import { Request, Response } from "express";
import { checkToken } from "../../queries/user/token-check-query";

export const tokenCheckController = async (req: Request, res: Response) => {
  try {
    const result = await checkToken(req, res);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
