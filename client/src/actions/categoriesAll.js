export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";

export function getAllCategories(data) {
  return {
    type: GET_ALL_CATEGORIES,
    data
  };
}
