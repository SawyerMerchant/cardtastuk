export const SET_CURRENT_LIST = "SET_CURRENT_LIST";

export function setCurrentList(data) {
  return {
    type: SET_CURRENT_LIST,
    data
  };
}

export function uploadList(file, name, user) {
  return dispatch => {
    let config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors",
      body: JSON.stringify({
        file: file,
        list_name: name,
        user_id: user.id
      })
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
