import * as Actions from "../actions/cardMessage";

const initialState = "";

export const cardMessage = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_CARD_MESSAGE:
      return action.data;
    default:
      return state;
  }
};
