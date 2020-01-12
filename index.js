const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
dotenv.config();
connectDB();
const app = express();
const authRouter = require("./auth/auth-router.js");
const messageRouter = require("./message/message-router.js");
const chatRouter = require("./chat/chat-routers");

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/chat", chatRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: process.env.MESSAGE || "deployed" });
});

const server = app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
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
