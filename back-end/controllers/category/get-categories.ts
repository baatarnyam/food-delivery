import { Response, Request } from "express";
import { getCategoriesQuery } from "../../queries";

export const GetCategoriesController = async (res: Response, req: Request) => {
  try {
    const result = await getCategoriesQuery();
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
