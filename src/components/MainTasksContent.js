// Component where all other components are rendered
import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "../styles/main.css";

const MainTasksContent = () => {
  return (
    <div className="main-content container text-center">
      <h3 className="mt-3" style={{ color: "white" }}>User Dashboard</h3>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default MainTasksContent;
