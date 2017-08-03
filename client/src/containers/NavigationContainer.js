import { connect } from "react-redux";
import { endUserSession } from "../actions/user";
import Navigation from "../components/Navigation";

const mapStateToProps = state => {
  return {
    cart: state.shoppingCart,
    user: state.user.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: e => {
      e.preventDefault();
      dispatch(endUserSession());
    }
  };
};

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Navigation);

export default NavigationContainer;
