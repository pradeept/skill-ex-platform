configDotenv(); // to use .env variables
import { configDotenv } from "dotenv";
import express from "express";
import { authRouter } from "./src/routes/authRouter.ts";
import { errorHandler } from "./src/middlewares/errorHandler.ts";

const app = express();
app.use(express.json());

// routes
app.use("/api/auth", authRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Listenting on port: ${process.env.PORT}`);
});
