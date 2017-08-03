import * as Actions from "../actions/currentList";

const initialState = {
  data: {
    id: 1,
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
    default:
      return state;
  }
};
