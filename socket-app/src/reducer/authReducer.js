export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";

const initialState = {
  username: "",
  password: "",
  isLogging: false
};

export function reducer(state = initialState, action) {
  return state;
}
