import React, { useState, useEffect } from "react";
import TaskListItem from "./TaskListItem";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((tasks) => tasks);
  const [filterTasks, setfilterTasks] = useState("");
  const [filterResult, setfilterResult] = useState([]);

  useEffect(() => {
    const myFilterResult = tasks.filter((filteredTask) =>
      filteredTask.taskName.toLowerCase().includes(filterTasks)
    );
    setfilterResult(myFilterResult);
  }, [tasks, filterTasks]);

  return (
    <div className="task-list">
      <h4 className="py-3">Tasks</h4>
      <div>
        <span>
          <input
            type="text"
            className="filter"
            value={filterTasks}
            onChange={(e) => setfilterTasks(e.target.value)}
            placeholder="Filter Tasks"
          />
        </span>
        <span className="no">Number of Tasks: {tasks.length} </span>
      </div>
      {filterResult.map((task) => {
        return <TaskListItem key={task.id} filterDisplay={task} />;
      })}
    </div>
  );
};

export default TaskList;
