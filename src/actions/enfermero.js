import {
  GET_ENFERMERO,
  GET_ENFERMEROS,
  UPDATE_ENFERMERO,
  POST_ENFERMERO,
  DELETE_ENFERMERO,
  ERROR_ENFERMERO,
} from "./types";

export const getEnfermeros = () => async (dispatch) => {
  try {
    console.log("getting enfermeros");
    dispatch({
      type: GET_ENFERMEROS,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ENFERMERO,
    });
  }
};

export const getEnfermero = () => async (dispatch) => {
  try {
    console.log("getting one enfermero");
    dispatch({
      type: GET_ENFERMERO,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ENFERMERO,
    });
  }
};

export const updateEnfermero = () => async (dispatch) => {
  try {
    console.log("updating enfermero");
    dispatch({
      type: UPDATE_ENFERMERO,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ENFERMERO,
    });
  }
};

export const postEnfermero = () => async (dispatch) => {
  try {
    console.log("posting enfermero");
    dispatch({
      type: POST_ENFERMERO,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ENFERMERO,
    });
  }
};

export const deleteEnfermero = () => async (dispatch) => {
  try {
    console.log("deleting enfermero");
    dispatch({
      type: DELETE_ENFERMERO,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ENFERMERO,
    });
  }
};
