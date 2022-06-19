import postModel from "../models/postModel";



async function getPosts(req, res) {
  const allPosts = await postModel.find()
  res.status(200).json(allPosts)
  // console.log(req);
}

async function createPost(req, res) {
  const newPostToAdd = req.body
  // newPostToAdd.user = req.currentUser
  const createPost = await postModel.create(newPostToAdd)
  res.status(201).json(createPost)
}

export default {
  getPosts,
  createPost,
  // getHotelByID,
  // updateHotelbyID,
  // deleteHotelbyID,
  // getHotelbySearch,
}

