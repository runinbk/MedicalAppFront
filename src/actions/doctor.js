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
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
    };

    const res = await axios.get("http://localhost:3000/api/medicos", config);

    console.log(res.data);

    console.log(res);

    dispatch({
      type: GET_DOCTORES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_DOCTOR,
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

export const postDoctor = (formData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
    };

    const res = await axios.post(
      "http://localhost:3000/api/medicos",
      formData,
      config
    );

    dispatch({
      type: POST_DOCTOR,
      payload: res.data,
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