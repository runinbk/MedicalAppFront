import axios from "axios";

import {
  GET_DOCTOR,
  GET_DOCTORES,
  UPDATE_DOCTOR,
  POST_DOCTOR,
  DELETE_DOCTOR,
  ERROR_DOCTOR,
} from "./types";

export const getDoctores = () => async (dispatch) => {
  try {
    console.log("getting doctores");
    dispatch({
      type: GET_DOCTORES,
    });
  } catch (error) {
    dispatch({
      type: ERROR_DOCTOR, // Podrías crear un ERROR_DOCTOR si lo deseas
    });
  }
};

export const getDoctor = () => async (dispatch) => {
  try {
    console.log("getting one doctor");
    dispatch({
      type: GET_DOCTOR,
    });
  } catch (error) {
    dispatch({
      type: ERROR_DOCTOR,
    });
  }
};

export const updateDoctor = () => async (dispatch) => {
  try {
    console.log("updating doctor");
    dispatch({
      type: UPDATE_DOCTOR,
    });
  } catch (error) {
    dispatch({
      type: ERROR_DOCTOR,
    });
  }
};

export const postDoctor = () => async (dispatch) => {
  try {
    console.log("posting doctor");
    dispatch({
      type: POST_DOCTOR,
    });
  } catch (error) {
    dispatch({
      type: ERROR_DOCTOR,
    });
  }
};

export const deleteDoctor = () => async (dispatch) => {
  try {
    console.log("deleting doctor");
    dispatch({
      type: DELETE_DOCTOR,
    });
  } catch (error) {
    dispatch({
      type: ERROR_DOCTOR,
    });
  }
};
