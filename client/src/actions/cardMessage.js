export const CHANGE_CARD_MESSAGE = "CHANGE_CARD_MESSAGE";

export function changeCardMessage(data) {
  return {
    type: CHANGE_CARD_MESSAGE,
    data
  };
}
