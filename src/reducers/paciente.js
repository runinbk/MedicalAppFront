// pacienteReducer.js
import {
  GET_PACIENTE,
  GET_PACIENTES,
  POST_PACIENTE,
  DELETE_PACIENTE,
  ERROR_PACIENTE,
  UPDATE_PACIENTE,
  DEFAULT_PACIENTE,
  SELECT_PACIENTE,
} from "../actions/types";

const initialState = {
  pacientes: [],
  paciente: null,
  loading: false,
  creationSuccess: false,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PACIENTES:
      return {
        ...state,
        pacientes: payload,
        loading: false,
      };

    case SELECT_PACIENTE:
      return {
        ...state,
        paciente: payload,
      };

    case GET_PACIENTE:
      return {
        ...state,
        paciente: payload,
        loading: false,
      };

    case DEFAULT_PACIENTE:
      return {
        ...state,
        loading: false,
        creationSuccess: false,
      };

    case POST_PACIENTE:
      return {
        ...state,
        pacientes: [payload, ...state.pacientes],
        creationSuccess: true,
        loading: false,
      };

    case DELETE_PACIENTE:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_PACIENTE:
      return {
        ...state,
        loading: false,
      };

    case ERROR_PACIENTE:
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
