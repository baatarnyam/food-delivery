import { Request } from "express";
import { CategoryModel } from "../../db";

export const createCategoryQuery = async (req: Request) => {
  const { name, foodIds } = req.body;

  const result = await CategoryModel.create({
    name,
    foodId: [...foodIds],
  });

  return result._id;
};
