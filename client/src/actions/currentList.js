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
      headers: { "Content-Type": "multipart/form-data" },
      body: {
        file: file,
        list_name: name,
        user_id: user.id
      }
    };

    console.log("CONFIG :");
    console.log(config);
    console.log("####################");

    // fetch("https://requestb.in/1nmacum1", config)
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(`${response.status}: ${response.statusText}`);
    //     }

    //     return response.json();
    //   })
    //   .then(json => {
    //     console.log(json);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };
}
