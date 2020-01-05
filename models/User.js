const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "your name"]
  },
  email: {
    type: String,
    required: [true, "your email"],
    unique: true
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

UserSchema.pre("save", async function() {
  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", UserSchema);
