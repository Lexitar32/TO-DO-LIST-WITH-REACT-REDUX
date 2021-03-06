import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/Tasks/taskActions";
import { v1 as uuid } from "uuid"; // Random ID generator
import "../styles/main.css";

const AddTask = () => {
  const [taskName, settaskName] = useState();

  const dispatch = useDispatch();

  return (
    <div className="addTaskFlex">
      <input
        onChange={(e) => settaskName(e.target.value)}
        type="text"
        className="mt-3 add-task"
        placeholder="Add a new task"
        style={{ width: "50%" }}
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
