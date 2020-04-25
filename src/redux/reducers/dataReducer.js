import { SET_POSTS } from "redux/types";
const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return { ...state };
  }
};
