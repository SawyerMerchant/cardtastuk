import * as Actions from "../actions/currentCategory";

const initialState = "";

export const currentCategory = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_CATEGORY:
      return action.data;
    default:
      return state;
  }
};
