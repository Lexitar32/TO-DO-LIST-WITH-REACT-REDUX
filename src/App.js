import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Landing from "../src/components/LandingPage";
import MainTasksContent from "./components/MainTasksContent";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login"

function App() {
  return (
    <div className="m-3">
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/mainTasks" component={MainTasksContent} />
      </Switch>
    </div>
  );
}

export default App;
