import mongoose from "mongoose"

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  jobShortSummary: { type: String, required: true },
  jobDescription: { type: String, required: true },
  jobSalary: { type: Number, required: true },
  jobLocation: { type: String, required: true },
  jobType: { type: String, required: true },
  companyName: { type: String, required: true },
  companyImage: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
})



export default mongoose.model('Job', jobSchema)

