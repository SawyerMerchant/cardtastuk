export const SET_NAME = "SET_NAME";
export const CLEAR_NAME = "CLEAR_NAME";

export function setName(data) {
  return {
    type: SET_NAME,
    data
  };
}

export function clearName() {
  return {
    type: CLEAR_NAME
  };
}
