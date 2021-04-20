import React, { useState, useEffect } from "react";
import TaskListItem from "./TaskListItem";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const TaskList = () => {
  const tasks = useSelector((tasks) => tasks.tasks); // State gotten from redux
  const [filterTasks, setfilterTasks] = useState("");
  const [filterResult, setfilterResult] = useState([]);

  useEffect(() => {
    const myFilterResult = tasks.filter((filteredTask) =>
      filteredTask.taskName.toLowerCase().includes(filterTasks)
    );
    setfilterResult(myFilterResult);
  }, [tasks, filterTasks]);

  // Fetch USER Details
  const getUserDetails = (token) => {
    var decoded = jwt_decode(token);
    return decoded;
  };

  const printedUserDetails = getUserDetails(localStorage.getItem("token"));

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
      <div>
        <h2>Name of User: {printedUserDetails.username}</h2>
      </div>
      {filterResult.map((task) => {
        return <TaskListItem key={task.id} filterDisplay={task} />;
      })}
    </div>
  );
};

export default TaskList;
