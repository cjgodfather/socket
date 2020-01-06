const router = require("express").Router();
const Message = require("../models/Message");

router.get("/", (req, res) => {
  Message.find()
    .then(messages => messages.map(msg => msg.message))
    .then(messages => res.status(200).json(messages));
});

router.post("/", (req, res) => {
  const newMessage = req.body;
  Message.create(newMessage).then(msg =>
    res.status(200).json(`${msg.message} sent successfully`)
  );
});

module.exports = router;
