export const GET_USER_LOGIN_REQUEST = "GET_USER_LOGIN_REQUEST";
export const GET_USER_LOGIN_SUCCESS = "GET_USER_LOGIN_SUCCESS";
export const GET_USER_LOGIN_FAILURE = "GET_USER_LOGIN_FAILURE";

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

export function getUserLogin(form) {
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `email=${form.email}&password=${form.password}&password_confirmation=${form.passwordConfirmation}`
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
        dispatch(getUserLoginSuccess(json));
      })
      .catch(error => {
        dispatch(getUserLoginFailure(error));
      });
  };
}