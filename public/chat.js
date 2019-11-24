const socket = io();

const incomingMessage = document.querySelector(".incoming_message");

const handle = document.querySelector("#handle");
const message = document.querySelector("#message");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log(socket);
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

socket.on("chat", data => {
  incomingMessage.innerHTML +=
    `<p><strong>` + data.handle + `</strong>:` + data.message + `</p>`;
});
