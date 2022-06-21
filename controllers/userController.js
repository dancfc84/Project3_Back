import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'


async function register (req, res, next) {
  const body = req.body
  try {
    if (body.password != body.passwordConfirmation) {
      return res.status(422).json({
        message: "Passwords do not match",
        errors: {
          passwordConfirmation: "Passwords do not match",
        },
      })
    }
    const user = await User.create(body)
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}

async function login (req, res) {
  try {
    const user = await User.findOne({ email: req.body.email })

    const isValidPw = user.validatePassword(req.body.password)

    if (isValidPw) {
      const token = jwt.sign (
        { userId: user._id },
        secret,
        { expiresIn: '24h' }
      )

      res.json({
        message: "Login succesful!",
        token,
      })
    } else {
      res.status(400).json({ message: "Login failed!" })
    }
  } catch (err) {
    res.status(400).json({ message: "Login failed!" })
  }
}


export default {
  register,
  login,
}