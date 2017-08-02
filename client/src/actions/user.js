import { clearCart } from "./shoppingCart";
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

  return dispatch => {
    dispatch(getUserLoginRequest());

    fetch("/auth", config)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getUserLoginSuccess(json.data));
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

  return dispatch => {
    dispatch(getUserLoginRequest());

    fetch("/auth/sign_in", config)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getUserLoginSuccess(json.data));
        history.goBack(); // redirect user to previous page before login was requested
      })
      .catch(error => {
        dispatch(getUserLoginFailure(error));
      });
  };
}
