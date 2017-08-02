import * as Actions from "../actions/shoppingCart";

const initialState = [];

export const shoppingCart = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case Actions.ADD_TO_SHOPPING_CART:
      return [...state, action.data];
    case Actions.REMOVE_FROM_SHOPPING_CART:
      newState = state.filter(
        item => item.id.toString() !== action.data.toString()
      );
      return [...newState];
    case Actions.EDIT_SHOPPING_CART:
      newState = state.map(item => {
        if (item.id.toString() === action.data.toString()) {
          return action.data;
        }

        return item;
      });
      return [...newState];
    default:
      return state;
  }
};
