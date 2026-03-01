import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
      index: true, // Useful for filtering jobs by category
    },
    location: {
      type: String,
      required: true,
      trim: true,
      index: true, // Useful for filtering jobs by category
    },
    category: {
      type: String,
      required: true,
      index: true, // Useful for filtering jobs by category
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Job = mongoose.model("Job", JobSchema);
