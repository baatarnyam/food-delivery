import { connect, set } from "mongoose";
import dotenv from "dotenv";
import express, { type Application } from "express";

dotenv.config();

const app: Application = express();

const connectionString = process.env.CONNECTION_STRING;

const CONNECTION_STRING: string =
  "mongodb+srv://bbaatarnya:Baagii1216@cluster0.6wqt1dp.mongodb.net/";

export const connectDb = async () => {
  set("strictQuery", false);
  try {
    await connect(CONNECTION_STRING),
      console.log("Successfully connected to Db");
  } catch (error) {
    console.log("Db connect is unsuccessfully ");
  }
};
