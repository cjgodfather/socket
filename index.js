const express = require("express");
const app = express();

app.use(express.static("public"));

const server = app.listen(5000, () => {
  console.log(`app is running on port 5000`);
});

const io = require("socket.io")(server);

io.on("connection", socket => {
  console.log(`socket is running`, socket.id);
  socket.on("chat", data => {
    io.sockets.emit("chat", data);
  });
  socket.on("disconnect", () => {
    console.log(`socket is disconnected`);
  });
});
