import { Model, model, Schema, models, now } from "mongoose";

export type FoodModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

const FoodSchema = new Schema<FoodModelType>(
  {
    name: { type: String, require: true },
    image: { type: String, require: true },
    ingredients: { type: String, require: true },
    price: { type: String, require: true },
  },
  { timestamps: true }
);

export const FoodModel: Model<FoodModelType> =
  models["Foods"] || model("Foods", FoodSchema);
