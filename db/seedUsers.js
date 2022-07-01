// ? A file that will be used to 'seed' our database with initial data.

import mongoose from 'mongoose'
import User from '../models/userModel.js'
import { disconnectDB, connectToDB } from './helpers.js'
import userData from './data/userData.js'

async function seedUsers() {
  await connectToDB()

  console.log('Connected to the database! 🌱')

  const users = await User.create(userData)

  await disconnectDB()
  
  console.log('Goodbye 🌱')
}
seedUsers()