const express = require("express");
const app = express();

const server = app.listen(5000, () => {
  console.log(`app is running on port 5000`);
});
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", socket => {
  console.log(`socket is running`);
  socket.on("disconnect", () => {
    console.log(`socket is disconnected`);
  });
});
