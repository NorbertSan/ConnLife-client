import { SET_POSTS } from "redux/types";
import axios from "axios";

export const getAllPosts = () => (dispatch) => {
  console.log("getallPosts action fired");
  axios
    .get("/posts")
    .then((res) => {
      dispatch({ type: SET_POSTS, payload: res.data });
    })
    .catch((err) => {
      console.error(err);
    });
};
