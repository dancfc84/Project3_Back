// // ? Applications routes will live in here.
// // ? Applications routes will live in here.
import express from "express"
import postController from "../controllers/postController.js"
import jobController from "../controllers/jobController.js"
import userController from "../controllers/userController.js"
// import authenticate from "../middleware/authenticate.js"
import commentController from "../controllers/commentController.js"

const router = express.Router()

router.route("/posts/")
  .get(postController.getPosts)
  .post(postController.createPost)
// (authenticate, //createPost

router.route("/posts/:postID")
  .get(postController.getPostByID)
  .delete(postController.removePost)
  .put(postController.editPost)
//   .put(authenticate, controller.updateHotelbyID)

router.route("/posts/:postID/comment")
  .post(commentController.commentOnPost)

router.route("/posts/:postID/comment/:commentID")
//   .put(authenticate, commentController.updateComment)
// .delete(commentController.removeComment)

// router.route("/posts/search/:searchQuery")
//   .get(controller.getHotelbySearch)

router.route("/jobs/")
  .get(jobController.getJobs)
  .post(jobController.createJob)

router.route("/jobs/:jobId")
  .get(jobController.showJob)
  .delete(jobController.deleteJob)

router.route("/jobs/edit/:jobId")
  .put(jobController.editJob)

router.route("/jobs/create")
  .post(jobController.createJob)

router.route("/jobs/:jobId/comment")
  .post(commentController.commentOnJob)


router.route("/register")
  .post(userController.register)

router.route("/login")
  .post(userController.login)

router.route("/profile")
  .get(userController.getUserData)
  .delete(userController.removeUserData)

// router.route("/posts/:postID/comment")
//   .post(authenticate, commentController.createComment)

export default router