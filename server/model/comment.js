const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: [true, "Comment is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Must be signed in first"],
    },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: [true, "Must have a post "],
    },
  },
  { timestamps: true }
)

const Comment =
  mongoose.models.comment || mongoose.model("comment", commentSchema)

module.exports = Comment
