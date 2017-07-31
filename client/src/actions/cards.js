export const GET_ALL_CARDS_REQUEST = "GET_ALL_CARDS_REQUEST";
export const GET_ALL_CARDS_SUCCESS = "GET_ALL_CARDS_SUCCESS";
export const GET_ALL_CARDS_FAILURE = "GET_ALL_CARDS_FAILURE";

export function getAllCardsRequest() {
  return {
    type: GET_ALL_CARDS_REQUEST
  };
}

export function getAllCardsSuccess(data) {
  return {
    type: GET_ALL_CARDS_SUCCESS,
    data
  };
}

export function getAllCardsFailure(error) {
  return {
    type: GET_ALL_CARDS_FAILURE,
    error
  };
}

export function getAllCards() {
  return dispatch => {
    dispatch(getAllCardsRequest());

    fetch(`api/v1/cards`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        console.log(json);
        dispatch(getAllCardsSuccess(json));
      })
      .catch(error => {
        dispatch(getAllCardsFailure(error));
      });
  };
}