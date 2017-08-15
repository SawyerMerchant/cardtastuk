import { addNewList } from "./listsAll";
export const SET_CURRENT_LIST = "SET_CURRENT_LIST";
export const CLEAR_CURRENT_LIST = "CLEAR_CURRENT_LIST";

export function setCurrentList(data) {
  return {
    type: SET_CURRENT_LIST,
    data
  };
}

export function clearCurrentList() {
  return {
    type: CLEAR_CURRENT_LIST
  };
}

export function uploadList(file, name, user, history) {
  let formData = new FormData();

  formData.append("url", file);
  formData.append("name", name);
  formData.append("user_id", user.id);

  let config = {
    method: "POST",
    mode: "no-cors",
    body: formData
  };

  return async dispatch => {
    try {
      let response = await fetch("/api/v1/lists", config);

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      let json = await response.json();
      dispatch(addNewList(json));
      dispatch(setCurrentList(json));
      history.push(`${window.location.pathname}?status=success`);
    } catch (error) {
      history.push(`${window.location.pathname}?status=error`);
      console.log(error);
    }
  };
}
