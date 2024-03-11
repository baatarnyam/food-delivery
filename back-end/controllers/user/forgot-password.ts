import { Request, Response } from "express";
import { forgorPasswordQuery } from "../../queries";

export const forgotController = async (req: Request, res: Response) => {
  try {
    const result = forgorPasswordQuery(req, res);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
