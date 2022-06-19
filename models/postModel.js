import mongoose from 'mongoose'
// import validator from 'validator';

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

const postSchema = new mongoose.Schema({

  postContent: { type: String, minLength: 0, maxLength: 1000, required: false },
  tags: { type: [String], required: false },
  user: { type: mongoose.Schema.ObjectId, ref: "User", required: false },
  userComments: [commentSchema],
})

postSchema.index({ '$**': 'text' }, { autoIndex: false });


export default mongoose.model('Posts', postSchema)