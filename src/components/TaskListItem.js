import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../actions/allActions";

const TaskListItem = ({ filterDisplay }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="task-item container">
        <span>
          {filterDisplay.id.length > 1 ? filterDisplay.id[0] : filterDisplay.id}
        </span>
        <h5>{filterDisplay.taskName}</h5>
        <button className="btn btn-primary">Edit</button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteTask(filterDisplay.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskListItem;
