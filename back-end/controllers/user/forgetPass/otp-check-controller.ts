import { Request, Response } from "express";
import { otpCheckQuery } from "../../../queries";

export const codeCheckController = async (req: Request, res: Response) => {
  try {
    const user = await otpCheckQuery(req);
    res.send(user);
  } catch (error: any) {
    res.send(error.message);
  }
};
