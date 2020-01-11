import axios from "axios";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

export const loginUser = user => {
  console.log(`user`, user);
  //   dispatch({ type: LOGIN_USER_START });
  //   axios
  //     .post(`https://socket-react.herokuapp.com/api/auth/login`, user)
  //     .then(res => dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data }));
  return {
    type: LOGIN_USER_SUCCESS
  };
};
