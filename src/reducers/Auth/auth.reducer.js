import { LOGOUT_USER, SIGNIN_USER, SIGNUP_USER, THROW_ERROR } from "../../actions/allTypes";

// Initial State
const registerUser = {
  users: [],
  loggedUser: [],
  error: null
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
    case THROW_ERROR:
      return {
        ...state,
        error: payload
      }
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
