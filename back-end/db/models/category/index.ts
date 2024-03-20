import { Model, model, Schema, models, now } from "mongoose";

export type CategoryModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  foodId: Schema.Types.ObjectId[];
};

const CategorySchema = new Schema<CategoryModelType>(
  {
    name: { type: String, require: true },
    foodId: { type: [Schema.Types.ObjectId], ref: "Foods", require: true },
  },
  { timestamps: true }
);

export const CategoryModel: Model<CategoryModelType> =
  models["Category"] || model("Category", CategorySchema);
