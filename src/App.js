import React, { useEffect } from "react";
import Home from "./components/home";
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  withRouter,
  useParams,
} from "react-router-dom";
import NotFound from "./404";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home/:year/:month">
            <Home/>
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
