import {
  LOADING_UI_LOGIN,
  CLEAR_LOADING_UI_LOGIN,
  SET_ERRORS_LOGIN,
  CLEAR_ERRORS_LOGIN,
  SET_ERRORS_SIGNUP,
  CLEAR_ERRORS_SIGNUP,
  LOADING_UI_SIGNUP,
  CLEAR_LOADING_UI_SIGNUP,
  SET_SUCCESS_ALERT,
} from "redux/types";
const initialState = {
  loadingLogin: false,
  loadingSignUp: false,
  errorsLogin: {},
  errorsSignUp: {},
  successAlert: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_UI_LOGIN:
      return {
        ...state,
        loadingLogin: true,
      };
    case CLEAR_LOADING_UI_LOGIN:
      return {
        ...state,
        loadingLogin: false,
      };
    case SET_ERRORS_LOGIN:
      return {
        ...state,
        errorsLogin: action.payload,
      };
    case CLEAR_ERRORS_LOGIN:
      return {
        ...state,
        errorsLogin: {},
      };
    case LOADING_UI_SIGNUP:
      return {
        ...state,
        loadingSignUp: true,
      };
    case CLEAR_LOADING_UI_SIGNUP:
      return {
        ...state,
        loadingSignUp: false,
      };
    case SET_ERRORS_SIGNUP:
      return {
        ...state,
        errorsSignUp: action.payload,
        successAlert: {},
      };
    case CLEAR_ERRORS_SIGNUP:
      return {
        ...state,
        errorsSignUp: {},
      };
    case SET_SUCCESS_ALERT:
      return {
        ...state,
        successAlert: action.payload,
      };
    default:
      return { ...state };
  }
};
