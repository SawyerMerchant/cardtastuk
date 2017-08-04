import React from "react";
import { calculatePrice } from "../helpers";

const minCardWarning = count => {
  if (count < 25) {
    return (
      <h4 className="text-danger">
        Warning: There is a minimum order quantity of 25 cards. You will be
        charged for 25 cards even if you order less.
      </h4>
    );
  }
  return null;
};
const AddToCartWidget = ({ card, currentList }) => {
  const warning = minCardWarning(+currentList.count);
  return (
    <div>
      <h3>List Chosen: {currentList.name}</h3>
      <h3>Number of Entries in List: {currentList.count}</h3>
      <h3>Total: {calculatePrice(currentList.count, card.price)}</h3>
      {warning}
      <br />
    </div>
  );
};

export default AddToCartWidget;
