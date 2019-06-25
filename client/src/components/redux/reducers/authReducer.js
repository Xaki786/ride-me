import { SIGN_UP } from "../actions/types";
const intitialState = {
  isAuthenticated: false,
  token: ""
};
export default (state = intitialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      console.log(action.token);
      return {
        ...state,
        isAuthenticated: true,
        token: action.token
      };

    default:
      return state;
  }
};
