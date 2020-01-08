import React, { useState, useEffect } from "react";

const Login = props => {
  return (
    <form>
      <div>
        <label className="mr-sm-2">Username:</label>
        <input type="text" name="username" placeholder="username" />
      </div>
      <div>
        <label className="mr-sm-2">Password:</label>
        <input type="password" name="password" placeholder="password" />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default Login;
