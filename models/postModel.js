import mongoose from 'mongoose'
import validator from 'validator';

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

const postSchema = new mongoose.Schema({

  title: { type: String, required: true },
  postContent: { type: String, minLength: 0, maxLength: 1000, required: false },
  tags: { type: [String], required: true },
  user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  userComments: [commentSchema],
})

postSchema.index({ '$**': 'text' }, { autoIndex: false });


export default mongoose.model('Hotels', postSchema)