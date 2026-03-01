import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getSingleJob,
} from "../controllers/job.controller.js";

const jobRouter = Router();
jobRouter.route("/").post(createJob);
jobRouter.route("/").get(getAllJobs);
jobRouter.route("/:id").get(getSingleJob);
jobRouter.route("/:id").delete(deleteJob);

export { jobRouter };
