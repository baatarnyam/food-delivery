export { connectDb } from "./db";
import express from "express";
import cors from "cors";
import { connectDb } from "./db";
import { userRouter } from "./router";

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
connectDb();

app.use(userRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
