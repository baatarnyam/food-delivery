import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const passwordHash = async (password: string) => {
  const salt = await bcrypt.genSaltSync(1);
  const hashedPassword = await bcrypt.hashSync(password, salt);
  return hashedPassword;
};

export const compareHash = async (password: string, hashedPassword: string) => {
  const isPasswordRight = await bcrypt.compareSync(password, hashedPassword);
  return isPasswordRight;
};

export const tokenGenerate = async (userId: string) => {
  const token = await jwt.sign({ userId }, "secter", { expiresIn: "1h" });
  return token;
};
