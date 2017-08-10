import * as Actions from "../actions/userName";

const initialState = "< User >";

export const userName = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_NAME:
      return action.data;
    case Actions.CLEAR_NAME:
      return "";
    default:
      return state;
  }
};
