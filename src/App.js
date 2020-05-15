import React from "react";
import Login from "./components/Login";
import Register from "./components/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={Login} />
          <Route path={"/register"} exact component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
