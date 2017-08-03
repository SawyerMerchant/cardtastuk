import { connect } from "react-redux";
import Checkout from "../components/Checkout";
import serialize from "form-serialize";
import { withRouter } from "react-router-dom";

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
      const data = serialize(form, { hash: true });

      let config = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        mode: "no-cors",
        body: JSON.stringify({
          token: token,
          user: user,
          transaction_details: {
            billing_address: data,
            line_items: cart
          }
        })
      };

      fetch("https://requestb.in/1j45nzd1", config)
        .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
          }

          return response.json();
        })
        .then(json => {
          console.log(json);
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
