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
  EDIT_COMMENT,
  LOADING_EDIT_COMMENT,
  CLEAR_LOADING_EDIT_COMMENT,
  SET_ERRORS_EDIT_COMMENT,
  EDIT_POST,
  LOADING_EDIT_POST,
  CLEAR_LOADING_EDIT_POST,
  SET_ERRORS_EDIT_POST,
} from "redux/types";
import axios from "axios";

export const getAllPosts = () => (dispatch) => {
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
  dispatch({ type: LOADING_ADD_COMMENT });
  dispatch({ type: CLEAR_ERROR_NEW_COMMENT });
  axios
    .post(`/comment/${post_id}`, data)
    .then((res) => {
      dispatch({
        type: ADD_COMMENT,
        payload: res.data,
      });
      dispatch({ type: CLEAR_LOADING_ADD_COMMENT });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: CLEAR_LOADING_ADD_COMMENT });
      dispatch({ type: SET_ERRORS_NEW_COMMENT, payload: err.response.data });
    });
};

export const like = (post_id) => (dispatch) => {
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
  dispatch({ type: LOADING_REMOVE_POST });
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
  dispatch({ type: LOADING_REMOVE_COMMENT });
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

export const editComment = (body, comment_id) => (dispatch) => {
  dispatch({ type: LOADING_EDIT_COMMENT });
  axios
    .put(`/comment/${comment_id}`, body)
    .then(() => {
      dispatch({ type: EDIT_COMMENT, payload: { comment_id, body } });
      dispatch({ type: CLEAR_LOADING_EDIT_COMMENT });
      dispatch({
        type: SET_ERRORS_EDIT_COMMENT,
        payload: {
          success: "Comment edited",
        },
      });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: SET_ERRORS_EDIT_COMMENT, payload: err.response.data });
      dispatch({ type: CLEAR_LOADING_EDIT_COMMENT });
    });
};

export const editPost = (body, post_id) => (dispatch) => {
  dispatch({ type: LOADING_EDIT_POST });
  axios
    .put(`/post/${post_id}`, body)
    .then(() => {
      dispatch({ type: EDIT_POST, payload: { post_id, body } });
      dispatch({ type: CLEAR_LOADING_EDIT_POST });
      dispatch({
        type: SET_ERRORS_EDIT_POST,
        payload: {
          success: "Post edited",
        },
      });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: SET_ERRORS_EDIT_POST, payload: err.response.data });
      dispatch({ type: CLEAR_LOADING_EDIT_POST });
    });
};
