import { Job } from "../models/Job.model.ts";
import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.ts";

//  List all jobs

const getAllJobs = asyncHandler(async (req, res) => {
  let limit = req.query.limit;

  if (!limit || limit == 0 || limit == "" || limit > 50) {
    limit = 50;
  } else {
    limit = Number(limit);
  }

  const jobs = await Job.find().sort({ createdAt: -1 }).limit(limit);
  res.status(200).json(jobs);
});

//  Get single job details

const getSingleJob = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id && id == "") {
    throw new Error("Id is required");
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Job ID" });
  }

  const job = await Job.findById(id);
  if (!job) {
    throw new Error("Job not found");
  }
  res.status(200).json(job);
});

//   Create job (Admin)

const createJob = asyncHandler(async (req, res) => {
  const { title, company, location, category, description } = req.body;
  if (
    [title, company, location, category, description].some(
      (key) => !key || key == "" || typeof key != "string",
    )
  ) {
    throw new Error("All fields are required");
  }

  const newJob = await Job.create({
    title,
    company,
    location,
    category,
    description,
  });
  res.status(200).json(newJob);
});

//  Delete job (Admin)

const deleteJob = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id && id == "") {
    throw new Error("Id is required");
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid Job ID");
  }

  const deleted = await Job.findByIdAndDelete(id);

  if (!deleted) {
    throw new Error(`could not delete job id no ${id}`);
  }
  res.status(200).json("job is deleted");
});

export { getAllJobs, getSingleJob, createJob, deleteJob };
