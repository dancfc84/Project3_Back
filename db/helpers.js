//? A file with helper functions to interact with a real database, when we're ready to do that.


import mongoose from 'mongoose'
import { dbURL } from '../config/environment.js'

export async function connectToDB() {
  return mongoose.connect(dbURL)
}

export async function disconnectDB() {
  return mongoose.disconnect()
}