// ! Controller just for comments.
import PostModel from '../models/postModel.js'
import JobModel from '../models/jobModel.js'
import UserModel from '../models/userModel.js'
import commentSchema from '../models/postModel.js'


async function commentOnPost(req, res) {
  try {
    const postID = req.params.postID
    // ! We also need to get the user/user ID for the user commenting.
    // const user = req.currentUser
    const comment = req.body

    const postData = await PostModel.findById(postID)

    // ! Handle it if no post is found
    if (!postData) {
      return res.json({ message: 'No such post has been found' })
    }
    // ! Push the new comment to the comments array
    // comment.user = user

    // ! Pushing our new comment to this post does
    // ! NOT update it in the database YET. 
    postData.userComments.push(comment)

    // ! So we need to save it to the database.
    const savedPost = await postData.save()
    // ! Sending back the comment
    res.json(savedPost)
  } catch (e) {
    console.log(e)
    res.json({ message: "There was a problem posting this comment." })
  }
}


async function commentOnJob(req, res) {
  try {

    const jobId = req.params.jobId
    const comment = req.body

    const job = await JobModel.findById(jobId)

    if (!job) {
      return res.json({ message: 'No such post has been found' })
    }
    // ! Push the new comment to the comments array
    // comment.user = user

    job.comments.push(comment)

    // ! So we need to save it to the database.
    const savedJobWithComment = await job.save()
    // ! Sending back the comment
    res.json(savedJobWithComment)
  } catch (e) {
    console.log(e)
    res.json({ message: "There was a problem posting this comment." })
  }
}

// async function removeComment(req, res) {
//   try {
//     const postID = req.params.postID
//     const commentID = req.params.commentID

//     // const user = req.currentUser
//     const postToHaveComment = await PostModel.findById(postID)


//     // if (!postToBeDeleted.user.equals(user._id)) {
//     //   return res.json({ message: 'Unauthorized' })
//     // }
//     if (!postToBeDeleted) return res.json({ message: "This post cannot be found" })

//     const deletePost = await PostModel.findByIdAndDelete(postID)
//     if (!deletePost) return res.json({ message: "The requested post does not exist and therefore cannot be deleted." })

//     res.status(204).json({ message: 'Delete successful.' })

//   } catch (e) {
//     res.status(422).json({ message: "This Post ID is in an invalid format." })
//   }
// }




export default {
  commentOnPost,
  commentOnJob,
}