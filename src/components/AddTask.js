import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/allActions";
import { v1 as uuid } from "uuid";

const AddTask = () => {
  const [taskName, settaskName] = useState();

  const dispatch = useDispatch();

  return (
    <div>
      <input
        value={taskName}
        onChange={(e) => settaskName(e.target.value)}
        type="text"
        className="mt-3 add-task"
        placeholder="Add a new task"
      />
      <button
        className="btn btn-primary btn-add"
        onClick={() => {
          dispatch(
            addTask({
              id: uuid(),
              taskName: taskName,
            })
          );
          settaskName("");
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
