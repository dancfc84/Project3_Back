// // ? Applications routes will live in here.
// // ? Applications routes will live in here.
import express from "express"
import postController from "../controllers/postController.js"
import jobController from "../controllers/jobController.js"
// import userController from "../controllers/controllerUser.js"
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
//   .put(authenticate, controller.updateHotelbyID)

router.route("/posts/:postID/comment")
  .post(commentController.commentOnPost)


// router.route("/posts/search/:searchQuery")
//   .get(controller.getHotelbySearch)

router.route("/jobs/")
  .get(jobController.getJobs)
  .post(jobController.createJob)

// router.route("/register")
//   .post(userController.register)

// router.route("/login")
//   .post(userController.login)
  
  
// router.route("/posts/:postID/comment")
//   .post(authenticate, commentController.createComment)

export default router