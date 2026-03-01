import e from "express";
import cors from "cors";
import dotenv from "dotenv";
import { jobRouter } from "./routes/jobsRoute.route.ts";
import { submitApplication } from "./controllers/application.controller.ts";
//imports
const app = e();
dotenv.config({ path: "./.env" });

app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/jobs", jobRouter);
app.post("/api/application", submitApplication);

export default app;
