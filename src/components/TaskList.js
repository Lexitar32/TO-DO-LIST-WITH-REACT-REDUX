import React from "react";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
  return (
    <div className="task-list">
      <h4 className="py-3">Tasks</h4>
      <TaskListItem />
      <TaskListItem />
      <TaskListItem />
      <TaskListItem />
      <TaskListItem />
    </div>
  );
};

export default TaskList;
