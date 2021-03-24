import React from "react";

const TaskListItem = () => {
  return (
    <div>
      <div className="task-item container">
        <h5>
          I want to wash my clothesI want to wash my clothesI want to wash my
          clothes
        </h5>
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default TaskListItem;
