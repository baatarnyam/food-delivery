import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const passwordHash = (password: string) => {
  const salt = bcrypt.genSaltSync(1);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

export const compareHash = (password: string, hashedPassword: string) => {
  const isPasswordRight = bcrypt.compareSync(password, hashedPassword);
  return isPasswordRight;
};

export const tokenGenerate = async (userId: string) => {
  const token = await jwt.sign({ userId }, "secter", { expiresIn: "1h" });
  return token;
};
