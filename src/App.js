import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
