import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    job_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
      index: true, // for querying applications per job
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    resume_link: {
      type: String,
      required: true,
    },
    cover_note: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

export const Application = mongoose.model("Application", ApplicationSchema);
