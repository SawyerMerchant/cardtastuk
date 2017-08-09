import { addNewList } from "./listsAll";
export const SET_CURRENT_LIST = "SET_CURRENT_LIST";

export function setCurrentList(data) {
  return {
    type: SET_CURRENT_LIST,
    data
  };
}

export function uploadList(file, name, user, history) {
  let formData = new FormData();

  formData.append("url", file);
  formData.append("name", name);
  formData.append("user_id", user.id);

  return dispatch => {
    let config = {
      method: "POST",
      mode: "no-cors",
      body: formData
    };

    fetch("/api/v1/lists", config)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(addNewList(json));
        dispatch(setCurrentList(json));
        history.push(`${window.location.pathname}?status=success`);
      })
      .catch(error => {
        history.push(`${window.location.pathname}?status=error`);
        console.log(error);
      });
  };
}
