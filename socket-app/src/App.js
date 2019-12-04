import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Login from "./auth/Login";
import Chat from "./chat/chat";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
