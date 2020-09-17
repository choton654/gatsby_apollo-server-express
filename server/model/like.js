const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: [true, "Must have a post "],
    },
  },
  { timestamps: true }
)
const Like = mongoose.models.like || mongoose.model("like", likeSchema)

module.exports = Like
