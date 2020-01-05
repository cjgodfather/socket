const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/register", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  User.create(newUser)
    .then(r => {
      const token = jwt.sign({ id: r._id }, process.env.JWT_KEY);
      return token;
    })
    .then(token => res.status(200).json(token))
    .catch(err => res.status(500).json(err));
});

router.get("/", (req, res) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
