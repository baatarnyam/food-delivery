import { connect, set } from "mongoose";

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
