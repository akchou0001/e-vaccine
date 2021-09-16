import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Schedule from "./pages/Schedule";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("user.....", user.token);
    if (user) {
      //logged in
      dispatch(
        login({
          token: user.token,
          mobile: user.mobile,
        })
      );
    } else {
      //logged out
      dispatch(logout());
    }
  }, [user.token]);
  return (
    <div className="App">
      {!user.token ? (
        <Router>
          <Switch>
            <Route path="/login">
              <Signin />
            </Route>
            <Route exact path="/">
              <Signin />
            </Route>
          </Switch>
        </Router>
      ) : (
        <>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
                <Main />
              </Route>
              <Route path="/profile">
                <Home />
                <Profile />
              </Route>
              <Route path="/register">
                <Home />
                <Register />
              </Route>
              <Route path="/schedule">
                <Home />
                <Schedule />
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
