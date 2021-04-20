import { combineReducers } from "redux";
import signupReducer from "./Auth/signup.reducer";
import { taskReducer } from "./Tasks/taskReducer";
import testReducer from "./Test/testReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  users: testReducer,
  registerUsers: signupReducer,
});

export default rootReducer;
