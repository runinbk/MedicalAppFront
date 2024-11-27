import {
  GET_ENFERMERO,
  GET_ENFERMEROS,
  POST_ENFERMERO,
  DELETE_ENFERMERO,
  ERROR_ENFERMERO,
  UPDATE_ENFERMERO,
} from "../actions/types";

const initialState = {
  enfermeros: [],
  enfermero: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ENFERMEROS:
      return {
        ...state,
        enfermeros: payload,
        loading: false,
      };

    case GET_ENFERMERO:
      return {
        ...state,
        enfermero: payload,
        loading: false,
      };

    case POST_ENFERMERO:
      return {
        ...state,
        loading: false,
      };

    case DELETE_ENFERMERO:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_ENFERMERO:
      return {
        ...state,
        loading: false,
      };

    case ERROR_ENFERMERO:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default: {
      return state;
    }
  }
}
