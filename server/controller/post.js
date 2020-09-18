const Post = require("../model/post")

const handleError = error => {
  let err = {}
  if (error._message === "post validation failed") {
    Object.values(error.errors).forEach(({ properties: { path, message } }) => {
      err[path] = message
    })
  }
  console.log(err)
  return err
}

module.exports = {
  post_post: async (req, res) => {
    const { title, description } = req.body
    try {
      const newPost = await Post.create({
        title: title.trim(),
        description: description.trim(),
        user: req.user,
      })
      res.status(200).json(newPost)
    } catch (error) {
      console.error(error.errors)
      const err = handleError(error)
      res.status(400).json(err)
    }
  },

  singlePost_get: async (req, res) => {
    const { id } = req.params
    try {
      const post = await Post.findOne({ _id: id })
        .populate({
          path: "user",
          model: "user",
          select: "_id email",
        })
        .populate("comments")
        .populate("likes")

      res.status(200).json(post)
    } catch (error) {
      res.status(400).json({ msg: error })
    }
  },

  post_get: async (req, res) => {
    try {
      const allPost = await Post.find()
        .populate({
          path: "user",
          model: "user",
          select: "_id email",
        })
        .populate("comments")
        .populate("likes")

      res.status(200).json(allPost)
    } catch (error) {
      res.status(400).json({ msg: error })
    }
  },

  post_delete: async (req, res) => {
    const { id } = req.params
    try {
      const post = await Post.findOne({ user: req.user._id })
      if (post) {
        await Post.findByIdAndDelete(id)
        res.status(200).json({ msg: "Post deleted" })
      } else {
        return res.status(400).json({ msg: "Unauthorize" })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ msg: error })
    }
  },
}
