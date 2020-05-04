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
  REMOVE_COMMENT,
  EDIT_COMMENT,
  EDIT_POST,
  UPDATE_AVATAR,
} from "redux/types";
const initialState = {
  posts: [],
  userInfo: {},
  singlePost: {},
  likes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
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
      let oldCommentsCount = state.singlePost.postDetails.commentsCount;
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
      state.likes = state.likes.reduce((result, current) => {
        if (current.post_id === action.payload.post_id)
          return [
            ...result,
            { ...current, likesCount: current.likesCount + 1 },
          ];
        else return [...result, current];
      }, []);

      state.posts = state.posts.reduce((result, current) => {
        if (current.post_id === action.payload.post_id) {
          return [
            ...result,
            { ...current, likesCount: current.likesCount + 1 },
          ];
        }
        return [...result, current];
      }, []);

      return {
        ...state,
      };
    case REMOVE_LIKE:
      if (state.singlePost.postDetails) {
        state.singlePost.likes = [...state.singlePost.likes].filter(
          (item) => item.like_id !== action.payload.like_id
        );
        let oldLikesCount = state.singlePost.postDetails.likesCount;
        state.singlePost.postDetails = {
          ...state.singlePost.postDetails,
          likesCount: oldLikesCount - 1,
        };
      }

      state.likes = [...state.likes].filter(
        (item) => item.like_id !== action.payload.like_id
      );

      state.likes = state.likes.reduce((result, current) => {
        if (current.post_id === action.payload.post_id)
          return [
            ...result,
            { ...current, likesCount: current.likesCount - 1 },
          ];
        else return [...result, current];
      }, []);

      state.posts = state.posts.reduce((result, current) => {
        if (current.post_id === action.payload.post_id) {
          return [
            ...result,
            { ...current, likesCount: current.likesCount - 1 },
          ];
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
    case REMOVE_COMMENT:
      state.singlePost.comments = [...state.singlePost.comments].filter(
        (item) => item.comment_id !== parseInt(action.payload)
      );
      let commentsCounter = state.singlePost.postDetails.commentsCount;
      state.singlePost.postDetails = {
        ...state.singlePost.postDetails,
        commentsCount: commentsCounter - 1,
      };
      return {
        ...state,
      };

    case EDIT_COMMENT:
      // action.payload = { comment_id, body}
      state.singlePost = {
        ...state.singlePost,
        comments: state.singlePost.comments.reduce((result, current) => {
          if (current.comment_id === action.payload.comment_id)
            return [...result, { ...current, body: action.payload.body.body }];
          else return [...result, current];
        }, []),
      };
      return {
        ...state,
      };

    case EDIT_POST:
      // action.payload = { post_id, body}
      state.posts = state.posts.reduce((result, current) => {
        if (current.post_id === action.payload.post_id)
          return [...result, { ...current, body: action.payload.body.body }];
        else return [...result, current];
      }, []);
      return {
        ...state,
      };
    case UPDATE_AVATAR:
      // action.payload.avatar = 'avatar3'
      // action.payload.nickName = 'nick3'
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          avatar: action.payload.avatar,
        },
        posts: state.posts.map((post) =>
          post.nickName === action.payload.nickName
            ? { ...post, avatar: action.payload.avatar }
            : post
        ),
        likes: state.likes.map((like) =>
          like.nickName === action.payload.nickName
            ? { ...like, avatar: action.payload.avatar }
            : like
        ),
      };
    default:
      return { ...state };
  }
};
