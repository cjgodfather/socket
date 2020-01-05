const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "your name"]
  },
  email: {
    type: String,
    required: [true, "your email"],
    unique: true,
    match: [`/^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/`]
  },
  password: {
    type: String,
    required: [true, "your password"],
    minlength: 6,
    select: false
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", UserSchema);
