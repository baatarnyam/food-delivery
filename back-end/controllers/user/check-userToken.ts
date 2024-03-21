import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { tokenGenerate } from "../../utils";
import { checkToken } from "../../queries/user/token-check-query";

export const tokenCheckController = async (req: Request, res: Response) => {
  try {
    const result = checkToken(req, res);
    res.send(result);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
