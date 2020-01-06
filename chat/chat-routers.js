const router = require("express").Router();
const Chat = require("../models/Chat");

router.get("/", (req, res) => {
  res.json(`this is chat`);
});

router.post("/", (req, res) => {
  const newChat = req.body;
  Chat.create(newChat).then(chat =>
    res.status(200).json(`${chat} created successfully`)
  );
});

module.exports = router;
