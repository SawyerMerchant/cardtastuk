import * as Actions from "../actions/lists";

const initialState = {
  data: []
};

export const lists = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_USER_LISTS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isAuthenticated: true,
        isFetching: false
      };
    case Actions.GET_USER_LISTS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_USER_LISTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: true
      };
    default:
      return state;
  }
};
