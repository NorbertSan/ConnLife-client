import {
  SET_LOGGED_USER,
  SET_ERRORS_LOGIN,
  CLEAR_ERRORS_LOGIN,
  LOADING_UI_LOGIN,
  CLEAR_LOADING_UI_LOGIN,
  LOADING_UI_SIGNUP,
  CLEAR_LOADING_UI_SIGNUP,
  SET_ERRORS_SIGNUP,
  CLEAR_ERRORS_SIGNUP,
  SET_SUCCESS_ALERT,
  SET_UNAUTHENTICATED,
  UPDATE_USER_PROFILE,
  LOADING_UPDATE_PROFILE,
  CLEAR_LOADING_UPDATE_PROFILE,
  SET_ERRORS_UPDATE_PROFILE,
  CLEAR_SET_ERRORS_UPDATE_PROFILE,
} from "redux/types";
import axios from "axios";

export const loginUser = (credentials, history) => (dispatch) => {
  console.log("loginuser action fired");
  dispatch({ type: LOADING_UI_LOGIN });
  dispatch({ type: CLEAR_ERRORS_LOGIN });
  axios
    .post("/login", credentials)
    .then((res) => {
      dispatch({ type: CLEAR_LOADING_UI_LOGIN });
      console.log("login success");
      setAuthorizationToken(res.data.accessToken);
      dispatch(getLoggedUserData());
      history.push("/");
    })
    .catch((err) => {
      console.error(err);
      console.log("login failed");
      dispatch({ type: CLEAR_LOADING_UI_LOGIN });
      dispatch({
        type: SET_ERRORS_LOGIN,
        payload: err.response.data,
      });
    });
};

export const createAccount = (data, history) => (dispatch) => {
  console.log("create account action fired");
  dispatch({ type: LOADING_UI_SIGNUP });
  dispatch({ type: CLEAR_ERRORS_SIGNUP });
  axios
    .post("/user", data)
    .then((res) => {
      dispatch({ type: SET_SUCCESS_ALERT, payload: res.data });
      dispatch({ type: CLEAR_LOADING_UI_SIGNUP });
      history.push("/login");
    })
    .catch((err) => {
      console.error(err);
      console.log("create account failed");
      dispatch({ type: CLEAR_LOADING_UI_SIGNUP });
      dispatch({
        type: SET_ERRORS_SIGNUP,
        payload: err.response.data,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  console.log("logoutuser action fired");
  localStorage.removeItem("AuthToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({
    type: SET_UNAUTHENTICATED,
  });
};

export const getLoggedUserData = () => (dispatch) => {
  console.log("getLoggedUserData action fired");
  axios
    .get("/user")
    .then((res) => {
      dispatch({ type: SET_LOGGED_USER, payload: res.data });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const updateProfile = (data) => (dispatch) => {
  console.log("update profile action fired");
  dispatch({ type: CLEAR_SET_ERRORS_UPDATE_PROFILE });
  dispatch({ type: LOADING_UPDATE_PROFILE });
  axios
    .put("/user", data)
    .then(() => {
      dispatch({ type: CLEAR_LOADING_UPDATE_PROFILE });
      dispatch({ type: UPDATE_USER_PROFILE, payload: data });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: SET_ERRORS_UPDATE_PROFILE, payload: err.response.data });
      dispatch({ type: CLEAR_LOADING_UPDATE_PROFILE });
    });
};

const setAuthorizationToken = (token) => {
  const fullToken = `Bearer ${token}`;
  localStorage.setItem("AuthToken", fullToken);
  axios.defaults.headers.common["Authorization"] = fullToken;
};
