import * as Actions from "../actions/listsAll";

const initialState = {
  data: []
};

export const listsAll = (state = initialState, action) => {
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
    case Actions.ADD_NEW_LIST:
      return {
        ...state,
        data: [...state.data, action.data]
      };
    case Actions.CLEAR_LISTS:
      return {
        ...state,
        data: []
      };
    default:
      return state;
  }
};
