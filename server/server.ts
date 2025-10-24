configDotenv(); // to use .env variables
import { configDotenv } from "dotenv";
import express from "express";
import { authRouter } from "./src/routes/authRouter.ts";
import { errorHandler } from "./src/middlewares/errorHandler.ts";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/api/auth", authRouter);

app.use(errorHandler); //error handler

app.listen(process.env.PORT, () => {
  console.log(`Listenting on port: ${process.env.PORT}`);
});
