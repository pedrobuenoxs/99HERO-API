import express from "express";
const app = express();
require("dotenv").config();
import mongoose from "mongoose";
import HeroRouter from "./routes/hero.route";
const DB_LOGIN = process.env.DB_LOGIN;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@dev-challenge.wwuxf6z.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log("Error while connecting database::", err);
  });
app.use("/api", HeroRouter);
app.use(express.json());
export default app;
