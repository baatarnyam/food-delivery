import { CategoryModel } from "../../db";
import { Request } from "express";

export const getCategoriesQuery = async (req: Request) => {
  const categories = await CategoryModel.find();

  const newCategories = categories.map((item) => {
    return { name: item.name, id: item._id };
  });

  console.log(newCategories);

  return newCategories;
};
