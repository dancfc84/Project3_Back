// // ? Applications routes will live in here.
// // ? Applications routes will live in here.
import express from "express"
import postController from "../controllers/postController.js"
import jobController from "../controllers/jobController.js"
import userController from "../controllers/userController.js"
import commentController from "../controllers/commentController.js"
import secureRoute from "../middleware/secureRoute.js"

const router = express.Router()

router.route("/posts/")
  .get(postController.getPosts)
  .post(secureRoute, postController.createPost)
// (authenticate, //createPost

router.route("/posts/:postID")
  .get(postController.getPostByID)
  .delete(postController.removePost)
  .put(postController.editPost)

router.route("/posts/:postID/comment")
  .post(commentController.commentOnPost)

router.route("/posts/:postID/comment/:commentID")


router.route("/jobs/")
  .get(jobController.getJobs)
  .post(jobController.createJob)

router.route("/jobs/:jobId")
  .get(jobController.showJob)
  .delete(jobController.deleteJob)

router.route("/jobs/edit/:jobId")
  .put(jobController.editJob)

router.route("/jobs/create")
  .post(secureRoute, jobController.createJob)

router.route("/jobs/:jobId/:commentId")
  .delete(commentController.deleteJobComment)

router.route("/jobs/:jobId/:commentId/likes")
  .put(commentController.likeJobComment)

router.route("/jobs/:jobId/comment")
  .post(secureRoute, commentController.commentOnJob)

router.route("/register")
  .post(userController.register)

router.route("/login")
  .post(userController.login)

router.route("/profile")
  .get(userController.getUserData)
  .delete(userController.removeUserData)
  .put(userController.updateUserData)

router.route("/profile/:userID")
  .get(userController.getUserData)
  .delete(userController.removeUserData)
  .put(userController.updateUserData)

// router.route("/posts/:postID/comment")
//   .post(authenticate, commentController.createComment)

export default router