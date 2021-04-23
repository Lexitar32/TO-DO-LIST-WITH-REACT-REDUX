import { combineReducers } from "redux";
import signupReducer from "./Auth/auth.reducer";
import { taskReducer } from "./Tasks/taskReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  registerUsers: signupReducer,
});

export default rootReducer;
