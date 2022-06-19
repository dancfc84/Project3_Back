// ? A file that will be used to 'seed' our database with initial data.

import mongoose from 'mongoose'
import PostModel from '../models/postModel.js'
import Users from '../models/userModel.js'
import PostsData from './data/postsData.js'
import { disconnectDB, connectToDB } from './helpers.js'

async function seed() {
  // ? Always starts with mongodb://mongodb://127.0.0.1:27017/
  // ? Then you give it the name of the db to connect to (you make this up.)
  await connectToDB()
  await mongoose.connection.db.dropDatabase()
  const newUser = await Users.findOne({ username: "Dumblevore" })
  PostsData.forEach( post => {
    post.user = newUser
  })
  const posts = await PostModel.create(PostsData)
  await disconnectDB()
}
seed()