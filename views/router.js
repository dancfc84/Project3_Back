// // ? Applications routes will live in here.

// // ? Applications routes will live in here.
// import express from "express"
// import controller from "../controllers/controller.js"
// import userController from "../controllers/controllerUser.js"
// import authenticate from "../middleware/authenticate.js"
// import commentController from "../controllers/commentController.js"

// const router = express.Router()

// router.route("/posts/")
//   .get(controller.getHotels)
//   .post(authenticate, controller.createHotel)

// router.route("/posts/:postID")
//   .get(controller.getHotelByID)
//   .put(authenticate, controller.updateHotelbyID)
//   .delete(authenticate, controller.deleteHotelbyID)

// router.route("/posts/search/:searchQuery")
//   .get(controller.getHotelbySearch)

// router.route("/register")
//   .post(userController.register)

// router.route("/login")
//   .post(userController.login)
  
  
// router.route("/posts/:postID/comment")
//   .post(authenticate, commentController.createComment)
// export default router