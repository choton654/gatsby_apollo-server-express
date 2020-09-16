const { sign } = require("jsonwebtoken")

const router = require("express").Router()
const { signup_post, login_post } = require("../controller/auth")

router.post("/api/signup", signup_post)
router.post("/api/login", login_post)

module.exports = router
