import { Model, model, Schema, models, now } from "mongoose";

export type UserModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  password: string;
  isAdmin?: boolean;
};

const UserSchema = new Schema<UserModelType>(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false, require: false },
  },
  { timestamps: true }
);

export const UserModel: Model<UserModelType> =
  models["Users"] || model("Users", UserSchema);
