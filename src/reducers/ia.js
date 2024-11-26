import { IA_ERROR, IA_RESULT, IA_START, IA_SUCCESS } from "../actions/types";

const initialState = {
  preddicion: "",
  currentImage: null,
  resultImage: null,
  loading: false,
  error: {},
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
        resultImage: payload.image,
        preddiccion: payload.prediccion,
        loading: false,
      };

    case IA_ERROR:
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
