const router = require("express").Router();
const Message = require("../models/Message");

router.get("/", (req, res) => {
  Message.find()
    .then(messages => messages.map(msg => msg.message))
    .then(messages => res.status(200).json(messages));
});

router.get("/:chatId", (req, res) => {
  const chatId = req.params.chatId;
  console.log(chatId);
  Message.find({ chatId })
    .then(m => res.status(200).json(m))
    .catch(err => console.log(err));
});

router.post("/", (req, res) => {
  const newMessage = req.body;

  Message.create(newMessage)
    .then(msg => console.log(msg))
    .catch(err => console.log(err.message));
});

router.delete("/:msgId", (req, res) => {
  const msgId = req.params.msgId;
  Message.remove({ msgId }).then(m => res.status(200).json(m));
});

module.exports = router;
