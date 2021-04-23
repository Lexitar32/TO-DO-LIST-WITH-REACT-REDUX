import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import MainTasksContent from "./components/MainTasksContent";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";

function App() {
  return (
    <div className="m-3">
      <Switch>
        <Route path="/" component={Signup} exact />
        <Route path="/login" component={Login} />

        <Route path="/mainTasks" component={MainTasksContent} />
      </Switch>
    </div>
  );
}

export default App;
