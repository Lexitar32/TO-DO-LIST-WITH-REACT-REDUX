import { FETCH_USERS } from "../../actions/allTypes";

const initialstate = {
  user: null,
};

const testReducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};

export default testReducer;
