const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("this is login");
});

module.exports = router;
