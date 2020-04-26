import {
  SET_POSTS,
  SET_USER,
  ADD_POST,
  SET_SINGLE_POST,
  ADD_COMMENT,
  ADD_LIKE,
  REMOVE_LIKE,
  REMOVE_POST,
  UPDATE_USER_PROFILE,
} from "redux/types";
const initialState = {
  posts: [],
  userInfo: {},
  singlePost: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case SET_SINGLE_POST:
      return {
        ...state,
        singlePost: { ...action.payload },
      };
    case ADD_COMMENT:
      state.singlePost.comments = [
        action.payload,
        ...state.singlePost.comments,
      ];
      const oldCommentsCount = state.singlePost.postDetails.commentsCount;
      let postDetails = {
        ...state.singlePost.postDetails,
        commentsCount: oldCommentsCount + 1,
      };

      return {
        ...state,
        singlePost: {
          ...state.singlePost,
          postDetails,
        },
      };
    case ADD_LIKE:
      if (state.singlePost.postDetails) {
        state.singlePost.likes = [action.payload, ...state.singlePost.likes];
        let oldLikesCount = state.singlePost.postDetails.likesCount;
        state.singlePost.postDetails = {
          ...state.singlePost.postDetails,
          likesCount: oldLikesCount + 1,
        };
      }
      state.posts = state.posts.reduce((result, current) => {
        if (current.post_id === action.payload.post_id) {
          current.likesCount++;
        }
        return [...result, current];
      }, []);

      return {
        ...state,
      };
    case REMOVE_LIKE:
      // action.payload = like_id
      if (state.singlePost.postDetails) {
        state.singlePost.likes = [...state.singlePost.likes].filter(
          (item) => item.like_id !== action.payload
        );
        let oldLikesCount = state.singlePost.postDetails.likesCount;
        state.singlePost.postDetails = {
          ...state.singlePost.postDetails,
          likesCount: oldLikesCount - 1,
        };
      }

      state.posts = state.posts.reduce((result, current) => {
        if (current.post_id === action.payload.post_id) {
          current.likesCount--;
        }
        return [...result, current];
      }, []);

      return {
        ...state,
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
