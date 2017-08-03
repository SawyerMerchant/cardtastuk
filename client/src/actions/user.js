import { clearCart } from "./shoppingCart";
import { setCurrentList } from "./currentList";
import { clearLists, getUserListsSuccess } from "./listsAll";
export const GET_USER_LOGIN_REQUEST = "GET_USER_LOGIN_REQUEST";
export const GET_USER_LOGIN_SUCCESS = "GET_USER_LOGIN_SUCCESS";
export const GET_USER_LOGIN_FAILURE = "GET_USER_LOGIN_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";

export function getUserLoginRequest() {
  return {
    type: GET_USER_LOGIN_REQUEST
  };
}

export function getUserLoginSuccess(data) {
  return {
    type: GET_USER_LOGIN_SUCCESS,
    data
  };
}

export function getUserLoginFailure(error) {
  return {
    type: GET_USER_LOGIN_FAILURE,
    error
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}

export function endUserSession() {
  return dispatch => {
    dispatch(logoutUser());
    dispatch(clearCart());
    dispatch(clearLists());
  };
}

export function registerUser(form, history) {
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: form.email,
      password: form.password,
      password_confirmation: form.password_confirmation,
      confirm_success_url: "/"
    })
  };

  let accessToken;
  let client;

  return dispatch => {
    dispatch(getUserLoginRequest());

    fetch("/auth", config)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        accessToken = response.headers.get("access-token");
        client = response.headers.get("client");
        return response.json();
      })
      .then(json => {
        dispatch(getUserLoginSuccess({...json.data, client, accessToken}));
        history.goBack(); // redirect user to previous page before login was requested
      })
      .catch(error => {
        dispatch(getUserLoginFailure(error));
      });
  };
}

export function loginUser(form, history) {
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: form.email,
      password: form.password
    })
  };
  
  let accessToken;
  let client;

  return dispatch => {
    dispatch(getUserLoginRequest());

    fetch("/auth/sign_in", config)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        accessToken = response.headers.get("access-token");
        client = response.headers.get("client");
        return response.json();
      })
      .then(json => {
        let firstList = json.data.lists[0] || {
          id: 0,
          name: "",
          first_record: {
            first_name: "<First Name>"
          },
          count: 0
        };
        dispatch(getUserLoginSuccess({...json.data, client, accessToken}));
        dispatch(getUserListsSuccess(json.data.lists));
        dispatch(setCurrentList(firstList));
        history.goBack(); // redirect user to previous page before login was requested
      })
      .catch(error => {
        dispatch(getUserLoginFailure(error));
        history.push(`${window.location.pathname}?error=bad_login`);
      });
  };
}
