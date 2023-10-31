import { CLEAR_AUX, SEND_EMAIL } from "./Actions";

let initialState = {
  auxState: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_EMAIL: {
      return {
        ...state,
        auxState: action.payload,
      };
    }
    case CLEAR_AUX: {
      return {
        ...state,
        auxState: "",
      };
    }
    default:
      return {
        ...state,
      };
  }
}
