

import Job from "../models/jobModel.js"

async function createJob (req, res) {
  try {
    const newJob = req.body
    //newJob.user = req.currentUser
    const createdJob = await Job.create(newJob)
    console.log(createdJob);
  } catch (error) {
    res.json("Coud not create the job listing")
  }
}

async function getJobs (req, res) {
  try {
    const allJobs = await Job.find()
    console.log(allJobs);
    res.json(allJobs)
  } catch (error) {
    res.json("Cannot get jobs")
  }
}

async function showJob (req, res) {
  try {
    const jobId = req.params.jobId
    const job = await Job.findById(jobId)
    res.json(job)
  } catch (error) {
    console.log(error);
  }
}

export default {
  createJob,
  getJobs,
  showJob,
}