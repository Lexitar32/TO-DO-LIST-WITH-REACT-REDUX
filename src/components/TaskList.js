import React, { useState, useEffect } from "react";
import TaskListItem from "./TaskListItem";
import { useSelector, useDispatch } from "react-redux";
import "../styles/main.css";
import jwt_decode from "jwt-decode";
import { logoutUser } from "../actions/Auth/auth.action";
import { useHistory } from "react-router";

const TaskList = () => {
  const tasks = useSelector((tasks) => tasks.tasks); // State gotten from redux
  const [filterTasks, setfilterTasks] = useState("");
  const [filterResult, setfilterResult] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

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

  const handleClick = () => {
    dispatch(logoutUser());



    history.push("/login");
  };

  const printedUserDetails = getUserDetails(localStorage.getItem("token"));

  return (
    <div className="task-list">
      <div className="container userData">
        <div className="name-data">
          <p>Name of User: {printedUserDetails.username}</p>
        </div>
        <div className="logout">
          <p className="btn btn-danger" onClick={handleClick}>
            Logout
          </p>
        </div>
      </div>
      <h4 className="py-3">Tasks</h4>
      <div className="filterFlex">
        <span>
          <input
            type="text"
            className="filter"
            value={filterTasks}
            onChange={(e) => setfilterTasks(e.target.value)}
            placeholder="Search from the list of tasks"
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
