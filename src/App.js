import React from "react";
import Home from "./components/home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./404";

function App(props) {
  const month = new Date().getMonth() + 1;
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Redirect to={"/" + new Date().getFullYear() + "/" + month} />
            )}
          />
          <Route path="/:year/:month">
            <Home />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
{
  /* <BrowserRouter>
          <Switch>
            <Route path="/login">
              <LoginPage thruPanel/>
            </Route> */
}
