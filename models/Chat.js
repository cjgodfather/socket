const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "add a chat name"],
    default: "chat"
  },
  participants: {
    type: [mongoose.Schema.ObjectId],
    ref: "User",
    required: [true, "add chat participant"],
    unique: false
  }
});

module.exports = mongoose.model("Chat", ChatSchema);
