import React from "react";

const AddTask = () => {
  return (
    <div>
      <input
        type="text"
        className="mt-3 add-task"
        placeholder="Add a new task"
      />
      <button className="btn btn-primary btn-add">Add Task</button>
    </div>
  );
};

export default AddTask;
