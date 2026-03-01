import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("connection succesfull");
  } catch (error) {
    if (error instanceof Error) {
      console.log("conection failed DB", error.message);
    } else {
      console.log("conection failed DB", error);
    }
  }
}

export { connectDB };
