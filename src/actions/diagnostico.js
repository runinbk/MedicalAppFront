import {
  GET_DIAGNOSTICO,
  GET_DIAGNOSTICOS,
  UPDATE_DIAGNOSTICO,
  POST_DIAGNOSTICO,
  DELETE_DIAGNOSTICO,
  ERROR_DIAGNOSTICO,
} from "./types";

export const getDiagnosticos = () => async (dispatch) => {
  try {
    console.log("getting diagnosticos");
    dispatch({
      type: GET_DIAGNOSTICOS,
    });
  } catch (error) {
    dispatch({
      type: ERROR_DIAGNOSTICO,
    });
  }
};

export const getDiagnostico = () => async (dispatch) => {
  try {
    console.log("getting one diagnostico");
    dispatch({
      type: GET_DIAGNOSTICO,
    });
  } catch (error) {
    dispatch({
      type: ERROR_DIAGNOSTICO,
    });
  }
};

export const updateDiagnostico = () => async (dispatch) => {
  try {
    console.log("updating diagnostico");
    dispatch({
      type: UPDATE_DIAGNOSTICO,
    });
  } catch (error) {
    dispatch({
      type: ERROR_DIAGNOSTICO,
    });
  }
};

export const postDiagnostico = () => async (dispatch) => {
  try {
    console.log("posting diagnostico");
    dispatch({
      type: POST_DIAGNOSTICO,
    });
  } catch (error) {
    dispatch({
      type: ERROR_DIAGNOSTICO,
    });
  }
};

export const deleteDiagnostico = () => async (dispatch) => {
  try {
    console.log("deleting diagnostico");
    dispatch({
      type: DELETE_DIAGNOSTICO,
    });
  } catch (error) {
    dispatch({
      type: ERROR_DIAGNOSTICO,
    });
  }
};
