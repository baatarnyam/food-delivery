import { Router } from "express";
import {
  CreateCategoryController,
  getCategoriesController,
  GetCategoryController,
} from "../../controllers";

export const CategoryRouter = Router();

CategoryRouter.post("/category", CreateCategoryController);
CategoryRouter.get("/category", GetCategoryController);
CategoryRouter.get("/categories", getCategoriesController);
