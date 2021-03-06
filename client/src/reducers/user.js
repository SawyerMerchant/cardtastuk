import * as Actions from "../actions/user";

const initialState = {
  isAuthenticated: false,
  error: null,
  isFetching: false,
  data: {
    name: ""
  }
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_USER_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.data,
        isAuthenticated: true,
        isFetching: false
      };
    case Actions.GET_USER_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_USER_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: true
      };
    case Actions.LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        error: null,
        data: {}
      };
    default:
      return state;
  }
};
