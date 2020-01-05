const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });
connectDB();
const app = express();
const authRouter = require("./auth/auth-router.js");

app.use("/login", authRouter);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
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

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`);
  server.close(() => process.exit(1));
});
