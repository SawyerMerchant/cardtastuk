import * as Actions from "../actions/currentCard";

const initialState = {
  data: {
    price: {
      x25: ""
    }
  }
};

export const currentCard = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_CURRENT_CARD_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false
      };
    case Actions.GET_CURRENT_CARD_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_CURRENT_CARD_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
};
