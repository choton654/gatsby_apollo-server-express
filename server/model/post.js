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
      required: [true, "Must be written something"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Must be signed in first"],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

postSchema.virtual("comments", {
  ref: "comment",
  localField: "_id",
  foreignField: "post_id",
})
// postSchema.virtual("likes", {
//   ref: "like",
//   localField: "_id",
//   foreignField: "post_id",
// })

const Post = mongoose.models.post || mongoose.model("post", postSchema)
module.exports = Post
