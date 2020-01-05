const router = require("express").Router();
const User = require("../models/User");

router.post("/register", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  User.create(newUser)
    .then(r => res.status(200).json(r))
    .catch(err => res.status(500).json(err));
});

router.get("/", (req, res) => {
  User.find().then(users => res.status(200).json(users));
});

module.exports = router;
