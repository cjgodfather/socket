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
  chatId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Message", MessageSchema);
