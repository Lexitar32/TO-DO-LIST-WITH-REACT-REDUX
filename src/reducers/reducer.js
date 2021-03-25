import { tasks } from "../states";
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "../actions/type";

export let reducer = (state = tasks, action) => {
  switch (action.type) {
    case ADD_TASK:
      let newAddTask = [...state];
      newAddTask.push(action.payload);
      return newAddTask;
    case EDIT_TASK:
      break;
    case DELETE_TASK:
      let newTasks = [...state];
      newTasks = newTasks.filter((newTask) => newTask.id !== action.payload);
      return newTasks;
    default:
      return state;
  }
};
