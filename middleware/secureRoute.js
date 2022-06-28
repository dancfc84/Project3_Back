
import jwt from "jsonwebtoken"
import { secret } from "../config/environment.js"
import User from "../models/userModel.js"

export default function secureRoute(req, res, next) {

  const rawToken = req.headers.authorization

  if (!rawToken) {
    localStorage.getItem("token")
  }

  console.log(rawToken);

  if (!rawToken) {
    return res.status(401).json( { message: "Unauthorised 1" })
  }

  const token = rawToken.replace("Bearer ", "")

  //Verify token

  jwt.verify(token, secret, async (error, payload) => {
    if (error) {
      return res.status(401).json( { message: "unauthorised 2" } )
    }

    //getting the user from the token
    const user = await User.findById(payload.userId)

    if (!user) {
      return res.status(401).json({ message: "unauthorised 3" })
    }

    req.currentUser = user

    next()


  })


}