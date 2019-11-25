const socket = io();

const incomingMessage = document.querySelector(".incoming_message");

const name = document.querySelector("#name");
const message = document.querySelector("#message");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log(socket);
  socket.emit("chat", {
    message: message.value,
    name: name.value
  });
});

socket.on("chat", data => {
  incomingMessage.innerHTML +=
    `<p><strong>` + data.name + `</strong>:` + data.message + `</p>`;
});
