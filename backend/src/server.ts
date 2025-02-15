import express from "express";
import connectDB from "./config/db";
import { configDotenv } from "dotenv";
import errorHandler from "./middleware/errorHandler";
import cors from "cors";
import { router } from "./routes";

configDotenv();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorHandler);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server is running at port ${port}`);
  });
});
