import * as Actions from "../actions/categoriesAll";

const initialState = [];

export const categoriesAll = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_CATEGORIES:
      return [...action.data];
    default:
      return state;
  }
};
