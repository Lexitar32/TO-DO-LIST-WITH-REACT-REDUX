import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../actions/allActions";

const TaskListItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="task-item container">
        <span>{task.id.length > 1 ? task.id[0] : task.id}</span>
        <h5>{task.taskName}</h5>
        <button className="btn btn-primary">Edit</button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskListItem;
