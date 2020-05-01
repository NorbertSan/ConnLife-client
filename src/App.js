import React from "react";
import GlobalStyles from "utils/GlobalStyles";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";
import axios from "axios";

// REDUX STUFF
import store from "redux/store";
import { SET_AUTHENTICATED } from "redux/types";
import { getLoggedUserData, logoutUser } from "redux/actions/userActions";
// PAGES
import Home from "pages/Home";
import Profile from "pages/Profile";
import PostDetails from "pages/PostDetails";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import Notifications from "pages/Notifications";
import NotFound from "pages/NotFound";

axios.defaults.baseURL = "https://connlifeserver.herokuapp.com";

const token = localStorage.AuthToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getLoggedUserData());
  }
}

const App = () => (
  <Provider store={store}>
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
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
export default App;
