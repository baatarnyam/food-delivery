import { Request, Response } from "express";
import { createFoodQuery } from "../../queries";
{
}

export const CreateFoodController = async (req: Request, res: Response) => {
  try {
    const result = await createFoodQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
