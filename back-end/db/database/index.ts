import { connect, set } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const CONNECTION_STRING: string =
  "mongodb+srv://bbaatarnya:Baagii1216@cluster0.6wqt1dp.mongodb.net/";

export const connectDb = async () => {
  try {
    set("strictQuery", false);
    await connect(CONNECTION_STRING),
      console.log("Successfully connected to Db");
  } catch (error) {
    console.log("Db connect is unsuccessfully ");
  }
};

// https://dribbble.com/shots/21767335-Babysitter-Nanny-Website-Landing-Page