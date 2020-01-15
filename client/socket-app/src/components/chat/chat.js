import React, { useState, useEffect } from "react";
import io from "socket.io-client";
const socket = io(`http://localhost:8000/`);

function Chat() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [inMsg, setInMsg] = useState([]);

  const clickHandler = e => {
    e.preventDefault();
    socket.emit("chat", {
      message,
      name
    });
    setName("");
    setMessage("");
  };

  useEffect(() => {
    socket.on("chat", data => {
      setInMsg([...inMsg, data]);
    });
  });

  return (
    <div className="App">
      <h1>Chatroom with React</h1>
      <div className="container">
        <div className="incoming_message">
          <ul className="message_list">
            {inMsg.map((msg, index) => {
              return (
                <div key={index}>
                  <p>from:{msg.name}</p>
                  <p>{msg.message}</p>
                </div>
              );
            })}
          </ul>
        </div>
        <input
          id="name"
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <input
          id="message"
          type="text"
          placeholder="message"
          name="message"
          value={message}
          onChange={e => {
            setMessage(e.target.value);
          }}
        />
        <button onClick={clickHandler} className="btn">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
