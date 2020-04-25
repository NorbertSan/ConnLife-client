import { SET_USER, SET_UNAUTHENTICATED, SET_AUTHENTICATED } from "redux/types";
const initialState = {
  auth: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
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
    default:
      return { ...state };
  }
};
