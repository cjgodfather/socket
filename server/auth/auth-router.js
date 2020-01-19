const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/register", (req, res) => {
  const newUser = req.body;

  User.create(newUser)
    .then(user => {
      console.log(user);
      const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
      return { ...user._doc, token };
    })
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json(err));
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .select("+password")
    .then(user => {
      if (bcrypt.compare(user.password, password)) {
        res.status(200).json({ message: "successfully login", user });
      }
    });
});

router.get("/", (req, res) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/search", async (req, res) => {
  const { name } = req.body;

  try {
    const result = await User.findOne({ name }).exec();
    if (result === null) {
      res.status(500).json({ message: "user not exist" });
    } else {
      res.status(200).json(result);
    }

    console.log(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
