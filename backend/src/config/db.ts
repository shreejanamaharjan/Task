import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      console.error("mongodb connection url is missing");
      process.exit(1);
    }
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error connecting mongodb", error);
    process.exit(1);
  }
};

export default connectDB;
