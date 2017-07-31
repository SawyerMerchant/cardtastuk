import * as Actions from "../actions/cardsAll";

const initialState = {
  data: []
};

export const cardsAll = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_CARDS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false
      };
    case Actions.GET_ALL_CARDS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_ALL_CARDS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
};
