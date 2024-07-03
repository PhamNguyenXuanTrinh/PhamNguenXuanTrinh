import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MongoDb as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

export default connectDb;
