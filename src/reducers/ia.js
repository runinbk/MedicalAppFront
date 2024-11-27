import {
  IA_DEFAULT,
  IA_ERROR,
  IA_RESULT,
  IA_START,
  IA_SUCCESS,
} from "../actions/types";

const initialState = {
  diagnostico: "",
  currentImage: null,
  resultImage: null,
  loading: false,
  iaSuccess: false,
  error: null,
  paciente: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case IA_START:
      console.log("Guardando imagen en currentImage:", payload);
      return {
        ...state,
        currentImage: payload.get("image"),
        loading: true,
      };

    case IA_SUCCESS:
      return {
        ...state,
        resultImage: payload.imagen,
        diagnostico: payload.diagnostico,
        iaSuccess: true,
        loading: false,
      };

    case IA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case IA_DEFAULT:
      return {
        ...state,
        iaSuccess: false,
      };

    default: {
      return state;
    }
  }
}
