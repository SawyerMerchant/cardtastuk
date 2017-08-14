import * as Actions from "../actions/currentList";

const initialState = {
  data: {
    id: 0,
    name: "",
    first_record: {
      first_name: "<First Name>"
    },
    count: 0
  }
};

export const currentList = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_LIST:
      return {
        ...state,
        data: action.data
      };
    case Actions.CLEAR_CURRENT_LIST:
      return initialState;
    default:
      return state;
  }
};
