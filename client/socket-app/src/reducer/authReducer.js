import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from "../action/actions";

const initialState = {
  user: {},
  isLogging: false,
  error: ""
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLogging: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLogging: false
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
