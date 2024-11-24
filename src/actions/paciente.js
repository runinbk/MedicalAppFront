import axios from "axios";

import {
  GET_PACIENTE,
  GET_PACIENTES,
  UPDATE_PACIENTE,
  POST_PACIENTE,
  ERROR_PACIENTE,
} from "./types";

export const getPacientes = () => async (dispatch) => {
  try {
    console.log("getting pacientes");
    dispatch({
      type: GET_PACIENTES,
    });
  } catch (error) {
    dispatch({
      type: ERROR_PACIENTE,
    });
  }
};

export const getPaciente = () => async (dispatch) => {
  try {
    console.log("getting one paciente");
    dispatch({
      type: GET_PACIENTE,
    });
  } catch (error) {
    dispatch({
      type: ERROR_PACIENTE,
    });
  }
};

export const updatePaciente = () => async (dispatch) => {
  try {
    console.log("updating paciente");
    dispatch({
      type: UPDATE_PACIENTE,
    });
  } catch (error) {
    dispatch({
      type: ERROR_PACIENTE,
    });
  }
};

export const postPaciente = () => async (dispatch) => {
  try {
    console.log("posting paciente");
    dispatch({
      type: POST_PACIENTE,
    });
  } catch (error) {
    dispatch({
      type: ERROR_PACIENTE,
    });
  }
};
