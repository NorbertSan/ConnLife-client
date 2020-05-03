import React from "react";
import { Redirect, Route } from "react-router-dom";

// REDUX STUFF
import { useSelector } from "react-redux";

const AuthRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.user.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
