import { Request } from "express";
import { UserModel } from "../../../db";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const otpCheckQuery = async (req: Request) => {
  const { email, OTP } = req.body;
  const user1 = await getUserByEmail(email);

  console.log(user1, "user sda");

  if (!user1) {
    throw new Error("Хэрэглэгч олдсонгүй!");
  }

  if (user1 === OTP) {
    return "Нууц үг зөв байна";
  } else {
    throw new Error("Нууц үг буруу байна");
  }
};
