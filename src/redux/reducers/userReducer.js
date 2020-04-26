import {
  SET_LOGGED_USER,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
  ADD_POST,
  ADD_LIKE,
  REMOVE_LIKE,
  REMOVE_POST,
  UPDATE_USER_PROFILE,
} from "redux/types";
const initialState = {
  auth: false,
  userInfo: {},
  posts: [],
  likes: [],
  notifications: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_USER:
      return {
        ...state,
        auth: true,
        ...action.payload,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_AUTHENTICATED:
      return {
        ...state,
        auth: true,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case ADD_LIKE:
      return {
        ...state,
        likes: [...state.likes, action.payload],
      };
    case REMOVE_LIKE:
      return {
        ...state,
        likes: [...state.likes].filter(
          (item) => item.like_id !== action.payload.like_id
        ),
      };
    case REMOVE_POST:
      // action.payload = post_id
      return {
        ...state,
        posts: [...state.posts].filter(
          (item) => item.post_id !== parseInt(action.payload)
        ),
      };
    case UPDATE_USER_PROFILE:
      state.userInfo = {
        ...state.userInfo,
        website: action.payload.website,
        bio: action.payload.bio,
      };
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};
