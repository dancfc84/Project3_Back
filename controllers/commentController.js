// ! Controller just for comments.
import PostModel from '../models/postModel.js'
import JobModel from '../models/jobModel.js'
import UserModel from '../models/userModel.js'
import commentSchema from '../models/postModel.js'


async function commentOnPost(req, res) {
  try {
    const postID = req.params.postID
    // const user = req.currentUser
    const comment = req.body
    const postData = await PostModel.findById(postID)

    if (!postData) {
      return res.json({ message: 'No such post has been found' })
    }
    // ! Push the new comment to the comments array
    // comment.user = user

    postData.userComments.push(comment)

    const savedPostWComment = await postData.save()
    console.log(savedPostWComment);
    res.status(200).json(savedPostWComment)
  } catch (e) {
    console.log(e)
    res.json({ message: "There was a problem posting this comment." })
  }
}

async function commentOnJob(req, res) {
  try {
    console.log(`Trying to get user ${req.currentUser}`);
    const jobId = req.params.jobId
    const comment = req.body

    const job = await JobModel.findById(jobId)

    if (!job) {
      return res.json({ message: 'No such post has been found' })
    }
    // ! Push the new comment to the comments array
    comment.user = req.currentUser._id

    job.comments.push(comment)

    // ! So we need to save it to the database.
    const savedJobWithComment = await job.save()
    // ! Sending back the comment
    res.status(200).json(savedJobWithComment)
  } catch (e) {
    console.log(e)
    res.json({ message: "There was a problem posting this comment." })
  }
}

async function deleteJobComment(req, res) {
  console.log(req);
  const jobId = req.params.jobId
  const commentId = req.params.commentId
  const deletedComment = await JobModel.findByIdAndUpdate(
    jobId,
    {
      $pull: { comments: { _id: commentId } },
    },
    { new: true }
  );
  console.log(deletedComment);
}



export default {
  commentOnPost,
  commentOnJob,
  deleteJobComment,
}