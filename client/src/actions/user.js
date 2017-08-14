import { clearCart } from "./shoppingCart";
import { setCurrentList, clearCurrentList } from "./currentList";
import { clearLists, getUserListsSuccess } from "./listsAll";
import { clearSignature } from "./signature";
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

export function endUserSession(user) {
  let config = {
    method: "DELETE",
    headers: {
      "access-token": user.accessToken,
      client: user.client,
      uid: user.uid
    }
  };
  return dispatch => {
    fetch("/auth/sign_out", config)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(logoutUser());
        dispatch(clearCart());
        dispatch(clearLists());
        dispatch(clearSignature());
        dispatch(clearCurrentList());
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function registerUser(form, history, cardRedirectId) {
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
        dispatch(getUserLoginSuccess({ ...json.data, client, accessToken }));
        if (cardRedirectId) {
          history.push(`/cards/${cardRedirectId}/upload`);
        } else {
          history.push("/cards");
        }
      })
      .catch(error => {
        dispatch(getUserLoginFailure(error));
        if (cardRedirectId) {
          history.push(`/auth?error=badLogin&cardRedirectId=${cardRedirectId}`);
        } else {
          history.push("/auth?error=badLogin");
        }
      });
  };
}

export function loginUser(form, history, cardRedirectId) {
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
        dispatch(getUserLoginSuccess({ ...json.data, client, accessToken }));
        dispatch(getUserListsSuccess(json.data.lists));
        dispatch(setCurrentList(firstList));

        if (cardRedirectId) {
          history.push(`/cards/${cardRedirectId}/upload`);
        } else {
          history.push("/cards");
        }
      })
      .catch(error => {
        dispatch(getUserLoginFailure(error));
        if (cardRedirectId) {
          history.push(`/auth?error=badLogin&cardRedirectId=${cardRedirectId}`);
        } else {
          history.push("/auth?error=badLogin");
        }
      });
  };
}
