

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

async function editJob (req, res) {

  console.log(`This is the request body${req.body}`);

  if (typeof req.body.jobSalary === 'string') {
    req.body.jobSalary = Number(req.body.jobSalary)
  }
  try {
    const jobId = req.params.jobId
    const job = await Job.findByIdAndUpdate(jobId, { ...req.body })
  } catch (error) {
    console.log(error);
  }
}

async function deleteJob (req, res) {
  try {
    console.log("I made it to the job controller");
    const jobId = req.params.jobId
    const deletedJob = await Job.findByIdAndDelete(jobId)
    res.json(deletedJob)
    
  } catch (error) {
    console.log(error);
  }

}

export default {
  createJob,
  getJobs,
  showJob,
  editJob,
  deleteJob,
}