import * as Actions from "../actions/currentList";

const initialState = {
  data: {
    id: 1,
    name: "Family",
    first_person: {
      fname: "Todd"
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
