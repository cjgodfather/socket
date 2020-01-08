import React, { useState, useEffect } from "react";

const Register = props => {
  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" placeholder="username" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" placeholder="password" />
      </div>
      <div>
        <label>Password again:</label>
        <input
          type="password"
          name="password_again"
          placeholder="password_again"
        />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" placeholder="email" />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default Register;
