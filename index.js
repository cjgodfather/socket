const express = require("express");
const app = express();
const authRouter = require("./auth/auth-router.js");

app.use("/login", authRouter);

const server = app.listen(8000, () => {
  console.log(`app is running on port 8000`);
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
