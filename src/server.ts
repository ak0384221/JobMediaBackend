import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import app from "./app.ts";
import { connectDB } from "./config/connectDB.ts";

//fail first method
const required = ["PORT", "MONGO_URI"];
for (let key of required) {
  console.log({ key: process.env[key] });
  if (!process.env[key]) {
    throw new Error(`env not found ${key}`);
  }
}

const PORT = process.env.PORT;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("App is running on port no", PORT);
    });
  })
  .catch((err) => {
    console.log("failed to run the app", err);
  });
