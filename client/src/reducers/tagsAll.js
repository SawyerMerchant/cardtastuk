import * as Actions from "../actions/tagsAll";

const initialState = [];

export const tagsAll = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_TAGS:
      return [...action.data];
    default:
      return state;
  }
};
