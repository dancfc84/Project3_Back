
import mongoose from 'mongoose'
import User from '../models/userModel.js'
import { disconnectDB, connectToDB } from './helpers.js'
import userData from './data/userData.js'

async function seed() {
  // ? Always starts with mongodb://mongodb://127.0.0.1:27017/
  // ? Then you give it the name of the db to connect to (you make this up.)
  await connectToDB()
  // await mongoose.connection.db.dropDatabase()
  const users = await User.create(userData)

  console.log(users)

  await disconnectDB()
}
seed()
