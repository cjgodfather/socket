const router = require("express").Router();
const Chat = require("../models/Chat");

router.get("/", (req, res) => {
  Chat.find().then(c => res.status(200).json(c));
});

router.post("/", (req, res) => {
  const newChat = req.body;
  Chat.create(newChat).then(chat =>
    res.status(200).json(`${chat} created successfully`)
  );
});

module.exports = router;
