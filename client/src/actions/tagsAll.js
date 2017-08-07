export const GET_ALL_TAGS = "GET_ALL_TAGS";

export function getAllTags(data) {
  return {
    type: GET_ALL_TAGS,
    data
  };
}