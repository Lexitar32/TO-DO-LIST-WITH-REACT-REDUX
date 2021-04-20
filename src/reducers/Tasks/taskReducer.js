// import { tasks } from "../states";
import { ADD_TASK, DELETE_TASK } from "../../actions/allTypes";

const tasks = [];

export let taskReducer = (state = tasks, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      let newAddTask = [...state];
      newAddTask.push(payload);
      return newAddTask;
    case DELETE_TASK:
      let newTasks = [...state];
      newTasks = newTasks.filter((newTask) => newTask.id !== payload);
      return newTasks;
    default:
      return state;
  }
};
