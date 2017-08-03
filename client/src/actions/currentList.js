export const SET_CURRENT_LIST = "SET_CURRENT_LIST";

export function setCurrentList(data) {
  return {
    type: SET_CURRENT_LIST,
    data
  };
}

export function uploadList(file, name, user) {
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
        console.log(response);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
}
