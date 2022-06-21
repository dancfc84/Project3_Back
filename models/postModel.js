import mongoose from 'mongoose'
import validator from 'validator';

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

const postSchema = new mongoose.Schema({

  content: { type: String, required: true },
  likes: { type: Number, required: true },
  tags: { type: [String], required: true },
  user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  userComments: [commentSchema],
}, {
  timestamps: true,
})

export default mongoose.model('Hotels', hotelsSchema)