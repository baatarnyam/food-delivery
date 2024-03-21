import { Response } from "express";
import { getCategoriesQuery } from "../../queries";

export const getCategoriesController = async (res: Response) => {
  try {
    const result = await getCategoriesQuery();
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
