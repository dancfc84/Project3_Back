
import mongoose from 'mongoose'
import JobModel from '../models/jobModel.js'
import User from '../models/userModel.js'
import JobData from './data/jobData.js'
import { disconnectDB, connectToDB } from './helpers.js'

async function seed() {
  // ? Always starts with mongodb://mongodb://127.0.0.1:27017/
  // ? Then you give it the name of the db to connect to (you make this up.)
  await connectToDB()
  // await mongoose.connection.db.dropDatabase()
  const newUser = await User.findOne({ username: "" })
  JobData.forEach( post => {
    post.user = newUser
  })
  const jobs = await JobModel.create(JobData)
  await disconnectDB()
}
seed()