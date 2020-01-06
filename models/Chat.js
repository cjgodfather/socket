const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "chat"
  },
  participants: {
    type: [],
    required: true,
    unique: false
  }
});

module.exports = mongoose.model("Chat", ChatSchema);
