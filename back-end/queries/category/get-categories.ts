import { CategoryModel } from "../../db";

export const getCategoriesQuery = async () => {
  const categories = await CategoryModel.find();

  const newCategories = categories.map(({ name, _id }) => {
    return { name, id: _id };
  });

  return newCategories;
};
