import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import UserProfile from "./Views/UserProfile";
import Login from "./Views/Login";

const App = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <p> ... Loading</p>;
  }

  return (
    <div className="App">
      <Switch>
        {isAuthenticated && (
          <>
            <Route path="/" component={UserProfile} />
            <Redirect to="/" />
          </>
        )}
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} loginWithRedirect={loginWithRedirect} />
          )}
        />
        {!isAuthenticated && <Redirect to="/login" />}
      </Switch>
    </div>
  );
};

export default App;
