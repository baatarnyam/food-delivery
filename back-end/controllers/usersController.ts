import { Request, Response } from "express";

export const loginUserByService = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const signUpUserByService = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
