const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  sender: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  },
  chatId: {
    type: mongoose.Schema.ObjectId,
    ref: "Chat",
    required: true
  }
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
