import axios from "axios";
import { SIGN_UP } from "./types";
export const signUp = user => async dispatch => {
  try {
    const res = await axios.post("http://localhost:5000/api/users/", user);
    return dispatch({
      type: SIGN_UP,
      token: res.data.token
    });
  } catch (error) {
    console.log(error);
  }
};
