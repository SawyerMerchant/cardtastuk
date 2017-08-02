import { connect } from "react-redux";
import { removeFromShoppingCart } from "../actions/shoppingCart";
import ShoppingCart from "../components/ShoppingCart";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemoveFromCart: (e, itemId) => {
      e.preventDefault();
      if (
        window.confirm(
          "Are you sure you want to remove this item from the cart?"
        )
      ) {
        dispatch(removeFromShoppingCart(itemId));
      }
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.shoppingCart
  };
};

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(
  ShoppingCart
);

export default ShoppingCartContainer;
