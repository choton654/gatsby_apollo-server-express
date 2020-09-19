const Comment = require("../model/comment")
const Post = require("../model/post")

const handleError = error => {
  let err = {}
  if (error._message === "comment validation failed") {
    Object.values(error.errors).forEach(({ properties: { path, message } }) => {
      err[path] = message
    })
  }
  console.log(err)
  return err
}

module.exports = {
  comment_post: async (req, res) => {
    const { body } = req.body
    const { postid } = req.params
    try {
      const post = await Post.findById(postid)
      if (post) {
        const newComment = await Comment.create({
          body: body.trim(),
          post_id: postid,
          user: req.user,
        })

        res.status(200).json(newComment)
      } else {
        return res.status(404).json({ msg: "Post not found" })
      }
    } catch (error) {
      console.error(error)
      const err = handleError(error)
      res.status(400).json(err)
    }
  },

  comment_get: async (req, res) => {
    try {
      const allComments = await Comment.find({})
      res.status(200).json(allComments)
    } catch (error) {
      res.status(404).json({ msg: error })
    }
  },

  comment_delete: async (req, res) => {
    const { id } = req.params
    try {
      const comment = await Comment.findById(id)

      if (comment.user.toString() !== req.user.id) {
        return res.status(400).json({ msg: "Unauthorized" })
      }
      comment.remove()
      res.status(200).json({ msg: "Comment deleted" })
    } catch (error) {
      console.error(error)
      res.status(500).json({ msg: error })
    }
  },
}
