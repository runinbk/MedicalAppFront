import axios from "axios";

import { IA_DEFAULT, IA_ERROR, IA_RESULT, IA_START, IA_SUCCESS } from "./types";

export const iaLoading = (file) => (dispatch) => {
  const formData = new FormData();
  formData.append("image", file);

  dispatch({
    type: IA_START,
    payload: formData,
  });
};

export const iaDefault = () => async (dispatch) => {
  dispatch({
    type: IA_DEFAULT,
  });
};

export const iaAnalisis = (file) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("imagen", file);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(
      "https://ministerial-wini-davv-9825e092.koyeb.app/detectar2",
      formData,
      config
    );

    console.log(res.data);

    dispatch({
      type: IA_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.error("Error en iaAnalisis:", error);
    dispatch({
      type: IA_ERROR,
      payload: error.message,
    });
  }
};
