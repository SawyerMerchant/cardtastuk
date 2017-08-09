import * as Actions from "../actions/signature";

const initialState = "";

export const signature = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_SIGNATURE:
      return action.data;
    case Actions.CLEAR_SIGNATURE:
      return "";
    default:
      return state;
  }
};
