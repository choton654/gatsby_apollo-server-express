const Comment = require("../model/comment")
const Post = require("../model/post")

module.exports = {
  comment_post: async (req, res) => {
    const { body } = req.body
    const { postid } = req.params
    try {
      const post = await Post.findById(postid)
      if (post) {
        const newComment = await Comment.create({
          body,
          post_id: postid,
          user: req.user,
        })

        res.status(200).json(newComment)
      } else {
        return res.status(404).json({ msg: "Post not found" })
      }
    } catch (error) {
      console.error(error)
      res.status(400).json({ msg: error })
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
      const comment = await Comment.findOne({ user: req.user._id })
      if (comment) {
        await Comment.findByIdAndDelete(id)
        res.status(200).json({ msg: "Comment deleted" })
      } else {
        return res.status(400).json({ msg: "Unauthorized" })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ msg: error })
    }
  },
}
