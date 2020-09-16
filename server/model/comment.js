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
    },
  },
  { timestamps: true }
)

const Comment = new mongoose.model("comment", commentSchema)

module.exports = Comment
