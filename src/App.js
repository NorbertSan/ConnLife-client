import React from "react";
import GlobalStyles from "utils/GlobalStyles";
import Home from "pages/Home";
import Profile from "pages/Profile";
import PostDetails from "pages/PostDetails";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import Notifications from "pages/Notifications";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/user/:nickName" component={Profile} />
      <Route
        exact
        path="/user/:nickName/post/:post_id"
        component={PostDetails}
      />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/notifications" component={Notifications} />
    </Switch>
  </BrowserRouter>
);
export default App;
