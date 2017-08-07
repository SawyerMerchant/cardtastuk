export const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";

export function setCurrentCategory(data) {
  return {
    type: SET_CURRENT_CATEGORY,
    data
  };
}
