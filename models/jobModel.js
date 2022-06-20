import mongoose from "mongoose"

const jobSchema = new mongoose.schema({
  jobTitle: { type: String, required: true },
  jobShortSummary: { type: String, required: true },
  jobDescription: { type: String, required: true },
  jobSalary: { type: Number, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
})


export default jobSchema