import * as Actions from "../actions/cardFont";
import { cardFonts } from "../helpers";

const initialState = cardFonts[0].cssName;

export const cardFont = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_FONT:
      return action.data;
    default:
      return state;
  }
};
