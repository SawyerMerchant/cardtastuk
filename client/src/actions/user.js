import { clearCart } from "./shoppingCart";
import { setCurrentList, clearCurrentList } from "./currentList";
import { clearLists, getUserListsSuccess } from "./listsAll";
import { clearSignature } from "./signature";
import { clearName } from "./userName";
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

  return async dispatch => {
    try {
      let response = await fetch("/auth/sign_out", config);

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      dispatch(logoutUser());
      dispatch(clearCart());
      dispatch(clearLists());
      dispatch(clearSignature());
      dispatch(clearCurrentList());
      dispatch(clearName());
    } catch (error) {
      console.log(error);
    }
  };
}

export function registerUser(
  form,
  history,
  organization,
  admin,
  cardRedirectId
) {
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: form.email,
      password: form.password,
      password_confirmation: form.password_confirmation,
      organization_id: organization.id,
      admin_user_id: admin,
      confirm_success_url: "/auth?confirmation=true"
    })
  };

  return async dispatch => {
    dispatch(getUserLoginRequest());

    try {
      let response = await fetch("/auth", config);

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      if (cardRedirectId) {
        history.push(`/auth?success=true&cardRedirectId=${cardRedirectId}`);
      } else {
        history.push("/auth?success=true");
      }
    } catch (error) {
      dispatch(getUserLoginFailure(error));
      if (cardRedirectId) {
        history.push(`/auth?error=badLogin&cardRedirectId=${cardRedirectId}`);
      } else {
        history.push("/auth?error=badLogin");
      }
    }
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

  return async dispatch => {
    dispatch(getUserLoginRequest());
    try {
      let response = await fetch("/auth/sign_in", config);
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      accessToken = response.headers.get("access-token");
      client = response.headers.get("client");

      let json = await response.json();
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
    } catch (error) {
      dispatch(getUserLoginFailure(error));
      if (cardRedirectId) {
        history.push(`/auth?error=badLogin&cardRedirectId=${cardRedirectId}`);
      } else {
        history.push("/auth?error=badLogin");
      }
    }
  };
}
