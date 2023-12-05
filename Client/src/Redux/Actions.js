import axios from "axios";

export const SEND_EMAIL = "SEND_EMAIL";
export const CLEAR_AUX = "CLEAR_AUX";

export function sendEmail(subject, name, lastName, email, message) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/portaldistribuidora/email", {
        subject,
        name,
        lastName,
        email,
        message,
      });
      return dispatch({
        type: SEND_EMAIL,
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
}

export function clearAux() {
  //para limpiar AuxState al desmontar el detail
  return {
    type: CLEAR_AUX,
  };
}
