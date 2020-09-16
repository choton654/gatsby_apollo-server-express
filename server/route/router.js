const { sign } = require("jsonwebtoken")

const router = require("express").Router()
const { signup_post, login_post, all_user } = require("../controller/auth")

router.post("/api/signup", signup_post)
router.post("/api/login", login_post)
router.get("/api/users", all_user)

module.exports = router
