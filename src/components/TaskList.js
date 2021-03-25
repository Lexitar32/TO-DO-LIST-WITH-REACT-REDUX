import React from "react";
import TaskListItem from "./TaskListItem";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state);

  return (
    <div className="task-list">
      <h4 className="py-3">Tasks</h4>
      {tasks.map((task) => {
        return <TaskListItem key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
