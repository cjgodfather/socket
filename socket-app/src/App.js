import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import "./App.css";

const socket = io(`http://localhost:5000/`);
function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [inMsg, setInMsg] = useState({ name: "", message: "" });

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
      setInMsg({ ...inMsg, name: data.name, message: data.message });
    });
  });
  return (
    <div className="App">
      <h1>Chatroom with React</h1>
      <div className="container">
        <div className="incoming_message">
          <div>{inMsg.name ? inMsg.name : null}</div>
          <div>{inMsg.message ? inMsg.message : null}</div>
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

export default App;
