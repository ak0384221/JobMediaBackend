import { asyncHandler } from "../utils/asyncHandler.ts";
import { Application } from "../models/Application.model.ts";
import { Job } from "../models/Job.model.ts";
import mongoose from "mongoose";

//  Submit job application

const submitApplication = asyncHandler(async (req, res) => {
  const { job_id, name, email, resume_link, cover_note } = req.body;
  if (
    [job_id, name, email, resume_link, cover_note].some(
      (key) => !key || key == "" || typeof key != "string",
    )
  ) {
    throw new Error("All fields are required");
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }

  if (
    !resume_link.startsWith("http://") &&
    !resume_link.startsWith("https://")
  ) {
    throw new Error("Corrupted resume link");
  }

  if (!mongoose.Types.ObjectId.isValid(job_id)) {
    throw new Error("Invalid Job ID");
  }

  // Ensure job exists
  const jobExists = await Job.findById(job_id);
  if (!jobExists) {
    throw new Error("Job not found");
  }

  const application = await Application.create({
    job_id,
    name,
    email,
    resume_link,
    cover_note,
  });

  res.status(201).json({
    message: "Application submitted successfully",
    application,
  });
});

export { submitApplication };
