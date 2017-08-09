export const SET_SIGNATURE = "SET_SIGNATURE";
export const CLEAR_SIGNATURE = "CLEAR_SIGNATURE";

export function setSignature(data) {
  return {
    type: SET_SIGNATURE,
    data
  };
}

export function clearSignature() {
  return {
    type: CLEAR_SIGNATURE
  };
}
