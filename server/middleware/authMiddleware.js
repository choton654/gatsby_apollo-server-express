const jwt = require("jsonwebtoken")
const User = require("../model/user")

const authMiddleware = (req, res, next) => {
  const token = req.cookies?.jwt
  try {
    if (token) {
      jwt.verify(token, "it's a secret", async (err, decoded) => {
        if (err) {
          return res.status(400).json({ msg: err })
        } else {
          const user = await User.findOne({ _id: decoded.id })
          console.log(user)
          req.user = user
          next()
        }
      })
    } else {
      req.user = null
      return res.status(500).json({ msg: "unAuthenticated" })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ msg: error })
  }
}

module.exports = authMiddleware
