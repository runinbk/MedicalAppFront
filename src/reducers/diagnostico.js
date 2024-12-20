import {
  GET_DIAGNOSTICO,
  GET_DIAGNOSTICOS,
  POST_DIAGNOSTICO,
  DELETE_DIAGNOSTICO,
  ERROR_DIAGNOSTICO,
  UPDATE_DIAGNOSTICO,
  START_DIAGNOSTICO,
} from "../actions/types";

const initialState = {
  diagnosticos: [],
  diagnostico: null,
  currentImage: null,
  resultImage: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DIAGNOSTICOS:
      return {
        ...state,
        diagnosticos: payload,
        loading: false,
      };

    case GET_DIAGNOSTICO:
      return {
        ...state,
        diagnostico: payload,
        loading: false,
      };

    case START_DIAGNOSTICO:
      return {
        ...state,
        diagnostico: payload,
        loading: false,
      };

    case POST_DIAGNOSTICO:
      return {
        ...state,
        loading: false,
      };

    case DELETE_DIAGNOSTICO:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_DIAGNOSTICO:
      return {
        ...state,
        loading: false,
      };

    case ERROR_DIAGNOSTICO:
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
