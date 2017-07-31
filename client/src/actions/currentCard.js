import { changeCardMessage } from "../actions/cardMessage";

export const GET_CURRENT_CARD_REQUEST = "GET_CURRENT_CARD_REQUEST";
export const GET_CURRENT_CARD_SUCCESS = "GET_CURRENT_CARD_SUCCESS";
export const GET_CURRENT_CARD_FAILURE = "GET_CURRENT_CARD_FAILURE";

export function getCurrentCardRequest() {
  return {
    type: GET_CURRENT_CARD_REQUEST
  };
}

export function getCurrentCardSuccess(data) {
  return {
    type: GET_CURRENT_CARD_SUCCESS,
    data
  };
}

export function getCurrentCardFailure(error) {
  return {
    type: GET_CURRENT_CARD_FAILURE,
    error
  };
}

export function getCurrentCardInit(id) {
  return dispatch => {
    dispatch(getCurrentCardRequest());

    fetch(`/api/v1/cards/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getCurrentCardSuccess(json));
        dispatch(changeCardMessage(json.default_greeting));
      })
      .catch(error => {
        dispatch(getCurrentCardFailure(error));
      });
  };
}

export function getCurrentCard(id) {
  return dispatch => {
    dispatch(getCurrentCardRequest());

    fetch(`/api/v1/cards/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getCurrentCardSuccess(json));
      })
      .catch(error => {
        dispatch(getCurrentCardFailure(error));
      });
  };
}
