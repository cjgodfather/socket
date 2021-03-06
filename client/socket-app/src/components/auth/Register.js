import React, { useState } from "react";

const Register = props => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: ""
  });

  console.log(user);
  const inputChangeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const formSubmitHandler = e => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={inputChangeHandler}
        />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default Register;
