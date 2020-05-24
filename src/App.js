import React from "react";
import Login from "./components/Login";
import Register from "./components/SignUp";
import ForgetEmail from "./components/ForgetEmail";
import Emails from "./components/Emails"
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={Login} />
          <Route path={"/register"} exact component={Register} />
          <Route path={"/forgot-email"} exact component={ForgetEmail} />
          <Route path={"/emails"} exact component={Emails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
