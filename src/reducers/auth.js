import {
  AUTH_ERROR,
  LOG_OUT,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  USER_LOADED,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: false,
  user: null,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };

    case AUTH_ERROR:
    case LOGIN_FAILED:
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: type === LOGIN_FAILED ? payload : null,
      };

    default:
      return state;
  }
}
