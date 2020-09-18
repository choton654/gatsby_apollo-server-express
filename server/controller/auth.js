const bcrypt = require("bcrypt")
const User = require("../model/user")
const jwt = require("jsonwebtoken")
const { isLength } = require("validator")

const handleError = error => {
  let err = {}
  if (error._message === "user validation failed") {
    Object.values(error.errors).forEach(({ properties: { path, message } }) => {
      err[path] = message
    })
  }
  console.log(err)
  return err
}

const maxAge = 3 * 24 * 60 * 60
const createToken = id => {
  const token = jwt.sign({ id: id }, "it's a secret", { expiresIn: "1hr" })
  return token
}

module.exports = {
  signup_post: async (req, res) => {
    const { username, email, password } = req.body
    if (!isLength(password, { min: 6 })) {
      return res
        .status(400)
        .json({ password: "Password must be 6 charecter long" })
    }
    const salt = await bcrypt.genSalt()
    const newPassword = await bcrypt.hash(password, salt)
    try {
      const existingUser = await User.findOne({ email })
      if (existingUser) {
        return res.status(400).json({ email: "User already exists" })
      }

      const user = await User.create({ username, email, password: newPassword })
      const token = createToken(user._id)
      res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true })

      res.status(200).json(user)
    } catch (error) {
      // console.error(error.errors.email.message)
      const err = handleError(error)
      res.status(400).json(err)
    }
  },

  login_post: async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user) {
      const foundUser = await bcrypt.compare(password, user.password)
      if (foundUser) {
        const token = createToken(user._id)
        res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true })
        res.status(200).json(token)
      } else {
        return res.status(400).json({ error: "Password not match" })
      }
    } else {
      return res.status(400).json({ error: "User not found" })
    }
  },

  logout_get: (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 })
    res.json({ msg: "user logout" })
  },

  auth_user: async (req, res) => {
    try {
      // const users = await User.find({})
      res.status(200).json({
        id: req.user._id,
        email: req.user.email,
        username: req.user.username,
      })
    } catch (error) {
      console.error(error)
    }
  },
}
