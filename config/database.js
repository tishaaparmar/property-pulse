import mongoose from "mongoose";

let connected = false

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("Already connected");
    return;
  }

  try {
    console.log("Connecting...");
    await mongoose.connect(process.env.MONGODB_URI);

    connected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error);
    throw error;
  }
};

export default connectDB;