import * as Actions from "../actions/currentList";

const initialState = {
  data: {
    first_person: {
      fname: "John",
      lname: "Doe"
    }
  }
};

export const currentList = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_CURRENT_LIST:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
