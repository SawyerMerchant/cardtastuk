import React from "react";
import { Button, Glyphicon } from "react-bootstrap";
import { calculatePrice } from "../helpers";

const AddToCartWidget = ({
  card,
  currentList,
  cardMessage,
  onAddToCart,
  user
}) => {
  return (
    <div>
      <h3>Number of Entries in List: {currentList.count}</h3>
      <h3>Total: {calculatePrice(currentList.count, card.price)}</h3>

      <form
        id="add-to-cart"
        onSubmit={e => onAddToCart(e, card, currentList, cardMessage, user)}
      >
        <Button bsStyle="info" bsSize="large" type="submit" block>
          <Glyphicon glyph="shopping-cart" />{" "}
          Add To Cart
        </Button>
      </form>
    </div>
  );
};

export default AddToCartWidget;
