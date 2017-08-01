import * as Actions from "../actions/listsAll";

const initialState = {
  data: [
    {
      id: 1,
      name: "Family",
      first_person: {
        fname: "Todd"
      }
    },
    {
      id: 2,
      name: "Friends",
      first_person: {
        fname: "Martha"
      }
    },
    {
      id: 3,
      name: "Co-workers",
      first_person: {
        fname: "Janice"
      }
    }
  ]
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
    default:
      return state;
  }
};
