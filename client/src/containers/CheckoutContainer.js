import { connect } from "react-redux";
import Checkout from "../components/Checkout";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    cart: state.shoppingCart,
    user: state.user.data,
    isAuthenticated: state.user.isAuthenticated
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     }
//   };
// };

const CheckoutContainer = connect(mapStateToProps, null)(Checkout);

export default withRouter(CheckoutContainer);
