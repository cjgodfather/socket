import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../action/actions";

const Login = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const changeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    props.loginUser(user);
  };

  console.log(user);
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label className="mr-sm-2">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={user.email}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label className="mr-sm-2">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={changeHandler}
        />
      </div>

      <button>Submit</button>
    </form>
  );
};

// const mapStateToProps = state => {
//   return state;
// };

export default connect(null, { loginUser })(Login);
