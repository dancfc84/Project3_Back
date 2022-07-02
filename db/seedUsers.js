
// import mongoose from 'mongoose'
import User from '../models/userModel.js'
import { disconnectDB, connectToDB } from './helpers.js'
import userData from './data/userData.js'

async function seed() {
  await connectToDB()
  const users = await User.create(userData)
  console.log(users)
  await disconnectDB()
}
seed()
