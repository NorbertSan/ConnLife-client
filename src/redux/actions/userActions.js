import {
  SET_USER,
  SET_ERRORS_LOGIN,
  CLEAR_ERRORS_LOGIN,
  LOADING_UI_LOGIN,
  CLEAR_LOADING_UI_LOGIN,
  LOADING_UI_SIGNUP,
  CLEAR_LOADING_UI_SIGNUP,
  SET_ERRORS_SIGNUP,
  CLEAR_ERRORS_SIGNUP,
  SET_SUCCESS_ALERT,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
} from "redux/types";
import axios from "axios";

export const loginUser = (credentials, history) => (dispatch) => {
  dispatch({ type: LOADING_UI_LOGIN });
  dispatch({ type: CLEAR_ERRORS_LOGIN });
  axios
    .post("/login", credentials)
    .then((res) => {
      dispatch({ type: CLEAR_LOADING_UI_LOGIN });
      console.log("login success");
      setAuthorizationToken(res.data.accessToken);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS_LOGIN });
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
  localStorage.removeItem("AuthToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({
    type: SET_UNAUTHENTICATED,
  });
};

export const getUserData = () => (dispatch) => {
  console.log("getUserData action fired");
  axios
    .get("/user")
    .then((res) => {
      dispatch({ type: SET_USER, payload: res.data });
    })
    .catch((err) => {
      console.error(err);
    });
};

const setAuthorizationToken = (token) => {
  const fullToken = `Bearer ${token}`;
  localStorage.setItem("AuthToken", fullToken);
  axios.defaults.headers.common["Authorization"] = fullToken;
};
