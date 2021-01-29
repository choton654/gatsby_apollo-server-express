const router = require("express").Router()
const {
  signup_post,
  login_post,
  logout_get,
  auth_user,
} = require("../controller/auth")
const {
  post_post,
  post_get,
  post_delete,
  singlePost_get,
} = require("../controller/post")
const {
  comment_post,
  comment_get,
  comment_delete,
} = require("../controller/comment")

const authMiddleware = require("../middleware/authMiddleware")

router.post("/api/signup", signup_post)
router.post("/api/login", login_post)
router.get("/api/current", authMiddleware, auth_user)
router.get("/api/post/:id", singlePost_get)
router.get("/api/post", post_get)
router.post("/api/post", authMiddleware, post_post)
router.get("/api/comment", authMiddleware, comment_get)
router.post("/api/:postid/comment", authMiddleware, comment_post)
router.get("/api/logout", logout_get)
router.delete("/api/post/:id", authMiddleware, post_delete)
router.delete("/api/comment/:id", authMiddleware, comment_delete)

module.exports = router
