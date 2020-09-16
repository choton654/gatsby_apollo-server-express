const mongoose = require("mongoose")
const { isEmail } = require("validator")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Enter an username"],
    maxlength: 20,
    minlength: [6, "Name must be 6 charecter long"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Enter an email"],
    validate: [isEmail, "Please enter valid email"],
  },
  password: {
    type: String,
    required: [true, "Enter a password"],
    minlength: [6, "Password must be 6 digit long"],
  },
})

const User = new mongoose.model("user", userSchema)

module.exports = User
