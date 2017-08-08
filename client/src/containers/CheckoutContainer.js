import { connect } from "react-redux";
import Checkout from "../components/Checkout";
import serialize from "form-serialize";
import { withRouter } from "react-router-dom";
import { calculatePriceUnformatted } from "../helpers";

const mapStateToProps = state => {
  return {
    cart: state.shoppingCart,
    user: state.user.data,
    isAuthenticated: state.user.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPayment: (form, token, cart, user) => {
      let total = 0;

      cart.forEach(item => {
        let price = calculatePriceUnformatted(item.list.count, item.card.price);
        total += price;
      });

      total /= 100;

      const data = serialize(form, { hash: true });
      let config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
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

      fetch("/api/v1/orders", config)
        .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
          }

          return response.json();
        })
        .then(json => {
          ownProps.history.push(`/success?id=${json.id}&amount=${json.amount}`);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
};

const CheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(
  Checkout
);

export default withRouter(CheckoutContainer);
