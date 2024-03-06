export { connectDb } from "./db";
import express from "express";
import cors from "cors";
import { connectDb } from "./db";
import { userRouter } from "./router";

const app = express();
app.use(cors());
app.use(express.json());
connectDb();

app.use(userRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
