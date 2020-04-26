import {
  SET_POSTS,
  LOADING_POSTS,
  CLEAR_LOADING_POSTS,
  SET_USER,
  LOADING_USER,
  CLEAR_LOADING_USER,
  ADD_POST,
  LOADING_ADD_POST,
  CLEAR_LOADING_ADD_POST,
  SET_ERRORS_ADD_POST,
  SET_SINGLE_POST,
  LOADING_SINGLE_POST,
  CLEAR_LOADING_SINGLE_POST,
  SET_POST_NOT_FOUND,
  ADD_COMMENT,
  LOADING_ADD_COMMENT,
  CLEAR_LOADING_ADD_COMMENT,
  SET_ERRORS_NEW_COMMENT,
  CLEAR_ERROR_NEW_COMMENT,
  SET_USER_NOT_FOUND,
  ADD_LIKE,
  REMOVE_LIKE,
  LOADING_REMOVE_POST,
  CLEAR_LOADING_REMOVE_POST,
  REMOVE_POST,
  REMOVE_COMMENT,
  LOADING_REMOVE_COMMENT,
  CLEAR_LOADING_REMOVE_COMMENT,
} from "redux/types";
import axios from "axios";

export const getAllPosts = () => (dispatch) => {
  console.log("getallPosts action fired");
  dispatch({ type: LOADING_POSTS });
  axios
    .get("/posts")
    .then((res) => {
      dispatch({ type: SET_POSTS, payload: res.data });
      dispatch({ type: CLEAR_LOADING_POSTS });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getUserData = (nickName) => (dispatch) => {
  console.log("getUserData action fired");
  dispatch({ type: LOADING_USER });
  axios
    .get(`/user/${nickName}`)
    .then((res) => {
      dispatch({ type: CLEAR_LOADING_USER });
      dispatch({ type: SET_USER, payload: res.data });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: CLEAR_LOADING_USER });
      if (err.response.data.general === "User not found")
        dispatch({ type: SET_USER_NOT_FOUND });
    });
};

export const addPost = (data) => (dispatch) => {
  console.log("addPost action fired");
  dispatch({ type: LOADING_ADD_POST });
  axios
    .post("/post", data)
    .then((res) => {
      dispatch({ type: ADD_POST, payload: res.data });
      dispatch({ type: CLEAR_LOADING_ADD_POST });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: SET_ERRORS_ADD_POST, payload: err.response.data });
      dispatch({ type: CLEAR_LOADING_ADD_POST });
    });
};

export const getSinglePost = (post_id) => (dispatch) => {
  console.log("get single post action fired");
  dispatch({ type: LOADING_SINGLE_POST });
  axios
    .get(`/post/${post_id}`)
    .then((res) => {
      dispatch({ type: CLEAR_LOADING_SINGLE_POST });
      dispatch({ type: SET_SINGLE_POST, payload: res.data });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: CLEAR_LOADING_SINGLE_POST });
      dispatch({ type: SET_POST_NOT_FOUND });
    });
};

export const addComment = (data, post_id) => (dispatch) => {
  console.log("add comment action fired");
  dispatch({ type: LOADING_ADD_COMMENT });
  dispatch({ type: CLEAR_ERROR_NEW_COMMENT });
  console.log(post_id);
  axios
    .post(`/comment/${post_id}`, data)
    .then((res) => {
      console.log("add comment success");
      console.log(res.data);
      dispatch({
        type: ADD_COMMENT,
        payload: res.data,
      });
      dispatch({ type: CLEAR_LOADING_ADD_COMMENT });
    })
    .catch((err) => {
      console.error(err);
      console.log("add comment failed");
      dispatch({ type: CLEAR_LOADING_ADD_COMMENT });
      dispatch({ type: SET_ERRORS_NEW_COMMENT, payload: err.response.data });
    });
};

export const like = (post_id) => (dispatch) => {
  console.log("like action fired");
  axios
    .get(`/like/${post_id}`)
    .then((res) => {
      dispatch({
        type: ADD_LIKE,
        payload: res.data.newLike,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const unlike = (post_id) => (dispatch) => {
  console.log("UNlike action fired");
  axios
    .get(`/unlike/${post_id}`)
    .then((res) => {
      dispatch({
        type: REMOVE_LIKE,
        payload: {
          like_id: res.data.like_id,
          post_id,
        },
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const removePost = (post_id) => (dispatch) => {
  console.log("removePost action fired");
  dispatch({ type: LOADING_REMOVE_POST });
  console.log(post_id);
  axios
    .delete(`/post/${post_id}`)
    .then((res) => {
      dispatch({ type: REMOVE_POST, payload: res.data.post_id });
      dispatch({ type: CLEAR_LOADING_REMOVE_POST });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: CLEAR_LOADING_REMOVE_POST });
    });
};

export const removeComment = (comment_id) => (dispatch) => {
  console.log("remove comment action fired");
  dispatch({ type: LOADING_REMOVE_COMMENT });
  console.log(comment_id);
  axios
    .delete(`/comment/${comment_id}`)
    .then((res) => {
      dispatch({ type: REMOVE_COMMENT, payload: res.data.comment_id });
      dispatch({ type: CLEAR_LOADING_REMOVE_COMMENT });
    })
    .catch((err) => {
      console.error(err.response);
      dispatch({ type: CLEAR_LOADING_REMOVE_COMMENT });
    });
};
