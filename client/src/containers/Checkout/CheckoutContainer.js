import { connect } from "react-redux";
import Checkout from "../../components/Checkout";
import serialize from "form-serialize";
import { withRouter } from "react-router-dom";
import { calculatePriceUnformatted } from "../../helpers";
import { clearCart } from "../../actions/shoppingCart";

const mapStateToProps = state => {
  return {
    cart: state.shoppingCart,
    user: state.user.data,
    isAuthenticated: state.user.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPayment: async (form, token, cart, user, organization, adminId) => {
      let total = 0;

      cart.forEach(item => {
        let price = calculatePriceUnformatted(item.list.count, item.card.price);
        total += price;
      });

      total /= 100;

      const data = serialize(form, { hash: true });

      let config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "access-token": user.accessToken,
          "token-type": "Bearer",
          client: user.client,
          expiry: user.expiry,
          uid: user.uid
        },
        body: JSON.stringify({
          token: token,
          user: user,
          order_total: total,
          transaction_details: {
            billing_address: data,
            line_items: cart
          }
        })
      };

      try {
        let response = await fetch("/api/v1/orders", config);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        let json = await response.json();

        dispatch(clearCart());
        ownProps.history.push(`/success?id=${json.id}&amount=${json.amount}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
};

const CheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(
  Checkout
);

export default withRouter(CheckoutContainer);
