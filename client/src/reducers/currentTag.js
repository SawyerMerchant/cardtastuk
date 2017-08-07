import * as Actions from "../actions/currentTag";

const initialState = "";

export const currentTag = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_TAG:
      return action.data;
    default:
      return state;
  }
};
