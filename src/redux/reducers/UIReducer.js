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
  LOADING_POSTS,
  CLEAR_LOADING_POSTS,
  LOADING_ADD_POST,
  CLEAR_LOADING_ADD_POST,
  SET_ERRORS_ADD_POST,
  LOADING_SINGLE_POST,
  CLEAR_LOADING_SINGLE_POST,
  SET_POST_NOT_FOUND,
  SET_SINGLE_POST,
  LOADING_ADD_COMMENT,
  CLEAR_LOADING_ADD_COMMENT,
  SET_ERRORS_NEW_COMMENT,
  CLEAR_ERROR_NEW_COMMENT,
  SET_USER_NOT_FOUND,
  LOADING_USER,
  CLEAR_LOADING_USER,
  SET_USER,
  LOADING_REMOVE_POST,
  CLEAR_LOADING_REMOVE_POST,
  SET_ERRORS_UPDATE_PROFILE,
  CLEAR_SET_ERRORS_UPDATE_PROFILE,
  LOADING_UPDATE_PROFILE,
  CLEAR_LOADING_UPDATE_PROFILE,
} from "redux/types";
const initialState = {
  loadingLogin: false,
  loadingSignUp: false,
  errorsLogin: {},
  errorsSignUp: {},
  errorsAddPost: {},
  successAlert: {},
  loadingPosts: false,
  loadingAddPost: false,
  loadingSinglePost: false,
  postNotFound: false,
  userNotFound: false,
  loadingAddComment: false,
  errorsAddComment: {},
  loadingUser: false,
  loadingRemovePost: false,
  errorsUpdateProfile: {},
  loadingUpdateProfile: false,
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
    case LOADING_POSTS:
      return {
        ...state,
        loadingPosts: true,
        postNotFound: false,
      };
    case CLEAR_LOADING_POSTS:
      return {
        ...state,
        loadingPosts: false,
      };
    case LOADING_ADD_POST:
      return {
        ...state,
        errorsAddPost: {},
        loadingAddPost: true,
      };
    case CLEAR_LOADING_ADD_POST:
      return {
        ...state,
        loadingAddPost: false,
      };
    case SET_ERRORS_ADD_POST:
      return {
        ...state,
        errorsAddPost: action.payload,
      };
    case LOADING_SINGLE_POST:
      return {
        ...state,
        loadingSinglePost: true,
      };
    case CLEAR_LOADING_SINGLE_POST:
      return {
        ...state,
        loadingSinglePost: false,
      };
    case SET_POST_NOT_FOUND:
      return {
        ...state,
        postNotFound: true,
      };
    case SET_SINGLE_POST:
      return {
        ...state,
        postNotFound: false,
      };
    case LOADING_ADD_COMMENT:
      return {
        ...state,
        loadingAddComment: true,
      };
    case CLEAR_LOADING_ADD_COMMENT:
      return {
        ...state,
        loadingAddComment: false,
      };
    case SET_ERRORS_NEW_COMMENT:
      return {
        ...state,
        errorsAddComment: action.payload,
      };
    case CLEAR_ERROR_NEW_COMMENT:
      return {
        ...state,
        errorsAddComment: {},
      };
    case SET_USER_NOT_FOUND:
      return {
        ...state,
        userNotFound: true,
      };
    case LOADING_USER:
      return {
        ...state,
        loadingUser: true,
        userNotFound: false,
      };
    case CLEAR_LOADING_USER:
      return {
        ...state,
        loadingUser: false,
      };
    case SET_USER:
      return {
        ...state,
        userNotFound: false,
      };
    case LOADING_REMOVE_POST:
      return {
        ...state,
        loadingRemovePost: true,
      };
    case CLEAR_LOADING_REMOVE_POST:
      return {
        ...state,
        loadingRemovePost: false,
      };
    case SET_ERRORS_UPDATE_PROFILE:
      return {
        ...state,
        errorsUpdateProfile: action.payload,
      };
    case CLEAR_SET_ERRORS_UPDATE_PROFILE:
      return {
        ...state,
        errorsUpdateProfile: {},
      };
    case LOADING_UPDATE_PROFILE:
      return {
        ...state,
        loadingUpdateProfile: true,
      };
    case CLEAR_LOADING_UPDATE_PROFILE:
      return {
        ...state,
        loadingUpdateProfile: false,
      };
    default:
      return { ...state };
  }
};
