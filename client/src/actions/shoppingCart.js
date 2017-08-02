export const ADD_TO_SHOPPING_CART = "ADD_TO_SHOPPING_CART";
export const REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART";
export const EDIT_SHOPPING_CART = "EDIT_SHOPPING_CART";

export function addToShoppingCart(data, history) {
  history.push("/cart");
  return {
    type: ADD_TO_SHOPPING_CART,
    data
  };
}

export function removeFromShoppingCart(data) {
  return {
    type: REMOVE_FROM_SHOPPING_CART,
    data
  };
}

export function editShoppingCart(data) {
  return {
    type: EDIT_SHOPPING_CART,
    data
  };
}
