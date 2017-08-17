import * as Actions from "../actions/referrer";

const initialState = {
  data: {
    admin: "",
    organization: {}
  },
  isFetching: false,
  error: null
};

export const referrer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_REFERRER_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false
      };
    case Actions.GET_REFERRER_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_REFERRER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
};
