export const GET_USER_LISTS_REQUEST = "GET_USER_LISTS_REQUEST";
export const GET_USER_LISTS_SUCCESS = "GET_USER_LISTS_SUCCESS";
export const GET_USER_LISTS_FAILURE = "GET_USER_LISTS_FAILURE";

export function getUserListsRequest() {
  return {
    type: GET_USER_LISTS_REQUEST
  };
}

export function getUserListsSuccess(data) {
  return {
    type: GET_USER_LISTS_SUCCESS,
    data
  };
}

export function getUserListsFailure(error) {
  return {
    type: GET_USER_LISTS_FAILURE,
    error
  };
}
