const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 50,
      required: [true, "Give a title"],
      unique: [true, "title must be unique"],
    },
    description: {
      type: String,
      maxlength: 100,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
    like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "like",
      },
    ],
  },
  { timestamps: true }
)

const Post = new mongoose.model("post", postSchema)
module.exports = Post
