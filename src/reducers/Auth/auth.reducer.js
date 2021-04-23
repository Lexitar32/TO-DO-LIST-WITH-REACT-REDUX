import { LOGOUT_USER, SIGNIN_USER, SIGNUP_USER } from "../../actions/allTypes";

// Initial State
const registerUser = {
  users: [],
  loggedUser: [],
};

const signupReducer = (state = registerUser, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case SIGNIN_USER:
      return {
        ...state,
        loggedUser: [...state.loggedUser, payload],
      };
    case LOGOUT_USER:
      return {
        ...state,
        loggedUser: [],
      };
    default:
      return state;
  }
};

export default signupReducer;
